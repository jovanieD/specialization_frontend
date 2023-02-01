import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  loggedIn:boolean = false;

  user: any ;
  constructor(private auth:AuthenticationService, private dataservices: DataService, private router: Router) { }

  ngOnInit(){
    this.user = this.userData()
  }
  logout(){
    localStorage.removeItem('users');
    this.auth.toggleLogin(false);
    this.dataservices.getLogout();
    this.loggedIn = false;
    this.router.navigateByUrl('/')

  }

  getUserData(){
    this.auth.user().subscribe(res => {this.user = res;})
    }

    userData(){
      const user: any = localStorage.getItem('users');
        const userObj = JSON.parse(user);
        const used = userObj.user
        return used;

      // console.log(used)

    }
}
