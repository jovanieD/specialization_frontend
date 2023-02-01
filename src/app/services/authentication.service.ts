import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  username: any;
  constructor(private http: HttpClient) {}

  // Toogle Loggedin
  toggleLogin(state: boolean): void {
    this.isLoggedIn.next(state);
  }

  // Status
  status() {
    const data = localStorage.getItem('users');
    // console.log(data)
    // console.log('data is here')
    if(!data){
      this.isLoggedIn.next(true)
    }
    return this.isLoggedIn.asObservable();
  }

  // Login
  login(email: string, password: string) {
    return this.http.post('http://localhost:8000/api/login', {
      email: email,
      password: password,
    });
  }

  // User Info
  user() {
    const user: any = localStorage.getItem('users');
    // console.log(user)

    const userObj = JSON.parse(user);
    const userda = JSON.parse(user);
    // const datauser = userda.user;        // this is for the userdata
    const asdf= userda.user  // this is for the username
    const getid = asdf.id
    console.log(getid)

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get('http://localhost:8000/api/users/' + getid , {headers:headers})


  }

  // Logout
  logout(allDevice: boolean){
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    console.log(token)
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post('http://localhost:8000/api/logout', {allDevice:allDevice}, {headers:headers});
  }

  // Register
  register(username: string ,firstname: string, lastname :string, email:string, password:string, profile_pic: string){
    const data={
      username: username,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password : password,
      profile_pic : profile_pic
    }
    return this.http.post('http://localhost:8000/api/register', data);
  }

  // Forgot Pass
  forgot(email:string){
    return this.http.post('http://localhost:8000/api/forgot', {email:email});
  }

  // Reset Pass
  reset(token:string, password:string,password_confirmation:string){

    const data={
      token:token,
      password:password,
      password_confirmation:password_confirmation
    }
    return this.http.post('http://localhost:8000/api/reset', data);
  }
}
