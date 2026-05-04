import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesServiceService {

  constructor(private httpClient:HttpClient) { }
  getvehicles():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1")
  }

   getvehicle(id:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  deletevehicle(id:string):Observable<any>{
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

   getvehiclefilter(term:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }

   getsortvehicle(column:string,order:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
}
getPagedVehicles(page:number):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);

}
getVhiclesWithParameters( term:string,column:string,order:string,page:number ):Observable<any>{
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term+"&sortBy="+column+"&order="+order+"&limit=10&page="+page);
}
createVehicle( vehicle:any):Observable<any>{
  return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",vehicle);
}
}
