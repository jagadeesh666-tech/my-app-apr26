import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankAccountsService } from '../bank-accounts.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  accountForm:FormGroup= new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl(),
    ifsc_code:new FormControl(),

  })
  constructor(private accountservice:BankAccountsService){}

  submit(){
    console.log(this.accountForm);
    this.accountservice.createaccount(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("Account Created Succesfully!!!");
        this.accountForm.reset();
      },
      (err:any)=>{
        alert("Create Failed...!");
      }
    )
  }
}

  
  //   "account_name": "Checking Account",
  //   "available_balance": "751.00",
  //   "account_number": "00506657",
  //   "city": "Gudruntown",
  //   "profie_picture": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/72.jpg",
  //   "ifsc_code": "057190808",
  //   "id": "65"
  // } -->
