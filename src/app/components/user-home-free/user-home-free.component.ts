import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-home-free',
  templateUrl: './user-home-free.component.html',
  styleUrls: ['./user-home-free.component.css']
})
export class UserHomeFreeComponent {
  recipesFree : any;
   p: number = 1;

  page:number = 1;
  itemPerPage: number = 8;
  totalRecipe : any;
  imagePath : any = 'http://127.0.0.1:8000';


  form: any = FormGroup;

  constructor(private dataservices:DataService, private router:Router){}
  ngOnInit(){
    this.getRecipeFree();

  }

  getRecipeFree(){
    this.dataservices.getRecipeFree().subscribe((sa) => {this.recipesFree = sa})
  }

  recipeview(){

  }

  onSubmit(form:NgForm){

    const name = form.value.name
    const description = form.value.descreiption
    const ingredients = form.value.ingredients
    const procedure = form.value.procedure
  }
}
