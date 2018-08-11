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

  addNewQuote(goal){
    let goalLength = this.quotes.length;
    goal.id=goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.quotes.push(goal)

  }

  
  
  constructor() { }

  ngOnInit() {}

}
