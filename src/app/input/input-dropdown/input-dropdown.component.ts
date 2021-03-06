import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Entities, AnyEntity } from 'src/app/data/data-entities';
import { data } from 'jquery';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.css'],
})
export class InputDropdownComponent implements OnInit {
  private _filterText = '';
  showDrop = true;
  position = { top: 0, left: 0 };

  viewAll = false;
  @Input() title = 'item';
  private _sourceValues: Entities<AnyEntity>;
  @Input() set values(v: Entities<AnyEntity>) {
    this._sourceValues = v;
    this._values = this._sourceValues.clone();
  }
  _values: Entities<AnyEntity>;
  @Input() key = -1;
  @Input() showNoSelection = false;
  @Input() onlyActive = false;
  @Input() showDelete = false;
  @Input() showEdit = false;
  @Input() showAdd = false;
  @Input() disabled = false;
  @Input() marginTop = '0';
  @Input() textColor = 'grey'
  @Input() paddingTop = '4px'

  @Output() onChange = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onAdd = new EventEmitter();

  private _sourceVersion = 0;
  //refresh values if the source version changes
  @Input() set sourceVersion(v: number) {
    if (v != this._sourceVersion) {
      this._sourceVersion = v;
      this._values = this._sourceValues.clone();
    }
  }

  @ViewChild('inputFilter') inputFilter: ElementRef;

  //dynamic ViewChild?
  //let el = $('#dropdown-group-' + this.eid);
  //@ViewChild('dropdown-item-' + this.eid + '-' + this.values) firstItem: ElementRef;
  eid = 'input-dropdown';
  constructor(private data: DataService) {
    this.eid = this.data.getID('', this.eid);
  }

  ngOnInit(): void {
    this.filterText = '';
    if (this._autoFocus){
      this.setAutoFocus()
    }
  }

  _autoFocus = false
  @Input() set autoFocus(v: boolean){
    this._autoFocus = v
    if (v){
      this.setAutoFocus()
    }
  }

  // setAutoFocus(){
  //   let id = 'dropdown-button-' + this.eid
  //     setTimeout(() => {
  //       document.getElementById(id).focus();
  //     }, 10);
  // }

  setAutoFocus() {
    let id = 'dropdown-button-' + this.eid
    setFocusForID(id, 50);

    function setFocusForID(id: string, mills: number) {
      setTimeout(() => {
        let e = document.getElementById(id);
        if (e) e.focus();
        else setFocusForID(id, mills + 100);
      }, mills);
    }
  }

  get filterText() {
    return this._filterText;
  }

  // countVisible = 0;
  set filterText(v: string) {
    if (v != this._filterText) {
      this._filterText = v;
      this._values.filter(this._filterText, false);
      try {
        this.setPosition(true);
      } catch (e) {}
    }
  }

  get value() {
    if (this._values) {
      if (this.key == undefined) {
        if (this._values.size > 0) this.key = this._values.firstKey;
        else this.key = -1;
      }
    } else {
      return null;
    }
    if (this.key == -1) return 'Please select';
    else {
      let v = this._values.get(this.key);
      if (v) return this._values.get(this.key).allName;
      else return null;
    }
  }

  a_doKeyDown(key: number, event: any) {
    let c = event.key;

    if (c == 'Tab') {
      if (this.dropUp) {
        if (key == this._values.lastKeyInFilter) {
          this.setFocus(event);
        }
      } else {
        if (key == this._values.lastKeyInFilter) {
          if (this._values.size < 6) {
            this.setFocusItem(event, this._values.firstKeyInFilter);
          } else {
            this.setFocus(event);
          }
        }
      }
    } else if (c == 'Escape') {
      this.filterText = '';
    }
  }

  doSearchKeyUp(event: any) {
    if (event.key === 'Escape') {
      this.filterText = '';
    } else if (event.key === 'Tab') {
    }
  }

  doSearchKeyDown(event: any) {
    if (event.key === 'Tab') {
      if (this.dropUp) {
        this.setFocusItem(event, this._values.firstKeyInFilter);
      }
    }
  }

  maxHeight = 273; //175.5;
  filterHeight = 273; //175.5;
  searchInputHeight = 38;
  dropUp = false;

  setPosition(isFilter: boolean) {
    const rowHeight = 27.3;
    const rowsToShow = 10;
    this.maxHeight = rowHeight * rowsToShow;
    let dialog = $('#dropdown-dialog-' + this.eid);

    //let el = $('#dropdown-button-' + this.eid);
    let el = $('#dropdown-group-' + this.eid);

    var leftPos =
      el[0].getBoundingClientRect().left + $(window)['scrollLeft']();
    var rightPos =
      el[0].getBoundingClientRect().right + $(window)['scrollLeft']();
    var topPos = el[0].getBoundingClientRect().top + $(window)['scrollTop']();
    var bottomPos =
      el[0].getBoundingClientRect().bottom + $(window)['scrollTop']();

    this.searchInputHeight = 38 * (this._values.size > rowsToShow ? 1 : 0);
    this.filterHeight =
      rowHeight * Math.min(this._values.countInFilter, rowsToShow) +
      this.searchInputHeight;
    this.maxHeight =
      rowHeight * Math.min(this._values.size, rowsToShow) +
      this.searchInputHeight;

    let lowest = $(window).height() - this.maxHeight;

    let top = topPos;
    this.dropUp = lowest < topPos;
    if (this.dropUp) {
      top = bottomPos - this.filterHeight;
      if (this._values.countInFilter == 0) top = bottomPos - 48;
    }

    dialog[0].style.left = leftPos + 'px';
    dialog[0].style.top = top + 'px';
    dialog[0].style.width = rightPos - leftPos + 'px';
  }

  ngAfterViewInit(): void {}

  selectMe(key: number) {
    this.key = key;
    this.onChange.emit(key);
  }

  get thisY() {
    return this.position.top + 27.4;
  }

  get thisX() {
    return this.position.left;
  }

  ngAfterViewChecked(): void {}

  doModal(event: any) {
    this.viewAll = true;
    this.showDrop = true;
    this.setPosition(false);
    this.setFocus(event);
  }

  setFocus(event: any) {
    if (this._values.size < 6) {
      this.setFocusItem(event, this._values.firstKeyInFilter);
    } else {
      setTimeout(() => {
        this.inputFilter.nativeElement.focus();
      }, 0);
    }
    event.preventDefault();
  }

  setFocusItem(event: any, key: number) {
    setTimeout(() => {
      document.getElementById('dropdown-item-' + this.eid + '-' + key).focus();
    }, 0);
    event.preventDefault();
  }
}
