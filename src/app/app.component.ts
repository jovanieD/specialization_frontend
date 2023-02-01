import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-auth';

OnInit(){
  this.getcheck()

}
  constructor (private router: Router, private auth: AuthenticationService, private http: HttpClient){}
  getcheck(){
   const value: any = this.auth.toggleLogin(true)
   if(value == true){
    this.router.navigateByUrl('/home')
   }
   else{
    this.router.navigateByUrl('/')
   }
  }
}
