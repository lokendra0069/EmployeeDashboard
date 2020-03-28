import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SNDK CORP EMPLOYEE DASHBOARD';
  isUserLogin: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.setItem('isLogin', 'false');
  }

  signOut() {
    localStorage.clear();
    this.router.navigate([""]);
    // window.location.reload();
  }

}


