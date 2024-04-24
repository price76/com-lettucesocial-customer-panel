import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreatorListComponent } from '../components/creator/creator-list/creator-list.component';
import { CreatorPanelComponent } from 'src/components/creator/creator-panel/creator-panel.component';
import { CreatorListItemComponent } from '../components/creator/creator-list-item/creator-list-item.component';
import { CreatorFilterComponent } from '../components/creator/creator-filter/creator-filter.component';
import { LoadingListComponent } from '../components/share/loading-list/loading-list.component';

import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { EmptyListComponent } from 'src/components/share/empty-list/empty-list.component';

import { BusinessRequestNotificationComponent } from '../components/business/business-request-notification/business-request-notification.component';
import { BusinessRequestCollaborationComponent } from '../components/business/business-request-collaboration/business-request-collaboration.component';
import { CollaborationInvoiceComponent } from '../components/collaboration/collaboration-invoice/collaboration-invoice.component';
import { CollaborationPlaneComponent } from '../components/collaboration/collaboration-plane/collaboration-plane.component';
import { RequestCollaborationComponent } from '../components/collaboration/request-collaboration/request-collaboration.component';
import { AddBusinessComponent } from '../components/business/add-business/add-business.component';
import { CollaborationReceiptComponent } from '../components/collaboration/collaboration-receipt/collaboration-receipt.component';



import * as Sentry from "@sentry/angular-ivy";

import { BusinessRequestNotificationFinishedComponent } from '../components/business/business-request-notification-finished/business-request-notification-finished.component';
import { NavigationRibonComponent } from '../components/share/navigation-ribon/navigation-ribon.component';


import { GtagModule } from 'angular-gtag';

import { ShareModule } from './share/share.module';
import { LimitedCreatorListItemComponent } from 'src/components/creator/limited-creator-list-item/limited-creator-list-item.component';
import { EditProfileComponent } from '../components/business/edit-profile/edit-profile.component';
import { BusinessMenuComponent } from '../components/business/business-menu/business-menu.component';
import { EmailConfirmedComponent } from '../components/business/email-confirmed/email-confirmed.component';
import { HomeComponent } from '../components/business/home/home.component';





@NgModule(
	{
		declarations: [
			AppComponent,
			CreatorPanelComponent,
			CreatorListComponent,
			CreatorListComponent,
			CreatorListItemComponent,
			CreatorFilterComponent,
			LoadingListComponent,
			EmptyListComponent,
			BusinessRequestNotificationComponent,
			BusinessRequestCollaborationComponent,
			CollaborationInvoiceComponent,
			CollaborationPlaneComponent,
			RequestCollaborationComponent,
			AddBusinessComponent,
			CollaborationReceiptComponent,
   BusinessRequestNotificationFinishedComponent,
   NavigationRibonComponent,
   LimitedCreatorListItemComponent,
   EditProfileComponent,
   BusinessMenuComponent,
   EmailConfirmedComponent,
   HomeComponent
   
		],
		imports: [
			ShareModule,
			BrowserModule,
			RouterModule,
			AppRoutingModule,
			FormsModule,
			HttpClientModule,
			GtagModule.forRoot({ trackingId: 'G-854YHJY62E', trackPageviews: true })
		],
		providers: [
			{
				provide: ErrorHandler,
				useValue: Sentry.createErrorHandler(
					{
						showDialog: true,
				  	}
				)
			},
			{
				provide: Sentry.TraceService,
				deps: [Router],
			},
			{
				provide: APP_INITIALIZER,
				useFactory: () => () => {},
				deps: [Sentry.TraceService],
				multi: true,
			}
		],
		bootstrap: [AppComponent]
	}
)
export class AppModule { }
