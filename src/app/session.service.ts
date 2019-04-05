import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Employee } from "./employee";
import { Customer } from "./customer";
import { Pos } from './pos';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private employee = new Employee() 
  private pos = new Pos()
  private employeesUrl = 'api/employees';
  private possUrl = 'api/poss';

  constructor(private http: HttpClient) { 
    this.employee = {id: 0, name: "Developer"}
    this.pos.id = 0
    this.pos.name = "Place"
  }

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

  getPriceList(): [number] {
    return this.pos.priceList
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`in time of ${operation} get error ${error}`); 
      return of(result as T);
    };
  }
}