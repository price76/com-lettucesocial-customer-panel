import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

		
		constructor
		(
			private router: Router,
		){}
		
		onBusinessAdded
		(
			business:any
		):void
			{
				this.business = business;
				this.navigate_thanks();
			}

		businessRequestedNotificationForZipCode
		():void
			{

			}

		navigate_thanks
		():void
			{
				this.router.navigate(
					['/','creator']
				);
			}

	}
