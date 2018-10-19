import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the BookingFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'bookingFilter',
  pure:false
})
export class BookingFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: Array<any>, conditions: {[field: string]: any}): Array<any> {
    if (!items || !conditions) {
      return items;
    }
    return items.filter(item => {
        for (let field in conditions) {
            if (item[field] !== conditions[field]) {
                return false;
            }
        }
        return true;
    });
}
}
