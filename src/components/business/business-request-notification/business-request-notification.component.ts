import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { BusinessService } from 'src/services/business/business.service';

@Component(
	{
		selector: 'business-request-notification',
		templateUrl: './business-request-notification.component.html',
		styleUrls: ['./business-request-notification.component.scss']
	}
)

export class BusinessRequestNotificationComponent
	{
		@Input() zipcode!:number;

		business!:any;
		isLoading:boolean = false;

		
		constructor
		(
			private router: Router,
			private businessService:BusinessService,
			private errorHelper:ErrorHelper
		){}
		
		onBusinessAdded
		(
			business:any
		):void
			{
				this.business = business;
				this.businessRequestedNotificationForZipCode();
			}

		async businessRequestedNotificationForZipCode
		():Promise<void>
			{
				try
					{

						this.isLoading = true;

						const data = await this.businessService.requestNotification(
							this.business._id,
							this.zipcode
						);

						this.isLoading = false;
						this.navigate_thanks();

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

		navigate_thanks
		():void
			{
				this.router.navigate(
					['/','creator']
				);
			}

	}
