import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../session.service';
import { PricesService } from '../../prices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-customer',
  templateUrl: './scan-customer.component.html',
  styleUrls: ['./scan-customer.component.scss'],
})
export class ScanCustomerComponent implements OnInit {

  constructor(private sessionService: SessionService, private pricesService: PricesService, private router: Router) { }

  ngOnInit() {}

  scanCustomer() {
    this.pricesService.fetchCustomer().subscribe(customer => {
      if (customer.name)
        this.router.navigate(['payment/approve'])
    })
  }

  back() {
    this.router.navigate(['payment'])
  }
}
