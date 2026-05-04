import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsidcardService {

  constructor(private http:HttpClient) { }
  getidcards():Observable<any>{
    return this.http.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }
   idcard(id:string):Observable<any>{
    return this.http.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }
  deleteIdCard(id:string):Observable<any>{
    return this.http.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }
  filtercards(term:string):Observable<any>{
    return this.http.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  }
  sortCards(col:string,order:string):Observable<any>{
    return this.http.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+col+"&order="+order);
  }
   getpagedcards(page:number):Observable<any>{
    return this.http.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?&limit=6 &page="+page);
  }
  getpagedparams(col:string,order:string,term:string,page:number):Observable<any>{
    return this.http.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term+"&sortBy="+col+"&order"+order+"&limit=6&page="+page);
  }
  createidcard(student:any):Observable<any>{
    return this.http.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",student);
  }
  editidcard(id:string,student:any):Observable<any>{
    return this.http.put("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id,student);
  }
}
