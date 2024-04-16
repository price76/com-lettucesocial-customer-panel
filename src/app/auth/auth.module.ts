import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { ShareModule } from '../share/share.module';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
export { LoginComponent };

