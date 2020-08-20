// Import Dependencies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Declare a stock array and API variables
let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

// Define and export the TypeScript interface for the stock object
export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

// Annotated with @Injectable to wire up dependency injection
@Injectable()
export class StocksService { // Defines class and exports it

  // Constructor method to inject HttpClient service into class http property
  constructor(private http: HttpClient) { }

  // Method to get the Stocks
  // Note that the method returns a copy of the stocks
  get() {
    return stocks.slice();
  }

  // Method to add a new Stock to the List
  add(stock: string) {
    stocks.push(stock);
    return this.get();
  }

  // Method to remove a Stock from the List
  remove(stock: string) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  // Method to load HttpClient service to load sock values from the API
  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}
