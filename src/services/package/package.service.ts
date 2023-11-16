import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../http-interceptor/http-interceptor.service';
import { environment } from 'src/environments/environment.development';
import { HttpHeaders } from '@angular/common/http';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class PackageService
	{

		private URL_PACKAGE_GETALL: string = `${environment.API_URL}/package`;
		private URL_PACKAGE_GET_BY_ID: string = `${environment.API_URL}/package`;

		constructor(
			private httpInterceptor: HttpInterceptorService,
		) { }

		async getAllPackage
		():Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				const result = await this.httpInterceptor.get(
					this.URL_PACKAGE_GETALL,
					headers
				);

				return result;
			}

		async getAllPackageById
		(
			pacakgeId:string
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				const url: string = `${this.URL_PACKAGE_GET_BY_ID}/${pacakgeId}`

				const result = await this.httpInterceptor.get(
					url,
					headers
				);

				return result;
			}

	}
