import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemModel } from '../core/models/item-interfaces';
import { TestDataService } from '../core/test-data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  itemList  = new MatTableDataSource();
  displayedColumns: string[] = ['description', 'dueDate', 'done','delete'];
  constructor(private testDataService:TestDataService) { }

  ngOnInit(): void {
    this.itemList =  new MatTableDataSource (this.testDataService.getData());
    this.testDataService.dataTransMission.subscribe( message => {
    if(message.addItem) {
      this.itemList = null;
      setTimeout( () => this.itemList = new MatTableDataSource (this.testDataService.getData())
      , 100);
    }
    } );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.itemList.filter = filterValue.trim().toLowerCase();
  }

  deletItem(item: ItemModel) {
    this.testDataService.deleteItem(item);
  }

}
