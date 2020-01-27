import { AppComponent } from './../../app.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.scss']
})
export class Com1Component implements OnInit {
  @Input() count = 0;
  @Output() change = new EventEmitter<number>();
  constructor(private app:AppComponent) { }

  ngOnInit() {
    setInterval( () => {
      this.change.emit(Date.now());
    },1000)
  }
  onCallParent(){
    this.app.title ="Hi form com1";
  }
  

}
