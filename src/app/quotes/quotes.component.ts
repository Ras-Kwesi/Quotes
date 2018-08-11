import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote (1,"What doesn't kill us makes us stronger!","Freidrich Neitzsche","Dev"),
  ]
  
  
  
  constructor() { }

  ngOnInit() {}

}
