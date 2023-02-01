import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import  Swal  from 'sweetalert2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {

  loggedIn:boolean = false;
  constructor(private auth:AuthenticationService, private dataservices: DataService, private router: Router) { }

  username:any;
  user: any ;
  recipecategory: any 


  imagePath : any = 'http://127.0.0.1:8000';

  ngOnInit(): void {
    this.auth.status().subscribe((res) => {
      this.loggedIn = true;
      // console.log('navbar:' + this.loggedIn);
    }),this.user = this.userData()
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

 submitLogout(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes ',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.logout(),
        swalWithBootstrapButtons.fire(
          'Successfully Log out.',
          'success',

        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {

      }
    })
  }

  logout(){
    localStorage.removeItem('users');
    this.auth.toggleLogin(false);
    this.dataservices.getLogout();
    this.loggedIn = false;
    this.router.navigateByUrl('/')

  }


  getBreakfast(){
    const data = 'breakfast'
    this.dataservices.getBreakfastData(data).subscribe((res) => {this.recipecategory = res })

  }

  getLunch(){
    const data = 'lunch'
    this.dataservices.getBreakfastData(data).subscribe((res) => {this.recipecategory = res })

  }
  getDinner(){
    const data = 'dinner'
    this.dataservices.getBreakfastData(data).subscribe((res) => {this.recipecategory = res })

  }

}
