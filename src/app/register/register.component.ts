import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  status;
  status1;
  wtrStatus = 0;
  ownrStatus = 0;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(record) {
    let retrievedData1 = JSON.parse(localStorage.getItem('waiters'));
    let retrievedData2 = JSON.parse(localStorage.getItem('owners'));
    let retrievedData3 = JSON.parse(localStorage.getItem('record'));
    if (record.roll == "Waiter") {
      if (retrievedData1 == null) {
        this.status = "Please! contact admin to register(No waiters)."
        return;
      }
      else {
        for (let i = 0; i < retrievedData1.length; i++) {
          if (record.username == retrievedData1[i].waiterName) {
            this.wtrStatus = 1;
            if (retrievedData3 == null) {
              let records_list = [];
              records_list.push(record);
              localStorage.setItem("record", JSON.stringify(records_list));
            }
            else {
              retrievedData3.push(record);
              localStorage.setItem("record", JSON.stringify(retrievedData3));
              this.status1 = "Register Successfully";
              this.status = "";
              return;
            }
          }
        }
      }
      if (this.wtrStatus == 0) {
        this.status = "Please! contact admin to register.";
        this.status1 = "";
        return;
      }
    }
    if (record.roll == "Owner") {
      if (retrievedData2 == null) {
        this.status = "Please! contact admin to register(No Owners)."
        return;
      }
      else {
        for (let i = 0; i < retrievedData2.length; i++) {
          if (record.username == retrievedData2[i].ownerName) {
            this.ownrStatus = 1;
            if (retrievedData3 == null) {
              let records_list = [];
              records_list.push(record);
              localStorage.setItem("record", JSON.stringify(records_list));
            }
            else {
              retrievedData3.push(record);
              localStorage.setItem("record", JSON.stringify(retrievedData3));
              this.status1 = "Register Successfully";
              this.status = "";
              return;
            }
          }
        }
      }
      if (this.ownrStatus == 0) {
        this.status = "Please! contact admin to register.";
        this.status1 = "";
        return;
      }
    }
  }
}
