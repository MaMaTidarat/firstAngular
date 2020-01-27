import { SharedService } from './../../services/shared.service';
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
  constructor(private app:AppComponent , public share:SharedService) { }

  ngOnInit() {
    setInterval( () => {
      this.change.emit(Date.now());
    },1000)
  }
  onclickLogin() {
    this.share.login();
  }
  onCallParent(){
    this.app.title ="Hi form com1";
  }


  

}
