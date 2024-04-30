import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localstorage/local-storage.service';
import { Router } from '@angular/router';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class HttpInterceptorService
	{

		constructor(
			private http: HttpClient,
			private localStorageService: LocalStorageService,
			private router: Router
		){}

		injectTokenToHeader
		(
			headers: HttpHeaders
		):HttpHeaders
			{
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
				try
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
				catch
				(
					error: any
				)
					{
						if
						(
							error.status
							&&
							(
								error.status == 401 ||
								error.status == 403
							)
						)
							{
								this.localStorageService.logout();
								this.router.navigate(['/','auth','login']);
							}
						else
							{
								throw error;
							}
						
					}
				
			}
	}
