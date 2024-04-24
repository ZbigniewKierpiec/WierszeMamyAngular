import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poems'
})
export class PoemsPipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    if (value.length <= maxLength) {
      return value;
    }

    const lastSpaceIndex = value.lastIndexOf(" ", maxLength);
    const truncated = lastSpaceIndex !== -1
      ? value.slice(0, lastSpaceIndex)
      : value.slice(0, maxLength);

    return `${truncated}...`;
  }

}
