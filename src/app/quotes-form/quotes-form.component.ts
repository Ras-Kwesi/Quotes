import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quote (0,"","","",new Date());
    @Output() addQuote=new EventEmitter<Quote>();

    // submit function whose purpose is to emit the new quote and append it to our page
    submitQuote(){
      this.addQuote.emit(this.newQuote);
    }

  constructor() { }

  ngOnInit() {
  }

}
