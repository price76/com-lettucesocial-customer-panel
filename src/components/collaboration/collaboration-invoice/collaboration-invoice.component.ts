import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gtag } from 'angular-gtag';
import { ErrorHelper } from 'src/helper/errorHelper';
import { OrderService } from 'src/services/order/order.service';
import { PackageService } from 'src/services/package/package.service';

@Component(
	{
		selector: 'collaboration-invoice',
		templateUrl: './collaboration-invoice.component.html',
		styleUrls: ['./collaboration-invoice.component.scss']
	}
)

export class CollaborationInvoiceComponent implements OnInit
	{
		isLoading:boolean = false;
		packageId?:string;
		creatorId?:string;
		package?:any;

		constructor(
			private packageService:PackageService,
			private orderService:OrderService,
			private route: ActivatedRoute,
			private router: Router,
			private errorHelper: ErrorHelper,
			private gtag: Gtag
		){}

		ngOnInit(): void {
			if
			(
				this.route
			)
				{
					this.route.params.subscribe(params => 
						{
							const packageIdParameter = params['packageId'];
							if
							(
								packageIdParameter
							)
								{
									this.packageId = packageIdParameter;
									this.getPackageById();
								}
							else
								{
									this.navigate_findCreatorByZipCode();
									
								}
							
						}
					);

					if
					(
						this.route.parent
					)
						{
							this.route.parent.params.subscribe(params => 
								{
									const creatorIdParameter = params['crtrId'];
									if
									(
										creatorIdParameter
									)
										{
											this.creatorId = creatorIdParameter;
										}
									else
										{
											//this.navigate_findCreatorByZipCode();
											alert('No creatorID')
											
										}
									
								}
							);
						}
					
				}
		}

		async getPackageById
		():Promise<void>
			{
				if
				(
					this.packageId
				)
					{
						try
							{
								this.isLoading = true;

								const data = await this.packageService.getAllPackageById(
									this.packageId
								);

								this.package = data.package;

								this.gtag.event(
									'add_to_cart',
									{ 
										currency: "USD",
										value: this.package.price,
										items:[
											{
												item_id: `SKU_${this.package._id.toString()}`,
												item_name: this.package.title,
												item_variant: this.creatorId
											}
										]
									}
								);
								
								this.isLoading = false;
							}
						catch
						(
							error:any
						)
							{
								this.isLoading = false;

								this.errorHelper.showErrorAsAlert(error);
							}
						
					}
				
			}

		pay
		():void
			{
				this.createOrder();
			}
		
		async createOrder
		():Promise<void>
			{
				if
				(
					this.packageId &&
					this.creatorId
				)
					{
						this.isLoading = true;

						const data = await this.orderService.add(
							this.creatorId,
							this.packageId,
						);

						this.gtag.event(
							'begin_checkout',
							{ 
								currency: "USD",
								value: this.package.price,
								items:[
									{
										item_id: `SKU_${this.package._id.toString()}`,
										item_name: this.package.title,
										item_variant: this.creatorId
									}
								]
							}
						);

						if
						(
							data.paymentUrl
						)
							{
								let paymentUrl = data.paymentUrl;
								this.isLoading = false;
								this.navigate_paymentFlow(paymentUrl);
							}
						else
							{
								this.isLoading = false;
								this.errorHelper.showErrorAsAlert("Something went wrong!")
							}

						
						
						
					}
			}

		navigate_paymentFlow
		(
			paymentUrl:string
		):void
			{
				window.location.href = paymentUrl;
			}

		navigate_findCreatorByZipCode
		():void
			{
				this.router.navigate(
					['/','creator']
				);
			}
		
	}
