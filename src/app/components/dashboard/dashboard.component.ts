// Import Dependencies
import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// Exports the DashboardComponent but also implements the OnInit interface
export class DashboardComponent implements OnInit {

  stocks: Array<StockInterface>;
  symbols: Array<string>; // Declares a  property for holding an array of stock symbols

  // Gets the stock symbols from the service when the Component is first constructed
  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  // Implements the ngOnInit method and calls the service to load stock data over Http
  ngOnInit() {
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }

}
