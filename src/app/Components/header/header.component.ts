import { animate, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('listItem') listItem?: ElementRef;

  @ViewChild('segmentedControl', { static: true }) segmentedControl?: ElementRef;
  isChecked: boolean = false;
  isActiveMain: boolean = false;
  markerWidth: number = 0;
  isActive: boolean = false;
  menuItems: string[] = ['Our Work', 'About', 'Careers', 'Contact'];


  constructor(private renderer: Renderer2, private router: Router , private el: ElementRef) {}



  selectLi(index: number): void {
    // Set the selected tab index
    // this.selectedTab = index;

    // Get all tabs navigation links
    const tabNavLinks =
      this.el.nativeElement.querySelectorAll('.animatedListItem');
     console.log(tabNavLinks)
    // Get the selected tab element
    const selectedTabElement = tabNavLinks[index];

    // Calculate the position and width of the tab marker
    const markerPosition = selectedTabElement.offsetLeft;

    const markWidth = selectedTabElement.offsetWidth;

    // Update the marker width and position
    this.markerWidth = markWidth;

    // Set the style of the tab marker

    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.slide'),'transform', `translateX(${markerPosition}px)`);


  }





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
