// Import the dependencies
import { Component, OnInit , Input} from '@angular/core';

// Declares the component metadata
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

// Exports the summary component class
export class SummaryComponent implements OnInit {

  constructor() { }

  // Declares a property that is an input value
  @Input() stock: any;

  ngOnInit() {
  }

  // Method to check if stock is negative
  isNegative() {
    return (this.stock && this.stock.change < 0);
  }

  // Method to check if stock is positive
  isPositive() {
    return (this.stock && this.stock.change > 0);
  }
}
