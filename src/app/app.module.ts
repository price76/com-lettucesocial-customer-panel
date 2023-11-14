import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CreatorListComponent } from '../components/creator/creator-list/creator-list.component';
import { CreatorPanelComponent } from 'src/components/creator/creator-panel/creator-panel.component';
import { CreatorListItemComponent } from '../components/creator/creator-list-item/creator-list-item.component';
import { CreatorFilterComponent } from '../components/creator/creator-filter/creator-filter.component';
import { LoadingListComponent } from '../components/share/loading-list/loading-list.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { EmptyListComponent } from 'src/components/share/empty-list/empty-list.component';
import { LogoComponent } from 'src/components/share/logo/logo.component';
import { BusinessRequestNotificationComponent } from '../components/business/business-request-notification/business-request-notification.component';
import { BusinessRequestCollaborationComponent } from '../components/business/business-request-collaboration/business-request-collaboration.component';
import { CollaborationInvoiceComponent } from '../components/collaboration/collaboration-invoice/collaboration-invoice.component';
import { CollaborationPlaneComponent } from '../components/collaboration/collaboration-plane/collaboration-plane.component';
import { RequestCollaborationComponent } from '../components/collaboration/request-collaboration/request-collaboration.component';
import { AddBusinessComponent } from '../components/business/add-business/add-business.component';
import { CollaborationReceiptComponent } from '../components/collaboration/collaboration-receipt/collaboration-receipt.component';




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
			LogoComponent,
			BusinessRequestNotificationComponent,
   BusinessRequestCollaborationComponent,
   CollaborationInvoiceComponent,
   CollaborationPlaneComponent,
   RequestCollaborationComponent,
   AddBusinessComponent,
   CollaborationReceiptComponent
		],
		imports: [
			BrowserModule,
			RouterModule,
			AppRoutingModule,
			FormsModule,
			HttpClientModule
		],
		providers: [],
		bootstrap: [AppComponent]
	}
)
export class AppModule { }
