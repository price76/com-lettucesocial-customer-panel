import { Component } from '@angular/core';
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
							this.business._id = data.businessId
	
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
