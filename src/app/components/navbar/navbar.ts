import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  
  // @Input() selectedTab = 'overview';
  constructor(private router : Router) {}

  changeTab(tab :  String){
    this.router.navigate([], {
      queryParams : {tab},
      queryParamsHandling : 'merge'
    })
  }

}
