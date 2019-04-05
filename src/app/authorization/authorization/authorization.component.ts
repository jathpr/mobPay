import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../session.service';
import { Router } from '@angular/router';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {

  constructor(private nfc: NFC, private ndef: Ndef, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {}

  scanPos(){
    this.sessionService.fetchPos().subscribe(this.chkIfScansComplited)
  }

  scanEmployee(){
    this.sessionService.fetchEmployee().subscribe(this.chkIfScansComplited)
  }

  chkIfScansComplited = () => {
    if (this.sessionService.getPosName() && this.sessionService.getEmployeeName()) {
      this.router.navigate(['payment'])
    }
  }

}
