import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  @ViewChild('listItem') listItem?: ElementRef;
  isChecked: boolean = false;
  isActiveMain: boolean = false;
  constructor(private renderer: Renderer2 , private router: Router ) {

   }


  isActive: boolean = false;
  menuItems: string[] = ['Our Work', 'About', 'Careers', 'Contact'];
  activeIndex: number = 0;

  onCheckboxChange(event: any) {
    this.isChecked = event.target.checked;
    this.isActive = this.isChecked;
    console.log(this.isChecked)

    if(this.isChecked){
      this.renderer.addClass(this.listItem?.nativeElement, 'active2');
      this.isActive=true;
    }else{
      this.renderer.removeClass(this.listItem?.nativeElement, 'active2');
      this.isActive=false;
    }



console.log(this.isActive)

  }












ngOnInit(): void {



  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      // Check if the current route matches '/main'
      this.isActiveMain = this.router.url === '/main';
    }
  });







}



}
