import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'creator-list-item',
		templateUrl: './creator-list-item.component.html',
		styleUrls: ['./creator-list-item.component.scss']
	}
)

export class CreatorListItemComponent
	{
		@Input() creator!: any;
	}
