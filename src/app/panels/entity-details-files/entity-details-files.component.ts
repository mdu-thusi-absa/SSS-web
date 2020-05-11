import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models';

@Component({
  selector: 'app-entity-details-files',
  templateUrl: './entity-details-files.component.html',
  styleUrls: ['./entity-details-files.component.css']
})
export class EntityDetailsFilesComponent implements OnInit {
  @Input() filterText = '';
  @Input() persons: Person[];

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();

  customCount = 1; //default number to display
  elements = new Array(this.customCount);
  elementsType: string[] = new Array(50); //max number

  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<this.elementsType.length; i++){
       this.elementsType[i] = 'text';
    }
  }

  doRecord(event: any){
    this.onRecord.emit(event);
  }

  doTask(event: any){
    this.onTask.emit(event);
  }

  doFile(event: any){
    this.onFile.emit(event);
  }

  doChangeCount(event: any){
    this.customCount = event;
    // let c = 30;
    // this.elements = Array.from(Array(30).keys());
    this.elements = new Array();
    for (let i = 0; i<this.customCount; i++){
      this.elements.push(i);
    }
    
    //console.log(this.customCount, this.elements);
  }

  doChangeCustomType(customIndex: number, event: any){
    let et = Object.assign(this.elementsType);
    et[customIndex] = event;
    this.elementsType = et;
  }


}