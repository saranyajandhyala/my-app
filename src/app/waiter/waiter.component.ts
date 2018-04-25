import { Component, OnInit } from '@angular/core';
import { WaiterService } from '../shared/waiter.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  records;
  status;
  status1;
  hideElement: boolean = true;
  wtrName;
  updtPhnNo;
  updtLoc;
  constructor(public waiterService: WaiterService) { }

  ngOnInit() {
    this.load();
  }
  load(){
    this.records = this.waiterService.getRecords();
    if (this.records.length == 0) {
      this.status1 = "No waiters available";
    }
    if (this.records == null) {
      this.status1 = 'Null';
    }
  }
  add(waiter){
    this.records = this.waiterService.add(waiter);
  }

  delete(waiter){
    this.records = this.waiterService.delete(waiter);
  }
  search(wtrName){
    this.hideElement = false;
    this.records.forEach(element => {
      if (element.waiterName == wtrName) {
        this.wtrName = wtrName;
        this.updtPhnNo = element.phnNo;
        this.updtLoc = element.resLocation;
      }
      // this.router.navigate(['Owner/Waiters']);
    });
  }
  save() {
    this.records = this.waiterService.save(this.wtrName, this.updtPhnNo, this.updtLoc);
    this.hideElement = true;
  }
}
