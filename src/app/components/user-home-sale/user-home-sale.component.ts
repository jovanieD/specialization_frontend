import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import Swal from 'sweetalert2';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-home-sale',
  templateUrl: './user-home-sale.component.html',
  styleUrls: ['./user-home-sale.component.css']
})
export class UserHomeSaleComponent {
  recipesSale : any;
  recipesFree : any;
   p: number = 1;

  page:number = 1;
  itemPerPage: number = 8;
  totalRecipe : any;
  imagePath : any = 'http://127.0.0.1:8000';


  form: any = FormGroup;

  constructor(private dataservices:DataService, private router:Router){}
  ngOnInit(){
    this.getRecipeSale();

  }

  getRecipeSale(){
    this.dataservices.getRecipeSale().subscribe(sa => {this.recipesSale = sa;})
  }

  recipeview(){
    Swal.fire({
      title: this.form.value.name,
      imageUrl: '{form.value.image}',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    })
  }

  onSubmit(form:NgForm){

    const name = form.value.name
    const description = form.value.descreiption
    const ingredients = form.value.ingredients
    const procedure = form.value.procedure
  }
}
