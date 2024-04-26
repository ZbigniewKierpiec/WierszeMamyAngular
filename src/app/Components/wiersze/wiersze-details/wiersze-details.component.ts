import { animate, style, transition, trigger } from '@angular/animations';
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




// splitTextWithBr(text: string): string[] {
//   const lines = [];
//   let start = 0;
//   let lineCount = 0;

//   while (start < text.length) {
//     let end = text.indexOf(',', start);
//     if (end === -1) {
//       lines.push(text.substring(start));
//       break;
//     }
//     if (end - start > 60) { // If the part before comma exceeds 60 characters
//       let chunk = text.substring(start, start + 60);
//       lines.push(chunk);
//       start += 60;
//     } else {
//       lines.push(text.substring(start, end + 1));
//       start = end + 1;
//     }

//     lineCount++;
//     if (lineCount % 5 === 0) { // Insert line break after every 5 lines
//       lines.push("<br>");
//     }
//   }

//   return lines;
// }





// splitTextWithBr(text: string): string[] {
//   const lines = [];
//   let start = 0;
//   let lineCount = 0;

//   while (start < text.length) {
//     let end = start + 35;
//     let nextComma = text.indexOf(',', start);
//     if (nextComma !== -1 && nextComma < end) {
//       end = nextComma + 1;
//     } else {
//       // If no comma found or found after the 35 characters, look for a space to avoid breaking a word
//       let lastSpace = text.lastIndexOf(' ', end);
//       if (lastSpace !== -1 && lastSpace > start) {
//         end = lastSpace + 1;
//       }
//     }
//     lines.push(text.substring(start, end));
//     start = end;

//     lineCount++;
//     if (lineCount % 5 === 0) { // Insert line break after every 5 lines
//       lines.push("<br>");
//     }
//   }

//   return lines;
// }





 splitTextWithBr(text: string, charactersPerLine: number): string[] {
  const lines = [];
  let start = 0;

  while (start < text.length) {
      lines.push(text.substring(start, start + charactersPerLine));
      start += charactersPerLine;

      if (start < text.length) {
          lines.push("<br>");
      }
  }

  return lines;
}








  ngOnInit(): void {

  }


}
