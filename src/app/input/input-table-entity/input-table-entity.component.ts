import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entities, EveryEntity } from 'src/app/data/models';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-table-entity',
  templateUrl: './input-table-entity.component.html',
  styleUrls: ['./input-table-entity.component.css']
})
export class InputTableEntityComponent implements OnInit {
  @Input() entity: EveryEntity;
  @Input() headings: string[] = []; //lists headings in th
  @Input() fields: string[] = []; //lists attribute names from the objects to show
  filterText_ = '';

  isHiddenMap = new Map();
  countFiltered = 0;
  //countSelected = 0;
  //@Input() inputType = 'file';

  eid = 'input-table'
  constructor(public data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
    // this.entities.forEach((value, key, map) => {
    //   this.hideEditRow.set(key, true);
    //   this.isChecked.set(key,false);
    // });
    this.countFiltered = this.headings.length;
  }

  getType(v: any){
    return typeof(v);
  }

  set filterText(v: string) {
    if (v != this.filterText_) {
      this.filterText_ = v;
      this.setCounts();
    }
  }
  get filterText() {
    return this.filterText_;
  }

  // checkForAll(checkValue: boolean){
  //   this.isChecked.forEach((value: boolean, key: number) => {
  //     this.isChecked.set(key, checkValue);
  //   });
  //   this.countSelected = this.getCountSelected();
  // }

  // checkItem(key: number, checkValue: boolean){
  //   this.countSelected = this.countSelected + (checkValue ? 1:-1);
  //   this.isChecked.set(key,checkValue)
  // }

  // checkField(key: number, checkValue: boolean,fieldName: string){
  //   this.entities.get(key).set(fieldName,checkValue);
  // }

  // doEntityChoose(key: number) {
  //   //do something when a row has been selected
  //   let visible = true;
  //   if (this.hideEditRow.has(key)) visible = this.hideEditRow.get(key);
  //   visible = !visible;
  //   this.hideEditRow.set(key, visible);
  // }

  getDoLoad(e: EveryEntity) {
    return true;
  }

  hideItem(fieldName: string) {
    console.log(this.filterText)
    if (this.filterText.length == 0) return false;
    console.log(fieldName,this.entity[fieldName])
    return (
      fieldName.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1 &&
      this.entity[fieldName].toString().toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
    );
  }

  calcIsHidden() {
    if (this.entity) {
      this.isHiddenMap = new Map();

      for(let i in this.fields){
        this.isHiddenMap.set(+i, this.hideItem(this.fields[i]));
      }
      console.log(this.isHiddenMap)
      // this.entity.forEach((value: EveryEntity, key: number) => {
      //   this.isHiddenMap.set(key, this.hideItem(value));
      // });
    }
  }

  setCounts() {
    this.calcIsHidden();
    this.countFiltered = this.getCountFiltered();
    //this.countSelected = this.getCountSelected();
  }

  getCountFiltered() {
    if (this.entity) {
      return [...this.isHiddenMap.values()].filter((e) => !e).length;
    } else {
      return 0;
    }
  }

  // getCountSelected() {
  //   if (this.entities) {
  //     return [...this.isChecked.values()].filter((e) => e).length;
  //   } else {
  //     return 0;
  //   }
  // }
}
