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
				const renamedInstagramHandleLoweCase = instagramHandleLoweCase.replace(/\./g, '_');
				const url = `https://assets.lettucesocial.com/images/creators/${renamedInstagramHandleLoweCase}.png`;
				return url;
			}

		getCreatorTitle
		():string
			{
				const result = `${this.creator.firstName} ${this.creator.lastName.slice(0,1)}`;
				return result;
			}
	}
