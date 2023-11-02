import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class HttpInterceptorService
	{

		constructor(
			private http: HttpClient,
		){}

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

		async get
		(
			url: string, headers: HttpHeaders
		):Promise<any>
			{
				const result = await this.http
					.get(url,
						{
							headers: headers
						}
					).toPromise();

				return result;
			}
	}
