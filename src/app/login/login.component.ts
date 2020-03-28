import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthServiceService]
})
export class LoginComponent implements OnInit {

  constructor(private service : AuthServiceService , private routes: Router) { }
  msg: any;
  submittedSuccesffuly: boolean=false;
  wrongCredentials: boolean = false;

    ngOnInit() {
    }
    check(uname: string, p : string)
    {
      console.log("UserName: ", uname);
      console.log("Password: ", p);
      var output = this.service.checkusernameandpassword(uname, p);
      if(output == true)
      {
        this.submittedSuccesffuly = true;
        this.msg = "Login Successful, Redirecting to Employee Dashboard";
        setTimeout(() => {
          this.submittedSuccesffuly = false;
          this.routes.navigate(["/employees"]);
        }, 3000);
      }
      else{
        this.wrongCredentials = true;
        this.msg ='Login Attempt Failed, Invalid username or password';
        setTimeout(() => {
          this.wrongCredentials = false;
        }, 3000);
      }
    }
   
  }