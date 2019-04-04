import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacnPosComponent } from './sacn-pos/sacn-pos.component';
import { SacnEmployeeComponent } from './sacn-employee/sacn-employee.component';
import { AuthorizationComponent } from './authorization/authorization.component';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SacnPosComponent, SacnEmployeeComponent, AuthorizationComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthorizationComponent
      }
    ])
  ]
})
export class AuthorizationModule { }

