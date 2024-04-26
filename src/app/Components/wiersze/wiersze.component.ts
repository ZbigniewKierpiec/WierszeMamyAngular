import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Poems } from 'src/app/Models/poems.model';
import { WierszeService } from 'src/app/Services/wiersze.service';

@Component({
  selector: 'app-wiersze',
  templateUrl: './wiersze.component.html',
  styleUrls: ['./wiersze.component.scss'],
  
})
export class WierszeComponent implements OnInit {
  @ViewChild('poemsContainer') poemsContainer?: ElementRef;
  constructor(private poemsServ: WierszeService) {
    (this.title = ''), (this.name = '');
  }
  poems?: Poems[];
  parentActive: boolean = false;
  title: string;
  name: string;
  getDetails(details: Poems) {
    console.log(details);
    (this.title = details.title),
      (this.name = details.name),
      (this.parentActive = !this.parentActive);
  }

  handleEventFromChild() {
    // Handle the event received from the child component
   this.parentActive =! this.parentActive;
  }


  ngOnInit(): void {
    this.poems = this.poemsServ.getPoems();
  }
}
