import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { ScanCustomerComponent } from './scan-customer/scan-customer.component';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PaymentComponent, ScanCustomerComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PaymentComponent
      }
    ])
  ]
})
export class PaymentModule { }
