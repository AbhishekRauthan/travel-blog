import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showNav: boolean = false;

  open() {
    
  }

  classes() {
    return `navbar-menu ${this.showNav ? 'is-active' : ''}`
  }
}
