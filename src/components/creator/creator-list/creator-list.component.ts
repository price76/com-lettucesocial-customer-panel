import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'creator-list',
		templateUrl: './creator-list.component.html',
		styleUrls: ['./creator-list.component.scss']
	}
)

export class CreatorListComponent
	{
		@Input() creatorList!: any[];

		isLimited
		(
			creator:any
		):boolean
			{
				if
				(
					creator.instagramHandle.length > 1
				)
					{
						return false;
					}
				else
					{
						return true;
					}
			}

	}
