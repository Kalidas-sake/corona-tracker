import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() appTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
