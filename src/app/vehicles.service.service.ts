import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesServiceService {

  constructor(private httpClient:HttpClient) { }
  getvehicles():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
  }

  deletevehicle(id:string):Observable<any>{
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }
}
