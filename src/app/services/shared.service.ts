import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isLogin = false;
  constructor() { }

  login() {
    this.isLogin = true;
  }
  logOut() {
    this.isLogin = false;
  }
  getStatus() {
    return this.isLogin;
  }
}
