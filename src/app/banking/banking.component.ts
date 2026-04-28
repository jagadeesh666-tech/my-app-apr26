import { Component } from '@angular/core';
import { BankAccountsService } from '../bank-accounts.service';
@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent {

  Banking:any = [];

  constructor(private BankAccountsService:BankAccountsService){

    BankAccountsService.getBanking().subscribe(
      (data:any)=>{
        this.Banking = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

}
