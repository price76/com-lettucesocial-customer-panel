import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { BusinessService } from 'src/services/business/business.service';
import { LocalStorageService } from 'src/services/localstorage/local-storage.service';

@Component(
	{
		selector: 'edit-profile',
		templateUrl: './edit-profile.component.html',
		styleUrls: ['./edit-profile.component.scss']
	}
)	

export class EditProfileComponent implements OnInit
	{
		business:any ={};
		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private businessService:BusinessService,
			private errorHelper:ErrorHelper,
			private router: Router,
			private localStorageService: LocalStorageService
		){}

		ngOnInit(): void {
			this.getBusinessInfo();
		}

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
					!business.ownerFirstName
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter first name.");
					}

				if
				(
					!business.ownerLastName
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter last name.");
					}

				if
				(
					!business.mobile
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter mobile number.");
					}

				if
				(
					!business.businessName
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter business name.");
					}

				if
				(
					!business.city
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter city.");
					}

				if
				(
					!business.zipcode
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter zip code.");
					}

				else if
				(
					business.zipcode.length != 5
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Zip code must be 5 digit.");
					}

				if
				(
					!business.businessInstagramHandle
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter business Instagram handle.");
					}

				return validationResult;
			}

		async getBusinessInfo
		():Promise<void>
			{
				try
							{
		
								this.isLoading = true;
		
								const data = await this.businessService.get();

								this.business = data.business;

								this.localStorageService.updateBusinessInfo(this.business);
		
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
		
								const data = await this.businessService.editProfile(
									this.business
								);
		
								this.isLoading = false;
		
								this.navigateTo_home();
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

		navigateTo_home
		():void
			{
				this.router.navigate(['/']);
			}
	}
