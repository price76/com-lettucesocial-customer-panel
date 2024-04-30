import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'searched-zip-code-list',
		templateUrl: './searched-zip-code-list.component.html',
		styleUrls: ['./searched-zip-code-list.component.scss']
	}
)

export class SearchedZipCodeListComponent
	{
		@Input() searchedZipCodeList:string[]=[];
	}
