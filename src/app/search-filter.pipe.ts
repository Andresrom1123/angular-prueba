import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: string[], filterText: string, sort: string): string[] {
    if (!list) {
      return [];
    }
    
    let tempList = list;
    filterText = filterText.toLowerCase();


    if (sort === 'name-a') {
      tempList = tempList.sort((a,b) => {
        return a.localeCompare(b)
      })
    }
    if (sort === 'name-z') {
      tempList = tempList.sort((a,b) => {
        return b.localeCompare(a)
      })
    }

    return tempList.filter((val) => {
      return val.toLowerCase().includes(filterText);
    })

  }

}
