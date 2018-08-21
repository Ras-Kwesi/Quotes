import { Component } from '@angular/core';
import {Quote} from './quote'; // importing the quote component to parent component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  // Quote object is declared
  quotes = [
    new Quote (1,"What doesn't kill us makes us stronger!","Freidrich Neitzsche","Dev",new Date(1896,2,29),0),
    ]

  constructor(){}


  ngOnInit() {}
}
