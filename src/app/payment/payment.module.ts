import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { ScanCustomerComponent } from './scan-customer/scan-customer.component';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ApproveComponent } from './approve/approve.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaymentComponent, ScanCustomerComponent, ApproveComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PaymentComponent
      },
      {
        path: 'scan_customer',
        component: ScanCustomerComponent
      },
      {
        path: 'approve',
        component: ApproveComponent
      }
    ])
  ]
})
export class PaymentModule { }
