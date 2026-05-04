import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StudentsidcardService } from '../studentsidcard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-idcards',
  templateUrl: './students-idcards.component.html',
  styleUrls: ['./students-idcards.component.css']
})
export class StudentsIdcardsComponent {

  studentid:any=[];
  constructor(private StudentsidcardServices:StudentsidcardService){
    StudentsidcardServices.getidcards().subscribe(
      (data: any) => {
        this.studentid = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }
  deletestudentidcard(id:string){
     this.StudentsidcardServices.deleteIdCard(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully...!");
        location.reload();
      },
      (err:any)=>{
        alert("delete Failure...!");
      }
     )
  }
  term:string="";
  filterIdcards(){
    this.StudentsidcardServices.filtercards(this.term).subscribe(
      (data:any)=>{
        this.studentid=data;
      },
      (err:any)=>{
        alert("Internal Server Error...!");
      }

    )
  }
  col:string="";
  order:string="";
sortidcards(){
  this.StudentsidcardServices.sortCards(this.col,this.order).subscribe(
    (data:any)=>{
      this.studentid=data;
    },
    (err:any)=>{
      alert("Internal server error...!");
    }
  )
}
pagedcards(page:number){
  this.StudentsidcardServices.getpagedcards(page).subscribe(
  (data:any)=>{
    this.studentid=data;
  },
  (err:any)=>{
    alert("internal server error...");
  }
  )
}
pagedcardsparams(page:number=1){
  this.StudentsidcardServices.getpagedparams(this.col,this.order,this.term,page).subscribe(
  (data:any)=>{
    this.studentid=data;
  },
  (err:any)=>{
    alert("internal server error...");
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
