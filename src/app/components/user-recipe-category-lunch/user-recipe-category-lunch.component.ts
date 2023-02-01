import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-recipe-category-lunch',
  templateUrl: './user-recipe-category-lunch.component.html',
  styleUrls: ['./user-recipe-category-lunch.component.css']
})
export class UserRecipeCategoryLunchComponent {
  recipesCategory : any;
  imagePath : any = 'http://127.0.0.1:8000';

  constructor(private dataservices:DataService, private router:Router){}
  ngOnInit(){
   this.recipesCategory = this.getLunch();
  }

//   getBreakfast(){
//    const data = 'breakfast'
//    this.dataservices.getBreakfastData(data).subscribe((res) => {this.recipesCategory = res})

//  }


 getLunch(){
   const data = 'lunch'
   this.dataservices.getBreakfastData(data).subscribe((res) => {this.recipesCategory = res })

 }
//  getDinner(){
//    const data = 'dinner'
//    this.dataservices.getBreakfastData(data).subscribe((res) => {this.recipesCategory = res })

//  }
}
