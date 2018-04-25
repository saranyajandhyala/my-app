import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {

  records;
  constructor() { }

  add(item) {
    this.records = this.getItems();
    if (this.records == null) {
      // this.status = "Database Empty!! SignUp Please!!";
      let records_list = [];
      records_list.push(item);
      localStorage.setItem("items", JSON.stringify(records_list));
    }
    else {
      this.records.push(item);
      localStorage.setItem("items", JSON.stringify(this.records));
    }
    return this.getItems();
  }

  getItems() {
    return JSON.parse(localStorage.getItem('items'));
  }

  delete(record) {
    this.records = this.getItems();
    for (let i = 0; i < this.records.length; i++) {
      if (this.records[i].itemName == record.itemName)
        this.records.splice(i, 1);
    }
    localStorage["items"] = JSON.stringify(this.records);
    return this.getItems();
  }

  update(itemName, updtPrice) {
    this.records = this.getItems();
    this.records.forEach(element => {
      if (element.itemName == itemName) {
        element.itemPrice = updtPrice;
        localStorage.setItem("items", JSON.stringify(this.records));
      }
    });
    return this.getItems();
  }

  
}
