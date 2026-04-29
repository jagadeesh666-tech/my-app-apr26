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
  accountdata(id: string){
    this.BankAccountsService.getaccountdelete(id).subscribe(
        (data:any)=>{
          alert("Account Deleted Succesfully!!");
          location.reload();
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  term:string ="";

  filterAccounts(){
    this.BankAccountsService.filterAccountData(this.term).subscribe(
          (data:any)=>{
         this.Banking = data;
  
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  col:string="";
  order:string="";
  sortsAccount(){
    this.BankAccountsService.sortAccounts(this.col,this.order).subscribe(
       (data:any)=>{
         this.Banking = data;
  
      },
      (err:any)=>{
        alert("Internal Server Error");
      }

    )
  }
  pagesAccount(page:number){
    this.BankAccountsService.getpaging(page).subscribe(
          (data:any)=>{
         this.Banking = data;
  
      },
      (err:any)=>{
        alert("Internal Server Error");
    
      }
    )

  }


}
