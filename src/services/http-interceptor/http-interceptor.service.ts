import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localstorage/local-storage.service';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class HttpInterceptorService
	{

		constructor(
			private http: HttpClient,
			private localStorageService: LocalStorageService
		){}

		injectTokenToHeader
		(
			headers: HttpHeaders
		):HttpHeaders
			{
				console.log("what?");
				
				const token = this.localStorageService.getToken();
				if(
					token &&
					token != ""
				)
					{
						let extendedHeader:HttpHeaders = headers.append("token",token);
						return extendedHeader;
					}
				else
					{
						return headers;
					}
				
			}

		async post
		(
			url: string,
			headers: HttpHeaders,
			body: any
		):Promise<any>
			{
				let newHeder: HttpHeaders = this.injectTokenToHeader(headers);
				const result = await  this.http
					.post(
						url,
						body,
						{ headers: newHeder }
					).toPromise();
				
				return result;
			}

		async get
		(
			url: string,
			headers: HttpHeaders
		):Promise<any>
			{
				let newHeder: HttpHeaders = this.injectTokenToHeader(headers);
				const result = await this.http
					.get(url,
						{
							headers: newHeder
						}
					).toPromise();

				return result;
			}
	}
