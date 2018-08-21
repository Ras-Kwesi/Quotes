import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote (1,"What doesnt kill us makes us stronger!","Freidrich Neitzsche","Dev",new Date(1896,2,29),0)
  ]
  @Input() quote:Quote;


  addNewQuote(quote){
    this.quotes.push(quote)

  }

  displayDetails(index){
    this.quotes[index].showDetails=!this.quotes[index].showDetails
  }
  
  removeQuote(deletion,index){
    if (deletion){
      let toDelete=confirm('Yes, I want to delete this quote' + '${this.quotes[index].name}')
      if (toDelete){
        this.quotes.splice(index)
      }
    }
  }

  Vote(index) {
    this.quotes[index].vote ++;
  }
  
  constructor() { }

  ngOnInit() {}

}
