import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'after5Line'
})
export class After5LinePipe implements PipeTransform {
  transform(words: string[], linesPerChunk: number = 5): string[][] {
    const lines: string[][] = [];
    let currentLine: string[] = [];

    words.forEach((word, index) => {
      currentLine.push(word);

      if ((index + 1) % (linesPerChunk * 17) === 0) {
        lines.push(currentLine);
        currentLine = [];
      }
    });

    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    return lines;
  }
}
