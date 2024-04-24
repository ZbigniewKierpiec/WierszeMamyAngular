import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {
  constructor() {}
  isActive: boolean = false;

  toggleMenu(): void {
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {}
}
