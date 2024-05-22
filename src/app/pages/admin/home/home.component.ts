import { Component, OnInit,inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgZorroModule } from '../../../../shared/ng-zorro.module';

import { ProductsService } from '../../../service/products.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NgZorroModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
SingOut: any;

readonly _productService = inject(ProductsService);

  constructor(private router: Router) {}

  ngOnInit(): void {
    
    // localStorage.clear();
  }
  Onback(){
    this.router.navigate(['/welcome']);
  }
  Onadd(){
    this.router.navigate(['/add-product']);
  }
}
