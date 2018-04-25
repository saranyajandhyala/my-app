import { Component, OnInit } from '@angular/core';
import { WaiterService } from '../shared/waiter.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bill_list;
  totalFare= 0;
  today = Date.now();
  constructor(public waiterService: WaiterService) { 
 
  }

  ngOnInit() {
    // this.today = Date.now();
    this.bill_list = JSON.parse(localStorage.getItem('bill'));
    if (this.bill_list.length == 0) {
      // this.status1 = "No waiters available";
    }
    if (this.bill_list == null) {
      // this.status1 = 'Null';
    }
    for (let i = 0; i < this.bill_list.length; i++) {
      this.totalFare += (this.bill_list[i].price * this.bill_list[i].qty);
    }
    // this.totalFare += 15;
    localStorage.removeItem('bill');
  }

}
