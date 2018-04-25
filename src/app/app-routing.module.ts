import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from './admin/admin.component';
import { OwnerComponent } from './owner/owner.component';
import { WaiterComponent } from './waiter/waiter.component';
import { HeaderComponent } from './shared/header/header.component';
import { ItemsComponent } from './items/items.component';
import { WaiterLoginComponent } from './waiter-login/waiter-login.component';
import { BillComponent } from './bill/bill.component';
import { LoginHeaderComponent } from './shared/login-header/login-header.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Header', component: HeaderComponent},
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  {
    path: 'Admin', component: AdminComponent,
    children: [
      {
        path: 'Owner', component: OwnerComponent
      },
      {
        path: 'Items', component: ItemsComponent
      }, 
      {
        path: 'Waiters', component: WaiterComponent
      },
 ]
  },
  { path: 'waiter-login', component: WaiterLoginComponent },
  { path: 'bill', component: BillComponent },
  {
    path: 'owner-login', component: OwnerLoginComponent,
    children: [
      {
        path: 'Waiters', component: WaiterComponent
      },

      {
        path: 'Items', component: ItemsComponent
      },
    ]
  },
  { path: 'Waiters', component: WaiterComponent },
  { path: 'Items', component: ItemsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
