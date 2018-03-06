import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navLinks = [{path:'user',label:'user profile',isActive:true},{path:'notes',label:'notes'},{path:'login',label:'login'}];
}
