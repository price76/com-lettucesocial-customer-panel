import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/services/localstorage/local-storage.service';

@Component(
	{
		selector: 'searched-zip-code-panel',
		templateUrl: './searched-zip-code-panel.component.html',
		styleUrls: ['./searched-zip-code-panel.component.scss']
	}
)

export class SearchedZipCodePanelComponent implements OnInit
	{
		
		searchedZipCodeList:string[]=[]

		constructor
		(
			private localStorageService: LocalStorageService
		){}

		ngOnInit
		(): void
			{
				console.log('hhh');
				
				const storedSearchedZipCodeList:string[] = this.localStorageService.getZipCodeList();
				if
				(
					storedSearchedZipCodeList.length > 0
				)
					{
						this.searchedZipCodeList = storedSearchedZipCodeList
					}
			}
	}
