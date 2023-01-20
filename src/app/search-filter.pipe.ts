import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string, sort: string): any[] {
    if (!list) {
      return [];
    }
    
    let tempList = list;
    filterText = filterText.toLowerCase();


    if (sort === 'name-a') {
      tempList = tempList.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      tempList = tempList.sort((a,b) => {
        return b.name.localeCompare(a.name)
      })
    }

    return tempList.filter((val) => {
      return val.name.toLowerCase().includes(filterText);
    })

  }

}
