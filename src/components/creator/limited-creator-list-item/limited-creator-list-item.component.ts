import { Component, Input, OnInit } from '@angular/core';
import { NavigationHelper } from 'src/helper/navigationHelper';
import { LocalStorageService } from 'src/services/localstorage/local-storage.service';

@Component(
	{
		selector: 'limited-creator-list-item',
		templateUrl: './limited-creator-list-item.component.html',
		styleUrls: ['./limited-creator-list-item.component.scss']
	}
)

export class LimitedCreatorListItemComponent implements OnInit
	{
		@Input() creator!: any;

		isLoggedIn:boolean = false;
		isApproved:boolean = false;

		constructor
		(
			private navigationHelper: NavigationHelper,
			private localStorageService: LocalStorageService
		){}
			
		ngOnInit(): void {
			const token: string = this.localStorageService.getToken();
			if
			(
				token &&
				token != ""
			)
				{
					this.isLoggedIn = true;
					

					const isApproved: boolean = this.localStorageService.getIsApproved();
					if
					(
						isApproved
					)
						{
							this.isApproved = true;
						}
					
				}
		}

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

		goToSignUp
		():void
			{
				this.navigationHelper.toSignup();
			}
}
