import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  checkusernameandpassword(uname: string, pwd: string) {
    if (uname == "admin@gmail.com" && pwd == "123456") {
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('userName', uname);
      localStorage.setItem('password', pwd);
      return true;
    }
    else {
      return false;
    }
  }

}
