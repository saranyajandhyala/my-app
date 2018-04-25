import { Component, OnInit } from '@angular/core';
import { WaiterService } from '../shared/waiter.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-waiter-login',
  templateUrl: './waiter-login.component.html',
  styleUrls: ['./waiter-login.component.css']
})
export class WaiterLoginComponent implements OnInit {

  hideElement: boolean = true;
  records;
  item;price;
  record_list = [];
  final = [];
  qty;
  bill_list = [];
  title = "Mahesh";
  constructor(private router: Router, 
    public waiterService: WaiterService) {
  }

  ngOnInit() {
    this.records = JSON.parse(localStorage.getItem("items"));
    // this.status = "none";
    
  }

  show(item, price, qty){
    this.hideElement = false;
    let record= { item : item, price : price, qty : this.qty };
    this.record_list.push(record);
  }
  
  bill(){
    this.router.navigate(['bill']);
  }

  billRecords(item, price, qty1){
    this.waiterService.billRecords(item, price, qty1);
  }
}
