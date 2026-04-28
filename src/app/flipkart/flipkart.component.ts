import { Component } from '@angular/core';
import { FlipkartService} from '../flipkart.service'


@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css'],
})
export class FlipkartComponent {

  products:any = [];

  constructor(private flipkartservice:FlipkartService ){
    flipkartservice.getdata().subscribe(
      (data:any)=>{
        this.products=data;
        console.log(data)
      },(err:any)=>{
        alert("Internal server error");
      }
    )

  }

}
