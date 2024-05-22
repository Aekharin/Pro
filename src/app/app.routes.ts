import { Routes } from '@angular/router';
import { HomeComponent } from './pages/admin/home/home.component';
import { AddProductComponent } from './pages/admin/home/add-product/add-product.component';



export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.routes').then((m) => m.WELCOME_ROUTES),
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'add-product',
    component:AddProductComponent,
  },
  
  
  
];
