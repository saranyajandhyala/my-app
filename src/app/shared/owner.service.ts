import { Injectable } from '@angular/core';

@Injectable()
export class OwnerService {

  bill_list = [];
  records;
  constructor() { }

  add(record) {
    this.records = this.getRecords();
    if (this.records == null) {
      // this.status = "Database Empty!! SignUp Please!!";
      let records_list = [];
      records_list.push(record);
      localStorage.setItem("owners", JSON.stringify(records_list));
    }
    else {
      this.records.push(record);
      localStorage.setItem("owners", JSON.stringify(this.records));
      return this.getRecords();
    }
  }
  getRecords() {
    this.records = JSON.parse(localStorage.getItem('owners'));
    return this.records;
  }
  delete(record) {
    this.records = this.getRecords();
    for (let i = 0; i < this.records.length; i++) {
      if (this.records[i].waiterName == record.waiterName)
        this.records.splice(i, 1);
    }
    localStorage["owners"] = JSON.stringify(this.records);
    return this.getRecords();
  }
  save(ownerName, updtPhnNo, updtLoc) {
    this.records.forEach(element => {
      if (element.ownerName == ownerName) {
        element.phnNo = updtPhnNo;
        element.resLocation = updtLoc;
        localStorage.setItem("owners", JSON.stringify(this.records));
      }
      // this.router.navigate(['Owner/Waiters']);
    });
    return this.getRecords();    
  }
}
