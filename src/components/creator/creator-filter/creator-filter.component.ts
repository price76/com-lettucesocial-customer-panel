
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
			filterOptions: any
		): any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};
			
				// if
				// (
				// 	!filterOptions.project
				// )
				// 	{
				// 		validationResult.hasError = true;
				// 		validationResult.messageList.push("بخش پروژه را انتخاب کنید.");
				// 	}

				// if
				// (
				// 	!filterOptions.startDate
				// )
				// 	{
				// 		validationResult.hasError = true;
				// 		validationResult.messageList.push("تاریخ شروع فیلتر را وارد کنید.");
				// 	}
			
				// if
				// (
				// 	!filterOptions.endDate
				// )
				// 	{
				// 		validationResult.hasError = true;
				// 		validationResult.messageList.push("تاریخ پایان فیلتر را وارد کنید.");
				// 	}
			
			
				return validationResult;
			}

		filter
		():void
			{
				this.validationResult = this.validate(this.filterOptions);

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
