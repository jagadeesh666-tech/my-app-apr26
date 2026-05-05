import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VehiclesServiceService } from '../vehicles.service.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle.details',
  templateUrl: './vehicle.details.component.html',
  styleUrls: ['./vehicle.details.component.css']
})
export class VehicleDetailsComponent {

  vehicle:Vehicle=<Vehicle>{};
  constructor(private activatedRoute:ActivatedRoute,private vehicleservice:VehiclesServiceService){
    activatedRoute.params.subscribe(
      (data:Params)=>{
        this.vehicleservice.getvehicle(data['id']).subscribe(
          (data:Vehicle)=>{
            this.vehicle=data;
          }
        )
      }
    )
  }
}
