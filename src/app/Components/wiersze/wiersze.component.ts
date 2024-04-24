import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Poems } from 'src/app/Models/poems.model';
import { WierszeService } from 'src/app/Services/wiersze.service';

@Component({
  selector: 'app-wiersze',
  templateUrl: './wiersze.component.html',
  styleUrls: ['./wiersze.component.scss']
})
export class WierszeComponent implements OnInit {



constructor(private poemsServ:WierszeService){}

poems?:Poems[];








  ngOnInit(): void {

this.poems = this.poemsServ.getPoems()

  }

}
