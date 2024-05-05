import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class NavigationHelper
	{
        constructor
		(
			private router:Router,
		){}
        
        toEditProfile
		():void
			{
				this.router.navigate(['/','editProfile']);
			}

        toSearch
		():void
			{
				this.router.navigate(['/','creator']);
			}

        toLogin
		():void
			{
				this.router.navigate(['/','auth','login']);
			}

        toSignup
		():void
			{
				this.router.navigate(['/','auth','signup']);
			}
    }