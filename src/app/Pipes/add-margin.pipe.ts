import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addMargin'
})
export class AddMarginPipe implements PipeTransform {
  transform(lines: string[][]): string[][] {
    for (let i = 4; i < lines.length; i += 5) {
      lines[i].push(''); // Add an empty string to act as a spacer
    }
    return lines;
  }

}
