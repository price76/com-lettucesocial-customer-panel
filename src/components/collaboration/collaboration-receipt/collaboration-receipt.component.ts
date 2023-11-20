import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { OrderService } from 'src/services/order/order.service';

@Component(
	{
		selector: 'collaboration-receipt',
		templateUrl: './collaboration-receipt.component.html',
		styleUrls: ['./collaboration-receipt.component.scss']
	}
)

export class CollaborationReceiptComponent implements OnInit
	{
		
		isLoading:boolean = false;
		orderId?:string;
		order?:any;
		business?:any;

		

		constructor(
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
							const orderIdParameter = params['orderId'];
							if
							(
								orderIdParameter
							)
								{
									this.orderId = orderIdParameter;
									this.getOrderById();
								}
							else
								{
									//Invalid data
									//this.navigate_findCreatorByZipCode();
									alert('invalid data')
									
								}
							
						}
					);
				}
		}

		async getOrderById
		():Promise<void>
			{
				if
				(
					this.orderId
				)
					{
						this.isLoading = true;

						const data = await this.orderService.getOrderById(
							this.orderId
						);

						this.order = data.order;
						
						this.isLoading = false;
					}
				
			}

		onBusinessAdded
		(
			business:any
		):void
			{
				this.business = business;
			}
	}
