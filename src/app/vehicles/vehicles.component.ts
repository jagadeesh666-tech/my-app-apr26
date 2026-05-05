import { Component } from '@angular/core';
import { VehiclesServiceService } from '../vehicles.service.service';
import { Observable } from 'rxjs';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl:'./vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles: Vehicle[] = [];
  constructor(private VehiclesService: VehiclesServiceService) {

    VehiclesService.getvehicles().subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;
      },
      (err: Error) => {
        alert("Internal server error");
      }
    )
  }
  deletevehicle(id: string) {
    this.VehiclesService.deletevehicle(id).subscribe(
      (data: Vehicle) => {
        alert("deleted succesfully!!!!");
        location.reload();
      },
      (err: Error) => {
        alert("Delete Failed!");
      }
    )
  }
  term: string = "";
  filtervehicles() {
    this.VehiclesService.getvehiclefilter(this.term).subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;
      },
      (err: Error) => {
        alert("Internal Server Error")
      }
    )
  }
  column: string = "";
  order: string = "";
  sortVehicles() {
    this.VehiclesService.getsortvehicle(this.column, this.order).subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;
      },
      (err: Error) => {
        alert("Internal Server Error")
      }
    )
  }
  pageVehicles(page:number){
    this.VehiclesService.getPagedVehicles(page).subscribe(
       (data: Vehicle[]) => {
        this.vehicles = data;
      },
      (err: Error) => {
        alert("Internal Server Error")
      }
    )
  }
  getVhiclesWithParameters(page:number=1){
    this.VehiclesService.getVhiclesWithParameters(this.term,this.column,this.order,page).subscribe(
             (data: Vehicle[]) => {
        this.vehicles = data;
      },
      (err: Error) => {
        alert("Internal Server Error")
      }
    )
  }

}
