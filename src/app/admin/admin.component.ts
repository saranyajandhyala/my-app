import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout() {
    // this.authService.logout();
    // this.router.navigate(['Login']);
  }

}
