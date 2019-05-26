import { Component, OnInit } from '@angular/core';
import { ItemList } from './../item-list';
import { ListService } from './../list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService],
})
export class ListComponent implements OnInit {
  listService: ListService;
  data: ItemList[] = null;
  chosenIndices: ItemList[] = [];
  newItem: string;

  constructor(listService: ListService) {
    this.listService = listService;
  }

  indexOfChoise(index: ItemList){
    if(this.chosenIndices.find(x => x === index)){
      this.chosenIndices = this.chosenIndices.filter(x => x !== index);
    }else{
      this.chosenIndices.push(index);
    }
  }
  isInList(item: ItemList){
    if(this.chosenIndices.find(x => x === item)){
      return true;
    }else{
      return false;
    }
}
  onAddToListClick(){
    this.listService.addListItem(this.newItem);
    // behöver inte anropa listService.getData() eftersom servicen ändrar i samma lista
  }

  onRemoveFromListClick(item){
    this.listService.removeItem(item);
    // behöver inte anropa listService.getData() eftersom servicen ändrar i samma lista
  }

  ngOnInit() {
    this.data = this.listService.getData();
  }
}
