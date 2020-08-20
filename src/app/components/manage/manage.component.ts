import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  // Define 2 properties for storing the array of symbols and a string for the input
  symbols: Array<string>;
  stock: string;


  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  add(){
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol){
    this.symbols = this.service.remove(symbol);
  }

  ngOnInit() {
  }

}
