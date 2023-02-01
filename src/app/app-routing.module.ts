import { UserRecipeCategoryLunchComponent } from './components/user-recipe-category-lunch/user-recipe-category-lunch.component';
import { UserRecipeCategoryDinnerComponent } from './components/user-recipe-category-dinner/user-recipe-category-dinner.component';
import { UserRecipeCategoryComponent } from './components/user-recipe-category/user-recipe-category.component';
import { UserHomeFreeComponent } from './components/user-home-free/user-home-free.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserHomeSaleComponent } from './components/user-home-sale/user-home-sale.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'dashboard', component: UserDashboardComponent},

  // this is for the view of the category
  {path: 'breakfast', component: UserRecipeCategoryComponent},
  {path: 'lunch', component: UserRecipeCategoryLunchComponent},
  {path: 'dinner', component: UserRecipeCategoryDinnerComponent},

  {path: 'home', component: UserHomeComponent},

  {path: 'free', component: UserHomeFreeComponent},

  {path: 'sale', component: UserHomeSaleComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
