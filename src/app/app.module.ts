import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HomeComponent } from './components/home/home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeOverviewComponent } from './components/home-overview/home-overview.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { UserHomeFreeComponent } from './components/user-home-free/user-home-free.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserHomeSaleComponent } from './components/user-home-sale/user-home-sale.component';
import { UserDashboardProfileComponent } from './components/user-dashboard-profile/user-dashboard-profile.component';
import { UserDashboardRecipeComponent } from './components/user-dashboard-recipe/user-dashboard-recipe.component';
import { UserDashboardHomeComponent } from './components/user-dashboard-home/user-dashboard-home.component';
import { UserRecipeCategoryComponent } from './components/user-recipe-category/user-recipe-category.component';
import { UserRecipeCategoryLunchComponent } from './components/user-recipe-category-lunch/user-recipe-category-lunch.component';
import { UserRecipeCategoryDinnerComponent } from './components/user-recipe-category-dinner/user-recipe-category-dinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HomeComponent,
    UserHomeComponent,
    HomeOverviewComponent,
    CarouselComponent,
    UserNavbarComponent,
    RegisterComponent,
    UserHomeFreeComponent,
    UserDashboardComponent,
    UserHomeSaleComponent,
    UserDashboardProfileComponent,
    UserDashboardRecipeComponent,
    UserDashboardHomeComponent,
    UserRecipeCategoryComponent,
    UserRecipeCategoryLunchComponent,
    UserRecipeCategoryDinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
