import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerService implements InMemoryDbService {
  createDb() {
    const employees = [
      { id: 17, name: "Bora" }
    ]

    const poss = [
      { id: 3, name: "three axe", priceList: [100, 300, 500, 1000] }
    ]

    const customers = [
      {id: 6, name: "Gomer", credits: 3600}
    ]

    return {employees, poss, customers};
  }

}