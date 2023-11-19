
import { Component, EventEmitter, Output } from '@angular/core';

@Component(
	{
		selector: 'creator-filter',
		templateUrl: './creator-filter.component.html',
		styleUrls: ['./creator-filter.component.scss']
	}
)

export class CreatorFilterComponent
	{
		@Output() setFilter = new EventEmitter<any>();

		validationResult: any ={};
		filterOptions:any = {}
		zipCode!:string;

		validate
		(
			zipCode: string
		): any
			{
				console.log('asdf');
				
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				if
				(
					!zipCode
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter Zipcode.");
					}
				else if
				(
					parseInt(zipCode) < 9999
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter Valid Zipcode.");
					}

				return validationResult;
			}

		filter
		():void
			{

				this.validationResult = this.validate(this.zipCode);

				if
				(
					this.validationResult.hasError
				)
					{
						return;
					}
				else
					{
						this.filterOptions.zipCode = this.zipCode;
						//this.filterText = `از ${this.filterOptions.startDateShamsi} تا ${this.filterOptions.endDateShamsi} برای ${this.filterOptions.project.title}` 
						this.setFilter.emit(this.filterOptions);
					}
			}
	}
