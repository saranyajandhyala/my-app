import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['Login']);
  }
  register() {
    this.router.navigate(['Register']);
  }
}
