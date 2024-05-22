import { products } from './../product';
import { Injectable } from '@angular/core';


export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  url : string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProduct[] = JSON.parse(localStorage.getItem('products') ?? '[]');

  onGet(){
    this.products = JSON.parse(localStorage.getItem('products') ?? '[]');
  }
  onAdd(id:number,productsName:string,productsPrice:number,productsQuantity:number,productsDescription:string,productsImges:string){
    this.products.push({id:id,name:productsName,price:productsPrice,quantity:productsQuantity,description:productsDescription,url:productsImges});
    console.log(this.products);
    
    localStorage.setItem('products',JSON.stringify(this.products));
    console.log(localStorage.getItem('products'));
    
    this.onGet();
  }
}
