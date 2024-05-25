import { Injectable } from '@angular/core';

@Injectable(
	{
  		providedIn: 'root'
	}
)

export class LocalStorageService
	{

		SEARCHED_ZIP_CODE_LIST_KEY:string = "SEARCHED_ZIP_CODE_LIST";
		IS_APPROVED_KEY: string = "IS_APPROVED";
		BUSINESS_NAME_KEY: string = "BUSINESS_NAME";
		TOKEN_KEY: string = "TOKEN";

		constructor() { }

		addZipCodeToList
		(
			zipCode:string
		):void
			{
				console.log("121312");
				
				const zipCodeList:string[] = this.getZipCodeList();
				if
				(
					!zipCodeList.includes(zipCode)
				)
					{
						zipCodeList.push(zipCode);
						this.setZipCodeList(zipCodeList);
					}
			}

		setZipCodeList
		(
			zipCodeList: string[]
		):void
			{
				const zipCodeListString = zipCodeList.toString();
				localStorage.setItem(this.SEARCHED_ZIP_CODE_LIST_KEY,zipCodeListString);
			}

		getZipCodeList
		():string[]
			{
				const zipCodeListString = localStorage.getItem(this.SEARCHED_ZIP_CODE_LIST_KEY);

				if
				(
					zipCodeListString
				)
					{
						const zipCodeList:string[] = zipCodeListString
							.split(",");
						

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
				let token = localStorage.getItem(this.TOKEN_KEY);
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

		getIsApproved
		():boolean
			{
				const isApprovedString: any = localStorage.getItem(this.IS_APPROVED_KEY);

				if
				(
					isApprovedString &&
					isApprovedString == "true"
				)
					{
						return true;
					}
				else
					{
						return false
					}
			}

		setIsApproved
		(
			isApproved:boolean
		):void
			{
				let isApprovedString: string = "false";

				if
				(
					isApproved
				)
					{
						isApprovedString = "true";
					}

				localStorage.setItem(this.IS_APPROVED_KEY,isApprovedString);

			}

		getBusinessName
		():string
			{
				const businessName: string | null = localStorage.getItem(this.BUSINESS_NAME_KEY);

				if(businessName)
				{
					return businessName
				}
				else
				{
					return "";
				}

			}

		setBusinessName
		(
			businessName:string
		):void
			{
				localStorage.setItem(this.BUSINESS_NAME_KEY,businessName);
			}

		updateBusinessInfo
		(
			business:any
		):void
			{
				this.setIsApproved(business.isApproved);

				if
				(
					business.businessName
				)
					{
						this.setBusinessName(business.businessName);
					}
			}

		logout():void
			{
				localStorage.removeItem(this.IS_APPROVED_KEY);
				localStorage.removeItem(this.BUSINESS_NAME_KEY);
				localStorage.removeItem(this.TOKEN_KEY);
			}
	}
