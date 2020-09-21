import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entity } from '../../data/data-entity-parent';
import { DataService } from 'src/app/data/data.service';
import { Entities, AnyEntity } from 'src/app/data/data-entities';

@Component({
  selector: 'app-input-select-list',
  templateUrl: './input-select-list.component.html',
  styleUrls: ['./input-select-list.component.css'],
})
export class InputSelectListComponent implements OnInit {
  @Input() value: number;
  @Input() values: Entities<AnyEntity>;
  @Input() showHeading = true;
  @Output() onSelect = new EventEmitter();
  selectedEntityKey: number;
  isHiddenMap: Map<number, boolean> = new Map();
  lastVisibleKey: number;
  firstVisibleKey: number;

  eid = 'input-select-list';
  constructor(private data: DataService) {
    this.eid = this.data.getID('', this.eid);
  }

  ngOnInit(): void {
    this.firstVisibleKey = this.values.firstKey;
    this.lastVisibleKey = this.values.lastKey;
    if (this.autoFocus) this.setFocus_FirstElement();
  }

  doSelect(key: number) {
    this.value = key;
    this.onSelect.emit(key);
  }

  filterText_ = '';
  set filterText(v: string) {
    if (v != this.filterText_) {
      this.filterText_ = v;
      this.setCounts();
    }
  }
  get filterText() {
    return this.filterText_;
  }

  countFiltered = 0;
  setCounts() {
    this.calcIsHidden();
    this.countFiltered = this.getCountFiltered();
  }

  getCountFiltered() {
    if (this.filterText_) {
      if (this.values) {
        return [...this.isHiddenMap.values()].filter((e) => !e).length;
      }
    } else {
      return this.values.size;
    }
  }

  calcIsHidden() {
    if (this.values) {
      this.isHiddenMap = new Map();
      this.firstVisibleKey = -1;
      this.values.forEach((value, key, map) => {
        let hide = this.hideItem(value.name);
        this.isHiddenMap.set(key, hide);
        if (!hide) this.lastVisibleKey = key;
        if (!hide && this.firstVisibleKey == -1) this.firstVisibleKey = key;
      });
    }
  }

  hideItem(value: string) {
    if (this.filterText.length == 0) return false;
    return value.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1;
  }

  _autoFocus = false;
  @Input() set autoFocus(v: boolean) {
    this._autoFocus = v;
    if (v) {
      this.setFocus_FirstElement();
    }
  }

  a_doKeyDown(key: number, event: any) {
    let c = event.key;
    if (c == 'Tab') {
      if (key == this.lastVisibleKey) {
        this.setFocus_FirstElement();
        event.preventDefault();
      }
    } else if (c == 'Escape') {
      this.filterText = '';
    }
  }

  setFocus_FirstElement() {
    if (!this.showFilter) {
      if (this.firstVisibleKey) this.setFocus_Item(this.firstVisibleKey);
    } else {
      this.setFocus_Filter();
    }
  }

  setFocus_Item(key: number) {
    setTimeout(() => {
      document.getElementById(this.eid + '-a-' + key).focus();
    }, 0);
  }

  get showFilter() {
    return this.values.size >= 10;
  }

  autoFocus_filter = false;
  setFocus_Filter() {
    this.autoFocus_filter = false;
    if (this.autoFocus && this.showFilter) {
      setTimeout(() => {
        this.autoFocus_filter = false;
      }, 0);
      setTimeout(() => {
        this.autoFocus_filter = true;
      }, 1);
    }
  }

  get autoFocus() {
    return this._autoFocus;
  }
}
