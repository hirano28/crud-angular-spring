import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(msg: string): string {
    switch(msg) {
      case 'front-end':
        return 'code';
      case 'back-end':
        return 'computer';
      default:
        return 'home';
    }
  }

}
