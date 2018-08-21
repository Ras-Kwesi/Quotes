import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any) {
    let today:Date = new Date();
    let timePassed:Date 
  }

  
}
