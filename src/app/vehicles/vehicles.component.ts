import { Component } from '@angular/core';
import { VehiclesServiceService } from '../vehicles.service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles: any = [];
  constructor(private VehiclesService: VehiclesServiceService) {

    VehiclesService.getvehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }
  deletevehicle(id: string) {
    this.VehiclesService.deletevehicle(id).subscribe(
      (data: any) => {
        alert("deleted succesfully!!!!");
        location.reload();
      },
      (err: any) => {
        alert("Delete Failed!");
      }
    )
  }
  term: string = "";
  filtervehicles() {
    this.VehiclesService.getvehiclefilter(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal Server Error")
      }
    )
  }
  column: string = "";
  order: string = "";
  sortVehicles() {
    this.VehiclesService.getsortvehicle(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal Server Error")
      }
    )
  }
  pageVehicles(page: number) {
    this.VehiclesService.getPagedVehicles(page).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal Server Error")
      }
    )
  }
  getVhiclesWithParameters(page: number = 1) {
    this.VehiclesService.getVhiclesWithParameters(this.term, this.column, this.order,page).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal Server Error")
      }
    )
  }

}
