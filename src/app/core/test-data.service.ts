import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemModel } from './models/item-interfaces';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  dataTransMission: Subject <any> = new Subject<any>();
  constructor() { }

  getData() {
    return this.itemdata;
  }

  itemdata: ItemModel[] = [
    { description: '1st', dueDate: 1, done: true },
    { description: '2nd', dueDate: 2, done: true },
    { description: 'Des', dueDate: 3, done: true },
    { description: 'Okay Testing', dueDate: 4, done: false },
    { description: 'Boron', dueDate: 5, done: false },
  ];


  addNewItem(newItem: ItemModel) {
    this.itemdata.unshift(newItem);
    this.dataTransMission.next({addItem:true});
  }

  deleteItem(deletionItem: ItemModel){
    for(let i=0; i<this.itemdata.length; i++) {
      if(this.itemdata[i].description == deletionItem.description) {
        this.itemdata.splice(i, 1);
      }
    }
    this.dataTransMission.next({addItem:true});
    
  }

}
