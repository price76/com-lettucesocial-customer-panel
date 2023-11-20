import { Component, EventEmitter, Output } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { BusinessService } from 'src/services/business/business.service';

@Component(
	{
		selector: 'add-business',
		templateUrl: './add-business.component.html',
		styleUrls: ['./add-business.component.scss']
	}
)

export class AddBusinessComponent
	{

		@Output() onBusinessAdded= new EventEmitter<any>();

		business:any ={};
		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private businessService:BusinessService,
			private errorHelper:ErrorHelper
		){}

		validate
		(
			business: any
		):any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};

				if
				(
					!business.ownerTitle
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter First Name and Last Name.");
					}

				if
				(
					!business.email
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter Email.");
					}

				if
				(
					!business.mobile
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter Mobile Number.");
					}

				if
				(
					!business.businessName
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter Business Name.");
					}


				return validationResult;
			}


		async save
		(): Promise<void>
			{
				
				this.validationResult  = this.validate(this.business);

				if
				(
					this.validationResult .hasError
				)
					{
						return;
					}
				else
					{
						try
						{
	
							this.isLoading = true;
	
							const data = await this.businessService.add(
								this.business
							);
	
							console.log(data.businessId);
							this.business._id = data.businessId;

							this.onBusinessAdded.emit(this.business);
	
							this.isLoading = false;
	
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
			}
	}
