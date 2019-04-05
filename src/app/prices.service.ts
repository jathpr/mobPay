import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Customer } from "./customer";

import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  constructor(private http: HttpClient, private sessionService: SessionService) {
    // this.customer.name = "Qa"
    // this.customer.credits = 2000
    // this.currentPrice = 777
  }

  private currentPrice
  private DEFAULT_PRICE_LIST = [100,300,500,5000]
  private customer = new Customer()
  private customerUrl = 'api/customers/6';

  fetchCustomer(): Observable<Customer> {
    return this.http.get<Customer>(this.customerUrl).pipe(
      catchError(this.sessionService.handleError<Customer>('fetchCustomer', new Customer())),
      tap(customer => {this.customer = customer})
    );
  }

  getCustomerName(): string {
    return this.customer.name
  }

  getPrices(): number[] {
    let priceList = this.sessionService.getPriceList()
    if (priceList && priceList.length)
      return priceList
    return this.DEFAULT_PRICE_LIST
  }

  setPrice(price: number): void {
    this.currentPrice = price
  }

  getPrice(): number {
    return this.currentPrice;
  }

  chkCash(): boolean {
    return this.currentPrice <= this.customer.credits
  }

  pay():  Observable<number> {
    return this.http.put(this.customerUrl, {...this.customer, credits: this.customer.credits - this.currentPrice}, httpOptions).pipe(
      catchError(this.sessionService.handleError<any>('pay')),
      tap(() => {this.customer.credits = this.customer.credits - this.currentPrice,   console.log(this.customer)})
    );
  }

  undoPay():  Observable<number> {
    return this.http.put(this.customerUrl, {...this.customer, credits: this.customer.credits + this.currentPrice}, httpOptions).pipe(
      catchError(this.sessionService.handleError<any>('undoPay')),
      tap(() => {this.customer.credits = this.customer.credits + this.currentPrice,   console.log(this.customer)})
    );
  }
}
