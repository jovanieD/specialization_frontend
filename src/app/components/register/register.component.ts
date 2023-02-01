import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private auth:AuthenticationService, private router:Router) { }

  onSubmit(form:NgForm){
    const username = form.value.username;
    const firstname = form.value.lastname;
    const lastname = form.value.lastname;
    const email = form.value.email;
    const password = form.value.password;
    const profile_pic = form.value.profile_pic;
    this.auth.register(username,firstname, lastname, email,password, profile_pic).subscribe((res)=>{
       this.router.navigate(['/login']);
    },)

  }
}
