import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entity-details-contact',
  templateUrl: './entity-details-contact.component.html',
  styleUrls: ['./entity-details-contact.component.css']
})
export class EntityDetailsContactComponent implements OnInit {
  @Input() filterText = '';
  @Input() doHideByFilter = false;
  @Input() isNarrow = false;
  @Input() title = 'Contacts Page'

  @Output() onFile = new EventEmitter;
  @Output() onRecord = new EventEmitter;
  @Output() onTask = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  doFile(event: any){
    this.onFile.emit(this.title);
  }
  
  doTask(event: any){
    this.onTask.emit(this.title);
  }

  doRecord(event: any){
    this.onRecord.emit(this.title);
  }

}