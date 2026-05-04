import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsidcardService } from '../studentsidcard.service';
import { ActivatedRoute } from '@angular/router';

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
id:string="";
  constructor(private a:StudentsidcardService,private active:ActivatedRoute){
    active.params.subscribe(
      (data:any)=>{
        this.id= data.id;
        a.idcard(data.id).subscribe(
          (data:any)=>{
            this.userform.patchValue(data);
          }
        )
      }
    )
  }

  submit(){
    // console.log(this.userform);
    if(this.id){
      this.a.editidcard(this.id,this.userform.value).subscribe(
      (data:any)=>{
        alert("Id edited Succesfullu!!!");
        this.userform.reset();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
    
  }
    
    else{
      this.a.createidcard(this.userform.value).subscribe(
      (data:any)=>{
        alert("Id created Succesfully!!!");
        this.userform.reset();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )

    }
    
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

