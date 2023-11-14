import { Component, OnInit } from '@angular/core';

@Component(
	{
		selector: 'collaboration-invoice',
		templateUrl: './collaboration-invoice.component.html',
		styleUrls: ['./collaboration-invoice.component.css']
	}
)

export class CollaborationInvoiceComponent
	{
		isLoading:boolean = false;

		pay
		():void
			{

			}
		
		createOrder
		():void
			{
				this.isLoading = true;

				this.isLoading = false;
			}
		
	}
