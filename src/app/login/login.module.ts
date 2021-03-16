import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthServices} from './auth.services';
import {SharedModule} from '../shared/component/shared.module';

@NgModule({
  declarations: [LoginPageComponent, LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: LoginPageComponent, children: [
          {path: '', redirectTo: '/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule, LoginPageComponent],
  providers: [AuthServices]
})
export class LoginModule {
}
