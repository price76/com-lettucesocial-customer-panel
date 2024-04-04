import { Component } from '@angular/core';
import { BusinessService } from '../services/business/business.service';

@Component(
	{
		selector: 'app-login',
		templateUrl: './login.component.html',
		styleUrls: ['./login.component.scss']
	}
)

export class LoginComponent
	{
		constructor
		(
			private businessService: BusinessService
		){}

		email!:string;
		password!:string;
		isLoading:boolean = false;
		validationResult: any ={};

		validate
		(
			email:string,
			password: string
		):any
			{
				let validationResult: any ={
					hasError: false,
					messageList: []
				};

				if
				(
					!email
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter Email.");
					}

				if
				(
					!password
				)
					{
						validationResult.hasError = true;
						validationResult.messageList.push("Enter Password.");
					}

				return validationResult;
			}

		async login
		():Promise<void>
			{
				this.validationResult = this.validate(
					this.email,
					this.password
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
		
								const data: any = await this.businessService.login(
									this.email,
									this.password
								)
		
								let token = data.token;

								this.isLoading = false;
							}
						catch
						(
							error:any
						)
							{
								
							}
					}
			}
	}
