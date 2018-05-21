import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';

import { ItemService } from "./shared/item.service";
import { WaiterService } from './shared/waiter.service';
import { OwnerService } from './shared/owner.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { OwnerComponent } from './owner/owner.component';
import { WaiterComponent } from './waiter/waiter.component';
import { HeaderComponent } from './shared/header/header.component';
import { ItemsComponent } from './items/items.component';
import { WaiterLoginComponent } from './waiter-login/waiter-login.component';
import { BillComponent } from './bill/bill.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginHeaderComponent } from './shared/login-header/login-header.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { TrailComponent } from './trail/trail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    OwnerComponent,
    WaiterComponent,
    HeaderComponent,
    ItemsComponent,
    WaiterLoginComponent,
    BillComponent,
    FooterComponent,
    LoginHeaderComponent,
    OwnerLoginComponent,
    TrailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemService, WaiterService, OwnerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
