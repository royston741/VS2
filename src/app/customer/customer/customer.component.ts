import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit() {
    const user = JSON.parse(this.storageService.getItem("user"))
    if (user == null || user.userType != "CUSTOMER") {
        this.router.navigate(["login"])
    }
  }

  onNavigateToCart(){
    this.router.navigate(["customer","cart"])
  }


}
