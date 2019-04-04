import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Employee } from "./employee";
import { Customer } from "./customer";
import { Pos } from './pos';

import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private employee = new Employee()
  private customer = new Customer()
  private pos = new Pos()
  private employeesUrl = 'api/employees';
  private customerUrl = 'api/customers/6';
  private possUrl = 'api/poss';

  constructor(private http: HttpClient) { }

  getPosName(): string {
    return this.pos.name
  }

  getEmployeeName(): string {
    return this.employee.name
  }

  fetchPos(): Observable<Pos> {
    return this.http.get<Pos>(this.possUrl).pipe(
      catchError(this.handleError<Pos>('fetchPos', new Pos())),
      tap(poss => {this.pos = poss[0]})
    );
  }

  fetchEmployee(): Observable<Employee> {
    return this.http.get<Employee>(this.employeesUrl).pipe(
      catchError(this.handleError<Employee>('fetchUser', new Employee())),
      tap(employees => {this.employee = employees[0]})
    );
  }

  fetchCustomer(): Observable<Customer> {
    return this.http.get<Customer>(this.customerUrl).pipe(
      catchError(this.handleError<Customer>('fetchCustomer', new Customer())),
      tap(customer => {this.customer = customer})
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`in time of ${operation} get error ${error}`); 
      return of(result as T);
    };
  }
}



  // getPriceList(): [number] {
  //   console.log(this.pos )
  //   console.log(this.employee )
  //   if (this.pos && this.pos.priceList && this.pos.priceList.length)
  //     return this.pos.priceList
  //   return null
  // }

  // pay(cash: number):  Observable<number> {
  //   return this.http.put(this.customerUrl, {...this.customer, credits: this.customer.credits - cash}, httpOptions).pipe(
  //     catchError(this.handleError<any>('pay')),
  //     tap(() => {this.customer.credits = this.customer.credits - cash,   console.log(this.customer)})
  //   );
  // }

  // undoPay(cash: number):  Observable<number> {
  //   return this.http.put(this.customerUrl, {...this.customer, credits: this.customer.credits + cash}, httpOptions).pipe(
  //     catchError(this.handleError<any>('undoPay')),
  //     tap(() => {this.customer.credits = this.customer.credits + cash,   console.log(this.customer)})
  //   );
  // }

