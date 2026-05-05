import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesServiceService } from '../vehicles.service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Vehicle } from '../vehicle';

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

  constructor(private vehicleservices: VehiclesServiceService, activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe(
      (data: Params) => {
        this.id = data['id'];
        vehicleservices.getvehicle(data['id']).subscribe(
          (data: Vehicle) => {
            this.vehicleType.patchValue(data);
          }
        )
      }
    )
  }
  id: string = "";

  submit() {
    if (this.id) {
      // edit
      this.vehicleservices.editVehicle(this.id, this.vehicleType.value).subscribe(
        (data: Vehicle) => {
          alert("vehicle edited succesfully!!");
          this.vehicleType.reset();
        },
        (err: Error) => {
          alert("vehicle not edited succesfully!!");
        }
      )
    }
    else {
      this.vehicleservices.createVehicle(this.vehicleType.value).subscribe(
        (data: Vehicle) => {
          alert("vehicle created succesfully!!");
          this.vehicleType.reset();
        },
        (err: Error) => {
          alert("vehicle not created succesfully!!");
        }
      )
    }

  }
}

