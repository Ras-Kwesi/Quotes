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
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)

  }

  
  
  constructor() { }

  ngOnInit() {}

}
