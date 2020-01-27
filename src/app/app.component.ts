import { SharedService } from './services/shared.service';
import { Com2Component } from './components/com2/com2.component';
import { Com1Component } from './components/com1/com1.component';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interpolation';
  version = 0;
  isProduction =  false;
  account = { username:'admin' ,password : '12345'};
  @ViewChild("com1",{static:true}) com1:Com1Component;
  @ViewChild("com2",{static:false}) com2:Com2Component;
  time1 =0;

  constructor(public share :SharedService) {

  }
 

  getResult() {
    return "Test";
  }

  onClick() {
    this.version++;
  }

  onchange1(event) {
    this.time1 =event;
  }

  resetVersion(event){
    this.version =0;

  }

  onClickViewChild() {
   // this.com1.count +=10;
    this.com1.change.emit(1000);
    this.com2.reset.emit();
  }
}
