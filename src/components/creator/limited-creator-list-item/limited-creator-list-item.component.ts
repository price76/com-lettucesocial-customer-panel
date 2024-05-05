import { Component, Input } from '@angular/core';
import { NavigationHelper } from 'src/helper/navigationHelper';

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

		constructor
		(
			private navigationHelper: NavigationHelper
		){}

		getCreatorImageUrl
		():string
			{
				const url = `https://assets.lettucesocial.com/images/creators2/${this.creator.profilePicture}`;
				return url;
			}

		goToSignIn
		():void
			{
				this.navigationHelper.toLogin();
			}
}
