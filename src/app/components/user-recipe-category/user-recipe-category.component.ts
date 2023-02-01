import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-recipe-category',
  templateUrl: './user-recipe-category.component.html',
  styleUrls: ['./user-recipe-category.component.css']
})
export class UserRecipeCategoryComponent implements OnInit{
  recipesCategory : any;
 imagePath : any = 'http://127.0.0.1:8000';

 constructor(private dataservices:DataService, private router:Router){}
 ngOnInit(){
  this.recipesCategory = this.getBreakfast();
 }

 getBreakfast(){
  const data = 'breakfast'
  this.dataservices.getBreakfastData(data).subscribe((res) => {this.recipesCategory = res})

}


getLunch(){
  const data = 'lunch'
  this.dataservices.getBreakfastData(data).subscribe((res) => {this.recipesCategory = res })

}
getDinner(){
  const data = 'dinner'
  this.dataservices.getBreakfastData(data).subscribe((res) => {this.recipesCategory = res })

}

}
