import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesServiceService } from '../vehicles.service.service';

@Component({
  selector: 'app-vehicle.details',
  templateUrl: './vehicle.details.component.html',
  styleUrls: ['./vehicle.details.component.css']
})
export class VehicleDetailsComponent {

  vehicle:any={};
  constructor(private activatedRoute:ActivatedRoute,private vehicleservice:VehiclesServiceService){
    activatedRoute.params.subscribe(
      (data:any)=>{
        this.vehicleservice.getvehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }
        )
      }
    )
  }
}
