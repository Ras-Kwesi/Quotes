import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote (1,"What doesnt kill us makes us stronger!","Freidrich Neitzsche","Dev")
  ]
  @Input() quote:Quote;

  addNewQuote(quote){
    this.quotes.push(quote)

  }

  displayDetails(index){
    this.quotes[index].showDetails=!this.quotes[index].showDetails
  }
  
  
  constructor() { }

  ngOnInit() {}

}
