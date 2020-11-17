import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: string[]=[
    "Home", "About", "E404", "Users", "Vendors", "Products","Requests","Request-Line"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
