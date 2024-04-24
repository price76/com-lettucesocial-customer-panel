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

		private URL_BUSINESS_GET: string = `${environment.API_URL}/business`;
		private URL_BUSINESS_ADD: string = `${environment.API_URL}/business`;
		private URL_BUSINESS_EDIT_PROFILE: string = `${environment.API_URL}/business/editProfile`;
		private URL_BUSINESS_REQUEST_NOTIFCATION: string = `${environment.API_URL}/business/requestNotification`;
		
		constructor(
			private httpInterceptor: HttpInterceptorService,
		) { }

		async get():Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();
				const result = await this.httpInterceptor.get(
					this.URL_BUSINESS_GET,
					headers
				);

				return result;
			}

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

		async editProfile
		(
			business:any
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					ownerFirstName:business.ownerFirstName,
					ownerLastName: business.ownerLastName,
					mobile: business.mobile,
					businessName: business.businessName,
					city: business.city,
					zipcode: business.zipcode,
					businessInstagramHandle: business.businessInstagramHandle
				};
				const result = await this.httpInterceptor.post(
					this.URL_BUSINESS_EDIT_PROFILE,
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
