import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable(
	{
  		providedIn: 'root'
	}
)	

export class BusinessService
	{

		private URL_BUSINESS_LOGIN: string = `${environment.API_URL}/business/login`;
		private URL_BUSINESS_SIGNUP: string = `${environment.API_URL}/business/signup`;

		constructor(
			private http: HttpClient,
		){}

		async login(
			email:string,
			password:string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					email: email,
					password: password
				};
				const result = await this.post(
					this.URL_BUSINESS_LOGIN,
					headers,
					body
				);

				return result;
			}

		async signup(
			businessName:string,
			mobile:string,
			ownerTitle:string,
			email:string,
			password:string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					businessName: businessName,
					mobile: mobile,
					ownerTitle: ownerTitle,
					email: email,
					password: password
				};
				const result = await this.post(
					this.URL_BUSINESS_SIGNUP,
					headers,
					body
				);

				return result;
			}

			
	
		async post
		(
			url: string,
			headers: HttpHeaders,
			body: any
		):Promise<any>
			{
				const result = await  this.http
					.post(
						url,
						body,
						{ headers: headers }
					).toPromise();
				
				return result;
			}

	}
