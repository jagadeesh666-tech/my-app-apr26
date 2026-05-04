import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountsService {

  constructor(private httpClient: HttpClient) { }

  getBanking(): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page=1");
  }
  getaccountdelete(id: string): Observable<any> {
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/" + id);
  }
  filterAccountData(term: string): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter=" + term);
  }
  sortAccounts(col:string, order:string):Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+col+"&order="+order);
  }
  getpaging(page:number): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page="+page);
}
createaccount(account:any):Observable<any>{
  return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",account);
}
getAccountParameters(term:string,col:string, order:string,page:number):Observable<any>{
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term+"&sortBy="+col+"&order="+order+"&limit=10&page="+page);
}
}
