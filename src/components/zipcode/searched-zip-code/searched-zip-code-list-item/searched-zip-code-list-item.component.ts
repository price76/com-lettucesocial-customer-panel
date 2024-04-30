import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'searched-zip-code-list-item',
		templateUrl: './searched-zip-code-list-item.component.html',
		styleUrls: ['./searched-zip-code-list-item.component.scss']
	}
)

export class SearchedZipCodeListItemComponent
	{
		@Input() searchedZipCode:string="";

	}
