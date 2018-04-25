import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// import { NavbarService } from "../navbar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  presentRoll;
  status;
  // status1;
  display = "none";
  constructor(private router: Router) { }

  ngOnInit() {
    // this.nav.show();
  }
  onSubmit(record) {
    if (record.username === "Mahesh" && record.password === "mahesh") {
      this.router.navigate(['Admin']);
    }
    let retrievedData = JSON.parse(localStorage.getItem('record'));
    if (retrievedData === null) {
      this.status = "Database Empty!! SignUp Please!!";
    }
    retrievedData.forEach(element => {
      let count = 0;
      if (element.username === record.username) {
        count += 1;
        if (element.password === record.password) {
          count += 1;
          this.presentRoll = element.roll;
        }
      }
      if (count == 0) {
        this.status = "Invalid User!!";
      }
      if (count == 1) {
        this.status = "Invalid Password!!";
      }
      if (count == 2) {
        this.status = "";
        if (this.presentRoll === "Owner") {
          this.router.navigate(['owner-login']);
        } if (this.presentRoll === "Waiter") {
          this.router.navigate(['waiter-login']);
        }
      }
    });
    // console.log(this.presentRoll);
  }
}
