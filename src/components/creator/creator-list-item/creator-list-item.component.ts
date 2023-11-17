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

		getCreatorImageUrl
		():string
			{
				const instagramHandleLoweCase = this.creator.instagramHandle.toLowerCase();
				const url = `http://assets.lettucesocial.com/creators/${instagramHandleLoweCase}.png`;
				return url;
			}
	}
