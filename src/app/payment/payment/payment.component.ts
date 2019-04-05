import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../session.service';
import { PricesService } from '../../prices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})

export class PaymentComponent implements OnInit {

  constructor(private sessionService: SessionService, private pricesService: PricesService, private router: Router) { }

  prices: number[]
  totalPrice: number;

  ngOnInit() {
      if (!this.sessionService.getPosName() || !this.sessionService.getEmployeeName()) {
        this.router.navigate(['authorization'])
      } else {
        this.prices = this.pricesService.getPrices()
        if (this.pricesService.getPrice()) this.totalPrice = this.pricesService.getPrice()
      }
  }

  add(price: number) {
    if (!this.totalPrice) this.totalPrice = 0;
    this.totalPrice += price;
    if (this.totalPrice < 0) this.totalPrice = null;
  }

  clear() {
    this.totalPrice = null;
  }

  pay() {
    if (this.totalPrice > 0) {
      this.pricesService.setPrice(this.totalPrice);
      this.router.navigate(['payment/scan_customer'])
    }
  }
}
