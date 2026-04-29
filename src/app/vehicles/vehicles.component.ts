import { Component } from '@angular/core';
import { VehiclesServiceService } from '../vehicles.service.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any = [];
  constructor(private VehiclesService:VehiclesServiceService){

    VehiclesService.getvehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  deletevehicle(id:string){
    this.VehiclesService.deletevehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully!!!!");
        location.reload();
      },
      (err:any)=>{
        alert("Delete Failed!");
      }
    )
  }

}
