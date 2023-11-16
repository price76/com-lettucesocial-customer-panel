import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { OrderService } from 'src/services/order/order.service';
import { PackageService } from 'src/services/package/package.service';

@Component(
	{
		selector: 'collaboration-invoice',
		templateUrl: './collaboration-invoice.component.html',
		styleUrls: ['./collaboration-invoice.component.css']
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
			private errorHelper: ErrorHelper
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
						this.isLoading = true;

						const data = await this.packageService.getAllPackageById(
							this.packageId
						);

						this.package = data.package;
						
						this.isLoading = false;
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

						if
						(
							data.paymentUrl
						)
							{
								let paymentUrl = data.paymentUrl;
						
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
