import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  records;
  status;
  status1;
  hideElement: boolean = true;
  ownerName;
  updtPhnNo;
  updtLoc;
  constructor(public ownerservice: OwnerService) { }

  ngOnInit() {
    this.load();
  }
  load() {
    this.records = this.ownerservice.getRecords();
    if (this.records.length == 0) {
      this.status1 = "No owners available";
    }
    if (this.records == null) {
      this.status1 = 'Null';
    }
  }
  add(waiter) {
    this.records = this.ownerservice.add(waiter);
  }

  delete(waiter) {
    this.records = this.ownerservice.delete(waiter);
  }
  search(owner){
    this.hideElement = false;
    this.records.forEach(element => {
      if (element.ownerName == owner) {
        this.ownerName = owner;
        this.updtPhnNo = element.phnNo;
        this.updtLoc = element.resLocation;
      }
    });
  }

  save(){
    this.records = this.ownerservice.save(this.ownerName, this.updtPhnNo, this.updtLoc);
    this.hideElement = true;    
  }
  goback(){
    // this.location.back();
  }
}
