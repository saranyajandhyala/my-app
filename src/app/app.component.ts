import { Component, OnInit } from '@angular/core';
// import { NavbarService } from "./navbar.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = "New change";
  constructor() {

  }
  ngOnInit() { 
    // this.nav.show();
  }

}
