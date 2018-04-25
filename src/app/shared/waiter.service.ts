import { Injectable } from '@angular/core';

@Injectable()
export class WaiterService {

  bill_list = [];
  records;
  constructor() { }

  add(record){
    this.records = this.getRecords();
    if (this.records == null) {
      // this.status = "Database Empty!! SignUp Please!!";
      let records_list = [];
      records_list.push(record);
      localStorage.setItem("waiters", JSON.stringify(records_list));
    }
    else {
      this.records.push(record);
      localStorage.setItem("waiters", JSON.stringify(this.records));
      return this.getRecords();
    }
  }
getRecords(){
  this.records = JSON.parse(localStorage.getItem('waiters'));
  return this.records;
}
  delete(record){
    this.records = this.getRecords();
    for (let i = 0; i < this.records.length; i++) {
      if (this.records[i].waiterName == record.waiterName)
        this.records.splice(i, 1);
    }
    localStorage["waiters"] = JSON.stringify(this.records);
    return this.getRecords();
  }

  billRecords(item, price, qty1) {
    let record = { item: item, price: price, qty: qty1 };
    // this.bill_list.push(record);

    let retrievedData = JSON.parse(localStorage.getItem('bill'));
    if (retrievedData == null) {
      // this.status = "Database Empty!! SignUp Please!!";
      let records_list = [];
      records_list.push(record);
      localStorage.setItem("bill", JSON.stringify(records_list));
    }
    else {
      retrievedData.push(record);
      localStorage.setItem("bill", JSON.stringify(retrievedData));
    }
  }

  save(wtrName, updtPhnNo, updtLoc){
    this.records.forEach(element => {
      if (element.waiterName == wtrName) {
        element.phnNo = updtPhnNo;
        element.resLocation = updtLoc;
        localStorage.setItem("waiters", JSON.stringify(this.records));
      }
      // this.router.navigate(['Owner/Waiters']);
    });
    return this.getRecords();  
  }
}
