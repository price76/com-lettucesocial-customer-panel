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
				const url = `https://assets.lettucesocial.com/images/creators2/${this.creator.profilePicture}`;
				return url;
			}

		getCreatorTitle
		():string
			{
				const result = `${this.creator.firstName} ${this.creator.lastName.slice(0,1)}`;
				return result;
			}
	}
