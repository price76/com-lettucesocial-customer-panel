import { Component } from '@angular/core';

@Component(
	{
		selector: 'business-request-collaboration',
		templateUrl: './business-request-collaboration.component.html',
		styleUrls: ['./business-request-collaboration.component.css']
	}
)

export class BusinessRequestCollaborationComponent
	{
		creatorId?:string;
		creator?:any;
		planeId?:number;

		sendRequest():void
		{}
	}
