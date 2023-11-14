import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../http-interceptor/http-interceptor.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class OrderService
	{

		private URL_BORDER_ADD: string = `${environment.API_URL}/order`;

		constructor(
			private httpInterceptor: HttpInterceptorService,
		) { }

		async add
		(
			creatorId: string,
            packageId: string,
		):Promise<any>
			{
				let headers: HttpHeaders = new HttpHeaders();
				let body: any = {
					creatorId: creatorId,
					packageId: packageId
				};
				const result = await this.httpInterceptor.post(
					this.URL_BORDER_ADD,
					headers,
					body
				);

				return result;
			}
	}
