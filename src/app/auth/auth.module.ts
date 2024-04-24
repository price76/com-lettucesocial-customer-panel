import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { ShareModule } from '../share/share.module';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ConfirmEmailComponent,
    AuthHomeComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    LoginComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AuthModule { }
export { LoginComponent };

