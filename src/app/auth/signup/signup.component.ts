import { Component } from '@angular/core';
import { BusinessService } from '../services/business/business.service';
import { Router } from '@angular/router';

@Component(
	{
		selector: 'signup',
		templateUrl: './signup.component.html',
		styleUrls: ['./signup.component.scss']
	}
)

export class SignupComponent
	{
		business:any ={};
		isLoading:boolean = false;
		validationResult: any ={};

		constructor
		(
			private businessService: BusinessService,
			private router: Router
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

				if
				(
					!business.password
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter Password.");
					}


				return validationResult;
			}


		async signup
		(): Promise<void>
			{
				
				this.validationResult = this.validate(
					this.business
				);

				if
				(
					this.validationResult.hasError
				)
					{
						return;
					}
				else
					{
						try
							{
								

								this.isLoading = true;
		
								const data: any = await this.businessService.signup(
									this.business.businessName,
									this.business.mobile,
									this.business.ownerTitle,
									this.business.email,
									this.business.password
								)
		
								let token = data.token;

								
								this.navigateToLoginPage();


								this.isLoading = false;
							}
						catch
						(
							error:any
						)
							{
								this.isLoading = false;
								if
								(
									error.status == 0
								)
									{
										this.validationResult.hasError = true;
										this.validationResult.messageList.push("Check internet connection.");
										
									}
								else
									{
										if
										(
											error.error &&
											error.error.message
										)
											{
												this.validationResult.hasError = true;
												this.validationResult.messageList.push(error.error.message);
												//alert(error.error.message);
											}
										else
											{
												alert(error)
											}
									}
							}
					}
			}

			navigateToLoginPage
			():void
				{
					this.router.navigate(['login']);
				}
	}
