import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-input-reminder',
  templateUrl: './input-reminder.component.html',
  styleUrls: ['./input-reminder.component.css']
})
export class InputReminderComponent implements OnInit {
  @Input() filterText='';
  @Input() doHideByFilter = true;
  @Input() title="File"
  @Input() disabled=false;
  @Input() value='';
  @Input() hideBody = true;
  @Input() showFlash = false;
  @Input() showPaperclip = false;
  @Input() showCD = false;
  @Input() showTitleInput = true;
  @Input() showDownload = false;
  @Input() showShare = false;
  @Input() showSelect = false;
  @Input() showCheck = false;
  @Input() showPanelHeading = true;
  @Input() isNarrow = false;
  isDown_sendTo = false;

  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  @Output() onRecord = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onCheck = new EventEmitter();


  eid = 'input-reminder'
  constructor(private data:DataService) {
    this.eid = this.data.getID('',this.eid);
  }

  ngOnInit(): void {
    setTimeout((that) => {that.value=true}, 1000, this);
    setTimeout((that) => {that.value=false}, 2000, this);
  }

  doCheckField(event: any){
    //let f = event.target.value;
    let c = event.target.checked;
    this.onCheck.emit(c);
  }

  doFile() {
    this.onFile.emit(this.title);
  }
  doRecord() {
    this.onRecord.emit(this.title);
  }
  doTask() {
    this.onTask.emit(this.title);
  }
  hideByFilter() {
    if (!this.doHideByFilter) return false;
    else
      return (
        this.title.toLowerCase().indexOf(this.filterText.toLowerCase()) === -1
      );
  }
  getID() {
    let s = / /g;
    let t = this.title.toLowerCase().replace(s, '-');
    s = /\//g;
    t = t.toLowerCase().replace(s, '-');
    s = /\:/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\,/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\-\-/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\(/g;
    t = t.toLowerCase().replace(s, '-');
    s = /\)/g;
    t = t.toLowerCase().replace(s, '-');
    return t;
  }
  doChange(event: any){
    this.onChange.emit(event);
  }

  doChangeTitle(event: any){
    this.title = event;
  }

}


