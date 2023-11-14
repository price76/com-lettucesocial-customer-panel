import { HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpInterceptorService } from '../http-interceptor/http-interceptor.service';

@Injectable(
	{
		providedIn: 'root'
	}
)
export class CreatorService
	{

		private URL_CREATOR_GETALL: string = `${environment.API_URL}/creator`;
		private URL_CREATOR_GETALL_BY_ZIPCODE: string = `${environment.API_URL}/creator/byZipCode`;

		constructor(
			private httpInterceptor: HttpInterceptorService,
		) { }

		async getAllCreator
		():Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				const result = await this.httpInterceptor.get(
					this.URL_CREATOR_GETALL,
					headers
				);

				return result;
			}

		async getAllCreatorByZipcode
		(
			zipcode:number
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();

				const url: string = `${this.URL_CREATOR_GETALL_BY_ZIPCODE}/${zipcode.toString()}`

				const result = await this.httpInterceptor.get(
					url,
					headers
				);

				return result;
			}

	}
