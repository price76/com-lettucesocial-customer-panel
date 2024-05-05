import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationHelper } from 'src/helper/navigationHelper';
import { BusinessService } from 'src/services/business/business.service';
import { LocalStorageService } from 'src/services/localstorage/local-storage.service';

@Component(
	{
		selector: 'app-home',
		templateUrl: './home.component.html',
		styleUrls: ['./home.component.scss']
	}
)

export class HomeComponent implements OnInit
	{
		business:any= {};
		isLoading:boolean = false;

		constructor
		(
			private localStorageService: LocalStorageService,
			private router:Router,
			private businessService: BusinessService,
			private navigationHelper: NavigationHelper
		){}

		async ngOnInit
		(): Promise<void>
			{
				const token = this.localStorageService.getToken();
				
				if
				(
					token &&
					token != ""
				)
					{
						this.business = await this.getBusinessInfo();
						this.localStorageService.updateBusinessInfo(this.business);

						if
						(
							this.business &&
							this.business.businessName
						)
							{
								this.navigationHelper.toSearch();
							}
						else
							{
								this.navigationHelper.toEditProfile();
							}
					}
				else
					{
						this.navigationHelper.toSearch();
					}

			}

		async getBusinessInfo
		():Promise<any>
			{
				try
					{

						this.isLoading = true;

						const data = await this.businessService.get();

						const business = data.business;

						this.isLoading = false;

						return business;

					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;
					}
			}

	}
