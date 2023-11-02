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



@NgModule({
  declarations: [
    AppComponent,
    CreatorPanelComponent,
    CreatorListComponent,
    CreatorListComponent,
    CreatorListItemComponent,
    CreatorFilterComponent,
    LoadingListComponent,
    EmptyListComponent
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
})
export class AppModule { }
