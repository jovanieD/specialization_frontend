import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-recipe-category-dinner',
  templateUrl: './user-recipe-category-dinner.component.html',
  styleUrls: ['./user-recipe-category-dinner.component.css']
})
export class UserRecipeCategoryDinnerComponent {
  recipesCategory : any;
  imagePath : any = 'http://127.0.0.1:8000';

  constructor(private dataservices:DataService, private router:Router){}

  form:any= NgForm;

  ngOnInit(){
   this.recipesCategory = this.getDinner();
  }

 getDinner(){
   const data = 'dinner'
   this.dataservices.getBreakfastData(data).subscribe((res) => {this.recipesCategory = res })

 }

 getDetails(){
  // this.recipe = this.form.value.description
  // this
 }
}
