import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipesSale : any;
  recipesFree : any;
   p: number = 1;

  page:number = 1;
  itemPerPage: number = 8;
  totalRecipe : any;


  imagePath : any = 'http://127.0.0.1:8000';
  constructor(private dataservices:DataService, private router:Router){}
  ngOnInit(){
    this.getRecipeSale();
    this.getRecipeFree();

  }

  getRecipeSale(){
    this.dataservices.getRecipeSale().subscribe(res => {this.recipesSale = res
      this.totalRecipe = this.recipesSale.lenght

    })

  }

  getRecipeFree(){
    this.dataservices.getRecipeFree().subscribe(sa => {this.recipesFree = sa;})
  }

  mouseclickFree(){
    Swal.fire({
      title: 'Please log in first!',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Log in !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('login')
      }
    })

  }

  mouseclickSale(){
    Swal.fire({
      title: 'Look\'s tasty right?',
      text: "Please Log in to Purchased!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Log in !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('login')
      }
    })
  }

  addbookmark(){
    Swal.fire({
      title: 'Be this recipe your favorite',
      text: "Please Log in to add Bookmark",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Log in !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('login')
      }
    })
  }

}
