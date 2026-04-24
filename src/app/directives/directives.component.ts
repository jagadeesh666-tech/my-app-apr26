import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  states:string[] = ["TS","Ap","KS","KL"];

  users:any =[
    {name:'ram',age:20},
    {name:'raj',age:26},
    {name:'rahul',age:36},
    {name:'mani',age:39},
  ];

  isShow:boolean = true;



}
