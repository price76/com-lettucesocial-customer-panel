import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationResultComponent } from './components/validation-result/validation-result.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LogoComponent } from './components/logo/logo.component';
import { LogoTypeComponent } from './components/logo-type/logo-type.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ValidationResultComponent,
    LoadingComponent,
    LogoComponent,
    LogoTypeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ValidationResultComponent,
    LoadingComponent,
    LogoComponent,
    LogoTypeComponent,
    HttpClientModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ShareModule { }
