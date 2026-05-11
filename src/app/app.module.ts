import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { BankingComponent } from './banking/banking.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentsIdcardsComponent } from './students-idcards/students-idcards.component';
import { CreateidcardComponent } from './createidcard/createidcard.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle.details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateUserComponent } from './create-user.component/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    DirectivesComponent,
    PipesComponent,
    UsersComponent,
    ProductsComponent,
    VehiclesComponent,
    BankingComponent,
    FlipkartComponent,
    MailComponent,
    WeatherComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    StudentsIdcardsComponent,
    CreateidcardComponent,
    VehicleDetailsComponent,
    StudentDetailsComponent,
    CreateUserComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
