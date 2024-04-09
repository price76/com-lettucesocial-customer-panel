import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'limited-creator-list-item',
		templateUrl: './limited-creator-list-item.component.html',
		styleUrls: ['./limited-creator-list-item.component.scss']
	}
)

export class LimitedCreatorListItemComponent
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
}
