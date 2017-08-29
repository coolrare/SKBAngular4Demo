import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, len: number = 2): any {
    if (value.length > len) {
      value = value.substring(0, len) + '***';
    }
    return value;
  }

}
