import { Injectable } from '@angular/core';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class LocalStorageService
	{

		SEARCHED_ZIP_CODE_LIST_KEY:string = "SEARCHED_ZIP_CODE_LIST";

		constructor() { }

		addZipCodeToList
		(
			zipCode:number
		)
			{
				const zipCodeList:Array<number> = this.getZipCodeList();
				zipCodeList.push(zipCode);
				this.setZipCodeList(zipCodeList);
			}

		setZipCodeList
		(
			zipCodeList: Array<number>
		):void
			{
				const zipCodeListString = zipCodeList.toString();
				localStorage.setItem(this.SEARCHED_ZIP_CODE_LIST_KEY,zipCodeListString);
			}

		getZipCodeList
		():Array<number>
			{
				const zipCodeListString = localStorage.getItem(this.SEARCHED_ZIP_CODE_LIST_KEY);

				if
				(
					zipCodeListString
				)
					{
						const zipCodeList:Array<number> = zipCodeListString
							.split(",")
							.map(
								(i)=> {return parseInt(i)}
							);
						

						return zipCodeList
					}
				else
					{
						return [];
					}
				
			}

		getToken
		():string
			{
				let token = localStorage.getItem("TOKEN");
				if
				(
					token
				)
					{
						return token
					}
				else
					{
						return ""
					}
			}
	}
