import { Injectable } from '@angular/core';
import { ItemList } from './item-list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private data: ItemList[] = [
  {
    item: 'Plåster',
    id: 1
  },
  {
    item: 'Kikare',
    id: 2
  },
  {
    item: 'Bullens Pilsnerkorv',
    id: 3
  },
  {
    item: 'Kängor',
    id: 4
  },
  {
    item: 'Kompass',
    id: 5
  },
  ];

  constructor() { }

  getData(): ItemList[]{
    return this.data;
  }

  addListItem(str: string){
    this.data.push({item: str, id: this.data.length +1})
  }
  removeItem(item: ItemList ){
    console.log('körs removeItem? ')
    let index = this.data.indexOf(item);
    this.data.splice(index, 1);
  }

}
