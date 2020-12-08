import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../core/models/item-interfaces';
import { TestDataService } from '../core/test-data.service';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent implements OnInit {

  newItem: ItemModel = {
    description:'',
    dueDate:'',
    done:false
  };
  constructor(private testDataService:TestDataService) { }

  ngOnInit(): void {
  }

  saveItem(input:string) {
    input == 'save' ? this.testDataService.addNewItem(this.newItem): null;
    this.newItem =  {
      description:'',
      dueDate:'',
      done:false
    };
  }
  

}
