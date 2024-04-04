import { Injectable } from '@angular/core';

@Injectable(
	{
  		providedIn: 'root'
	}
)	

export class BusinessService
	{

		constructor() { }

		async login(
			email:string,
			password:string
		):Promise<any>
			{
				
			}

	}
