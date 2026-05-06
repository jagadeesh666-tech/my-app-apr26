import { Component } from '@angular/core';
import { AppRoutingModule } from "../app-routing.module";
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(private authService:AuthService, private router:Router){}
  login(){
    console.log(this.loginForm);
    this.authService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login Sucess");
        // go to dasboard
        this.router.navigateByUrl("/dashboard");
        // store token
        localStorage.setItem("token",data.access_token);

      },
      (err:any)=>{
        alert("invalid credentials");
      }
    )
  }



}
