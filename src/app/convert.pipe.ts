import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: unknown, targetUnits: string): unknown {

    // @ts-ignore
    if (!value){
      return '';
    }
    // @ts-ignore
    switch(targetUnits){
      case 'km':
        // @ts-ignore
        return value * 1.60934;
      case 'm':
        // @ts-ignore
        return value * 1.60934 * 1000;
      case 'cm':
        // @ts-ignore
        return value * 1.60934 * 1000 * 1000;
      default:
        return new Error('Target unit not supported');
    }
  }

}
