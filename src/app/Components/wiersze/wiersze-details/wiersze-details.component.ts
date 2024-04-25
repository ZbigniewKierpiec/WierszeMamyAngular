import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Poems } from 'src/app/Models/poems.model';


@Component({
  selector: 'app-wiersze-details',
  templateUrl: './wiersze-details.component.html',
  styleUrls: ['./wiersze-details.component.scss'],
})
export class WierszeDetailsComponent implements OnInit {
  @Output() eventToParent: EventEmitter<any> = new EventEmitter<any>();
  @Input() tornActive:boolean=false;
  @Input() title: string = '';
  @Input() name: string = '';

  constructor(private route: ActivatedRoute , private router:Router) {
    this.title = '';
    this.name = '';


  }


back(){
   this.eventToParent.emit();

}




splitTextWithBr(text: string): string[] {
  const maxLength = 200;
  const lines = [];
  let start = 0;

  while (start < text.length) {
    let end = start + maxLength;
    // Ensure we don't exceed the text length
    if (end > text.length) {
      end = text.length;
    }
    // Find the last space within the maxLength
    while (text[end] !== ' ' && end > start && end < text.length) {
      end--;
    }
    // If no space found, break at maxLength
    if (end === start) {
      lines.push(text.substr(start, maxLength));
      start += maxLength;
    } else {
      lines.push(text.substring(start, end));
      start = end + 1; // Skip the space
    }
  }

  // Insert <br> after every 60 characters
  for (let i = maxLength; i < lines.length; i += maxLength + 1) {
    lines.splice(i, 0, "<br>");
  }

  return lines;
}










  ngOnInit(): void {

  }
}
