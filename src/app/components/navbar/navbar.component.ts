import { Router } from '@angular/router';
import Swal from "sweetalert2"
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean = false;
  constructor(private auth:AuthenticationService, private dataservices: DataService, private router: Router) { }

  ngOnInit(): void {
    this.auth.status().subscribe((res) => {
      this.loggedIn = res;
      // console.log('navbar:' + this.loggedIn);
    }, (err) => {
      console.log(err);
    })
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
    this.router.navigateByUrl('/')

  }



}
