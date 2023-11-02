import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'creator-list',
		templateUrl: './creator-list.component.html',
		styleUrls: ['./creator-list.component.css']
	}
)

export class CreatorListComponent
	{
		@Input() creatorList!: any[];
	}
