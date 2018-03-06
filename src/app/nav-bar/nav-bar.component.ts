import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navLinks = [{path:'user',label:'user profile',isActive:true},
  {path:'notes',label:'notes'},
  {path:'login',label:'login'}];
  
  constructor() { }

  ngOnInit() {
  }

}
