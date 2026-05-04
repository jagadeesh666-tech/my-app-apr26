import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesServiceService } from '../vehicles.service.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  vehicleType: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl()
  })
  constructor(private vehicleservice: VehiclesServiceService) { }
  submit() {
    console.log(this.vehicleType);
    this.vehicleservice.createVehicle(this.vehicleType.value).subscribe(
      (data: any) => {
        alert("vehicle created succesfully!!");
        this.vehicleType.reset();
      },
      (err: any) => {
        alert("vehicle not created succesfully!!");
      }
    )
  }
}

