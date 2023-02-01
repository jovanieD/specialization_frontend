import  Swal  from 'sweetalert2';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  constructor(private router: Router){}

  learnMore(){
    Swal.fire({
      title: 'Your not log in yet',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  browseMore(){
    Swal.fire({
      title: 'Your not logged in yet',
      showCancelButton: true,
      confirmButtonColor: 'rgb(50, 224, 236)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Log in'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('login')
      }
    })

  }
}
