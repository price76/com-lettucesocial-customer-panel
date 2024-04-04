import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationResultComponent } from './components/validation-result/validation-result.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LogoComponent } from './components/logo/logo.component';
import { LogoTypeComponent } from './components/logo-type/logo-type.component';

@NgModule({
  declarations: [
    ValidationResultComponent,
    LoadingComponent,
    LogoComponent,
    LogoTypeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ValidationResultComponent,
    LoadingComponent,
    LogoComponent,
    LogoTypeComponent
  ]
})
export class ShareModule { }
