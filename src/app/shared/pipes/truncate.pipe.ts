import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 50, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf('');
    }
    if (value.length <= limit)  {
        ellipsis = '';
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }
}
