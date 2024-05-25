import { Component, OnInit } from '@angular/core';
import { NavigationHelper } from 'src/helper/navigationHelper';
import { LocalStorageService } from 'src/services/localstorage/local-storage.service';

@Component(
	{
		selector: 'search-limit-reached',
		templateUrl: './search-limit-reached.component.html',
		styleUrls: ['./search-limit-reached.component.scss']
	}
)

export class SearchLimitReachedComponent implements OnInit
	{

		isLoggedIn:boolean = false;
		
		constructor
		(
			private localStorageService: LocalStorageService,
			private navigationHelper : NavigationHelper
		){}

		ngOnInit
		(): void
			{
				const token: string = this.localStorageService.getToken();
				if
				(
					token &&
					token != ""
				)
					{
						this.isLoggedIn = true;
					}
			}

		goToSignIn
		():void
			{
				this.navigationHelper.toLogin();
			}

		goToSignUp
		():void
			{
				this.navigationHelper.toSignup();
			}

	}
