import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from 'src/services/business/business.service';
import { LocalStorageService } from 'src/services/localstorage/local-storage.service';

@Component(
	{
		selector: 'business-menu',
		templateUrl: './business-menu.component.html',
		styleUrls: ['./business-menu.component.scss']
	}
)

export class BusinessMenuComponent implements OnInit
	{
		business:any= {};
		isLoading:boolean = false;

		constructor
		(
			private businessService:BusinessService,
			private localStorageService:LocalStorageService,
			private router: Router
		){}

		ngOnInit
		(): void
			{
				const token = this.localStorageService.getToken();
				if
				(
					token &&
					token != ""
				)
					{
						this.getBusinessInfo();
					}
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
					}
			}

		logout():void
			{
				this.localStorageService.logout();
				this.router.navigate(['/','auth','login']);
			}

	}
