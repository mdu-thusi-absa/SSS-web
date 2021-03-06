import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnumEntityType } from 'src/app/data/data-entity-types';
import { DataService } from 'src/app/data/data.service';
import { Entities, AnyEntity } from 'src/app/data/data-entities';
import {
  getHtmlElementById,
  getHtmlElementById_Height,
} from 'src/app/data/utils-scripts';

@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html',
  styleUrls: ['./input-table.component.css'],
})
export class InputTableComponent implements OnInit {
  @Input() headings: string[] = []; //lists headings in th
  @Input() fields: string[] = []; //lists attribute names from the objects to show
  @Input() entities: Entities<AnyEntity>;
  @Input() selectedEntityKey: number;
  @Input() withCheckbox = false;
  @Input() noPadding = false;
  @Input() checked = false;
  private _filterText = '';

  isHiddenMap = new Map();
  isChecked = new Map();
  hideEditRow = new Map();
  countFiltered = 0;
  countSelected = 0;
  @Input() inputType = '';
  @Output() onDrill = new EventEmitter();

  eid = 'input-table';
  constructor(public data: DataService) {
    this.eid = this.data.getID('', this.eid);
  }

  ngOnInit(): void {
    this.entities.forEach((value, key, map) => {
      this.hideEditRow.set(key, true);
      this.isChecked.set(key, this.checked);
    });
    this.countFiltered = this.entities.size;
  }

  getType(v: any) {
    let t = typeof v;
    let r: string | EnumEntityType;
    if (t == 'object') r = t['type'];
    else r = t;
    return typeof v;
  }

  set filterText(v: string) {
    if (v != this._filterText) {
      this._filterText = v;
      this.setCounts();
    }
  }
  get filterText() {
    return this._filterText;
  }

  checkForAll(checkValue: boolean) {
    this.isChecked.forEach((value: boolean, key: number) => {
      this.isChecked.set(key, checkValue);
    });
    this.countSelected = this.getCountSelected();
  }

  checkItem(key: number, checkValue: boolean) {
    this.countSelected = this.countSelected + (checkValue ? 1 : -1);
    this.isChecked.set(key, checkValue);
  }

  checkField(key: number, checkValue: boolean, fieldName: string) {
    this.entities.get(key).set(fieldName, checkValue);
  }

  _showComponentUnderneath(key: number) {
    let e = this.entities.get(key);
    //let t = this.getType(e);
    if (e.entityTypeKey == EnumEntityType.FileDownload) return false;
    if (e.entityTypeKey == EnumEntityType.FileUpload) return false;
    return true;
  }

  _showHideRowDetails(key: number) {
    let visible = true;
    if (this.hideEditRow.has(key)) visible = this.hideEditRow.get(key);
    visible = !visible;
    this.hideEditRow.set(key, visible);
    this.onDrill.emit(key);
  }

  doEntityChoose(key: number) {
    //do something when a row has been selected
    if (this._showComponentUnderneath(key)) {
      this._showHideRowDetails(key);
    } else {
      console.log(this.inputType);

      if (this.inputType == 'upload-file') {
        document.getElementById(this.eid + '-file').click()
        //getHtmlElementById(this.eid + '-file').click()
      } else this.entities.get(key).click();
    }
  }

  getDoLoad(e: AnyEntity) {
    return true;
  }

  hideItem(entity: AnyEntity) {
    if (this.filterText.length == 0) return false;
    return (
      entity.name.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1 &&
      entity.description
        .toLowerCase()
        .indexOf(this.filterText.toLowerCase()) === -1
    );
  }

  calcIsHidden() {
    if (this.entities) {
      this.isHiddenMap = new Map();

      this.entities.forEach((value: AnyEntity, key: number) => {
        this.isHiddenMap.set(key, this.hideItem(value));
      });
    }
  }

  setCounts() {
    this.calcIsHidden();
    this.countFiltered = this.getCountFiltered();
    this.countSelected = this.getCountSelected();
  }

  getCountFiltered() {
    if (this.entities) {
      return [...this.isHiddenMap.values()].filter((e) => !e).length;
    } else {
      return 0;
    }
  }

  getCountSelected() {
    if (this.entities) {
      return [...this.isChecked.values()].filter((e) => e).length;
    } else {
      return 0;
    }
  }
}
