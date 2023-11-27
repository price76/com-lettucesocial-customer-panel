import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../http-interceptor/http-interceptor.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class BusinessService
	{

		private URL_BUSINESS_ADD: string = `${environment.API_URL}/business`;
		private URL_BUSINESS_REQUEST_NOTIFCATION: string = `${environment.API_URL}/business/requestNotification`;
		
		constructor(
			private httpInterceptor: HttpInterceptorService,
		) { }

		async add
		(
			business:any
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					ownerTitle:business.ownerTitle,
					email: business.email,
					mobile: business.mobile,
					businessName: business.businessName
				};
				const result = await this.httpInterceptor.post(
					this.URL_BUSINESS_ADD,
					headers,
					body
				);

				return result;
			}

		async requestNotification
		(
			businessId:string,
			zipcode:number
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					businessId:businessId,
					zipcode: zipcode
				};
				const result = await this.httpInterceptor.post(
					this.URL_BUSINESS_REQUEST_NOTIFCATION,
					headers,
					body
				);

				return result;
			}
	}
