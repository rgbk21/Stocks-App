import { Component } from '@angular/core'; // Import the component annotation
import { StocksService, StockInterface } from './services/stocks.service';

// Define the component and its properties
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Create the component controller with a single property
export class AppComponent {
  // Declares a property of an array of stocks
  stocks: Array<StockInterface>;
  title = 'stocks';

  // When the data loads it will store it on the stocks property
  constructor(service: StocksService) {
    service.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
