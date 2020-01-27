import { SharedService } from './../../services/shared.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.scss']
})
export class Com2Component implements OnInit {
  @Input() count2 = 0;
  @Output("change2") reset = new EventEmitter<number>();
  constructor(public share:SharedService) { }

  ngOnInit() {
  }
  onClickReset(){
    this.reset.emit();
  }

  onLogOut(){
    this.share.logOut();
  }

}
