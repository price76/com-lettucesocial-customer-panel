import { Component } from '@angular/core';
import { BusinessService } from '../services/business/business.service';
import { Router } from '@angular/router';

declare const FB: any;

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
			private businessService: BusinessService,
			private router: Router
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

								this.storeTokenToLocalStorage(token);

								this.navigateTo_home();


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

		storeTokenToLocalStorage
		(
			token: string
		):void
			{
				localStorage.setItem("TOKEN",token);
			}

		navigateTo_home
		():void
			{
				this.router.navigate(['/']);
			}

		loginWithFacebook
		():void
			{
				FB.login(
					async (result:any)=>{
						const accessToken = result.authResponse.accessToken;
						console.log(accessToken);
						
						try
						{
							

							// this.isLoading = true;
	
							// const data: any = await this.businessService.loginWithFacebook(
							// 	accessToken
							// )
	
							// let token = data.token;

							// this.storeTokenToLocalStorage(token);
							// this.navigateToSearchPage();


							// this.isLoading = false;
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
						
					},
					{scope:'email'}
				)
			}
	}
