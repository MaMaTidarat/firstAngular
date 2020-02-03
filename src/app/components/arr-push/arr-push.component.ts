import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arr-push',
  templateUrl: './arr-push.component.html',
  styleUrls: ['./arr-push.component.scss']
})
export class ArrPushComponent implements OnInit {
  private arr =[];
  private counter = 10;

  constructor() { 
  }

  ngOnInit() {
    
  }

  arrPush() {
    // for (var i=0 ; i<10 ;i = i+2) {
    //   this.arr.push(i);
    //   console.log(this.arr);
    // }
    while ( this.counter <= 10 ){
      this.arr.push(this.counter);
      this.counter++;
      console.log(this.arr);
    }
  }

}
