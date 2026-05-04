import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsidcardService } from '../studentsidcard.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  studentcards:any={};
constructor(private activate:ActivatedRoute,private studentcard:StudentsidcardService){
  activate.params.subscribe(
    (data:any)=>{
     studentcard.idcard(data.id).subscribe(
        (data:any)=>{
            this.studentcards=data;
        }
      )
    }
  )
}
}
