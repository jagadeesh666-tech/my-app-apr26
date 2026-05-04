import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsidcardService } from '../studentsidcard.service';

@Component({
  selector: 'app-createidcard',
  templateUrl: './createidcard.component.html',
  styleUrls: ['./createidcard.component.css']
})
export class CreateidcardComponent {
  userform:FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    dob: new FormControl(),
    profile_picture: new FormControl(),
    email: new FormControl(),
    school_logo: new FormControl(),
    school_name: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl(),
    // name: new FormControl(),
  })

  constructor(private a:StudentsidcardService){}

  submit(){
    console.log(this.userform);
    this.a.createidcard(this.userform.value).subscribe(
      (data:any)=>{
        alert("Id created Succesfullu!!!");
        this.userform.reset();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
    
  }
}


    // "name": "Ann Walker",
    // "phone": "1-512-568-5918",
    // "city": "Schimmelmouth",
    // "dob": "1961-04-13T09:16:56.233Z",
    // "profile_picture": "https://avatars.githubusercontent.com/u/26226358",
    // "email": "Sigmund18@gmail.com",
    // "school_logo": "https://avatars.githubusercontent.com/u/14652835",
    // "school_name": "Dicki Group",
    // "school_city": "Lednerchester",
    // "school_pin": "507160",
    // "id": "31"

