import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../session.service';
import { PricesService } from '../../prices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss'],
})
export class ApproveComponent implements OnInit {

  isPaid: boolean = false

  constructor(private sessionService: SessionService, private pricesService: PricesService, private router: Router) { }

  ngOnInit() {}

  back() {
    if (this.isPaid)
      this.router.navigate(['payment'])
    else
      this.router.navigate(['payment/scan_customer'])
  }

  pay() {
    this.pricesService.pay().subscribe(() => { this.isPaid = true })
  }
  
  undoPay() {
    this.pricesService.undoPay().subscribe(() => { this.isPaid = false })
  }

}
