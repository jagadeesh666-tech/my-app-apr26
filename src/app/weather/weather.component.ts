import { Component } from '@angular/core';
import { WeatherhydService } from '../weatherhyd.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  a:any={};
  getDirection(deg: number): string {
  if (deg >= 45 && deg < 135) return 'E';
  if (deg >= 135 && deg < 225) return 'S';
  if (deg >= 225 && deg < 315) return 'W';
  return 'N';
}

  constructor(private weatherService:WeatherhydService){
    weatherService.getweather().subscribe(
      (data:any)=>{
        this.a=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )


    }
  }


