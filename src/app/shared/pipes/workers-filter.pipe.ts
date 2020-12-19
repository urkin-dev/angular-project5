import { Pipe, PipeTransform } from '@angular/core';
import { worker } from 'cluster';

@Pipe({
  name: 'workersFilter'
})
export class WorkersFilterPipe implements PipeTransform {

  transform(workers: any[], searchStr: string): any[] {
    if (searchStr === '') {
      return workers;
    } else {
      const searchStrArr = searchStr.split(' ');
      const [ name, surname ] = [ searchStrArr[0], searchStrArr[1] ];

      if (surname === undefined) { // If surname is not entered -> return workers by name
        return workers.filter(w => w.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
      } else if (searchStrArr.length === 2) {
        const re = new RegExp(`${name.toLowerCase()} ${surname.toLowerCase()}`, 'g');
        return workers.filter(w => {
          const fullname = w.name.toLowerCase() + ' ' + w.surname.toLowerCase();
          return fullname.search(re) !== -1;
        });
      } else {
        return workers;
      }
    }
  }

}
