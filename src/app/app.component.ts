import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card'; // เพิ่มการนำเข้าที่นี่




@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule // เพิ่มการนำเข้าที่นี่
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
}
// @NgModule({
//   declarations: [
//     AppComponent,
//     ShopComponent,
//     AddProductComponent, // ประกาศคอมโพเนนต์นี้
//     // คอมโพเนนต์อื่นๆ ของคุณ
//   ],
// })
