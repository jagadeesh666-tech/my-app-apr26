import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-tasks',
  templateUrl: './form-tasks.component.html',
  styleUrls: ['./form-tasks.component.css']
})
export class FormTasksComponent {
   productdata:FormGroup=new FormGroup({
    id: new FormControl(),
    title:new FormControl(),
    description:new FormControl(),
    category:new FormControl(),
    price:new FormControl(),
    discountPercentage:new FormControl(),
    rating:new FormControl(),
    stock:new FormControl(),
    tags:new FormArray([
    
    ]),
    brand:new FormControl(),
   })


   get tags(){
    return this.productdata.get('tags') as FormArray;
   }


}
