import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  recipe :any;

  constructor( private httpclient: HttpClient,
    private router: Router) {}

    getLogout(){
      return this.httpclient.get('http://127.0.0.1:8000/api/logout');
    }

    getRecipeSale(){
      return this.httpclient.get('http://127.0.0.1:8000/api/sale');
    }

    getRecipeFree(){
      return this.httpclient.get('http://127.0.0.1:8000/api/free');
    }

    // getSearchTag(name : string){
    //   return this.httpclient.get('http://127.0.0.1:8000/api/search/' + name);
    // }

    getBreakfastData(name : string){
      const user: any = localStorage.getItem('users');
      const userObj = JSON.parse(user);

      const token = userObj.token;
      // console.log(token)
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.httpclient.get('http://127.0.0.1:8000/api/search/category/' + name, {headers:headers})
    }

    getLunchData(name : string){
      const user: any = localStorage.getItem('users');
      const userObj = JSON.parse(user);

      const token = userObj.token;
      // console.log(token)
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.httpclient.get('http://127.0.0.1:8000/api/search/category/' + name, {headers:headers})
    }

    getDinnerData(){
      const user: any = localStorage.getItem('users');
      const userObj = JSON.parse(user);

      const token = userObj.token;
      // console.log(token)
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      return this.httpclient.get('http://127.0.0.1:8000/api/search/category/' + name, {headers:headers})
    }


}

