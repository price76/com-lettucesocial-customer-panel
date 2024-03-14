
import { Component, EventEmitter, Output } from '@angular/core';
import { ZipcodeHelper } from 'src/helper/zipcodeHelper';

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

		constructor(
			private zipcodeHelper: ZipcodeHelper 
		){}

		validate
		(
			zipCode: string
		): any
			{

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
					zipCode.length != 5
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Incorrect input! Please retry.");
					}
				else if(
					!this.zipcodeHelper.isValid(zipCode)
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Incorrect input! Please retry.");
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
						this.setFilter.emit(this.filterOptions);
					}
			}
	}
