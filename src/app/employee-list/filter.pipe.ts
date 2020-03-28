import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if (!query) {
      return value;
    }

    query = query.toLowerCase();
    return value.filter(function (item) {
      return item['employee_name'].toLowerCase().includes(query);
    });

  }
}
