import { Component } from '@angular/core';

@Component(
	{
		selector: 'business-request-notification',
		templateUrl: './business-request-notification.component.html',
		styleUrls: ['./business-request-notification.component.scss']
	}
)

export class BusinessRequestNotificationComponent
	{
		business!:any;
		
		onBusinessAdded
		(
			business:any
		):void
			{
				this.business = business;
			}

	}
