import { Component, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})
export class ProductsComponent {
   products:any = [
  { productName: "Wireless Mouse", price: 25.99, FreeDelivery: true, rating: 4.5 },
  { productName: "Bluetooth Speaker", price: 49.99, FreeDelivery: false, rating: 4.3 },
  { productName: "Laptop Backpack", price: 39.50,FreeDelivery: true, rating: 4.6 },
  { productName: "Smart Watch", price: 129.99,FreeDelivery: false, rating: 4.4 },
  { productName: "USB-C Charger", price: 19.99,FreeDelivery: true, rating: 4.7 },
  { productName: "Noise Cancelling Headphones", price: 89.99,FreeDelivery: false, rating: 4.5 },
  { productName: "Gaming Keyboard", price: 59.99,FreeDelivery: true, rating: 4.2 },
  { productName: "Fitness Band", price: 34.99,FreeDelivery: false, rating: 4.1 },
  { productName: "Portable SSD 1TB", price: 99.99,FreeDelivery: true, rating: 4.8 },
  { productName: "LED Desk Lamp", price: 27.49,FreeDelivery: false, rating: 4.4 }
];

product:any=this.products;

  productName:string = "";
  price:number =0;
  rating:number = 0;
  FreeDelivery:boolean=true; 

term:string="";

 create(){
    let user = {
      productName: this.productName,
      price: this.price,
      isActive: true,
      rating: this.rating,
      FreeDelivery:true
    }

    this.products.unshift(user);
  }

delete(i:number){
  this.product.splice(i,1);
}
priceLH(){
  this.product.sort((a:any,b:any)=>a.price - b.price);
}

priceHL(){
  this.product.sort((a:any,b:any)=>b.price - a.price);
}
totalprices(){
  let total = this.product.reduce((agg:number, product:any)=>agg+product.price,0);
  alert("Total Price:"+total);
}
discount(){
   this.products =this.products.map((product:any)=>{product.price=  product.price/2;
    return product;
   });
}

search(){
  this.products = this.products.filter((product:any)=>product.productName.includes(this.term));
}
totalitems(){
  alert("Total items:"+this.products.length);
}

}
