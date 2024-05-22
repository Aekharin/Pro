import { Component, OnInit, inject } from '@angular/core';
import { products } from '../../../../product';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../../../service/products.service';



@Component({
  standalone: true,
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  imports: [FormsModule],
})
export class AddProductComponent implements OnInit {
  private readonly routes = inject(Router);
  private readonly _ProductService = inject(ProductsService);

  productName : string = '';
  productPrice : number = 0;
  productQuantity : number = 0;
  productDescription : string = '';
  productImges: string = '';
  id = products.length + 1

  constructor() { }

  ngOnInit() {


  }
  addproduct(){
  
  products.push({
    id: this.id,
    name:this.productName,
    price: this.productPrice,
    quantity: this.productQuantity,
    description: this.productDescription,
    url: this.productImges,
  })
  
  this._ProductService.onAdd(this.id,this.productName,this.productPrice,this.productQuantity,this.productDescription,this.productImges)
  console.log(products);
  
  this.routes.navigate(['/home'])
  }

}

