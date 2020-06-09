import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { LegalEntity, FunctionalEntity, EveryEntity, Company } from 'src/app/models';


@Component({
  selector: 'app-entity-details-company-primary',
  templateUrl: './entity-details-company-primary.component.html',
  styleUrls: ['./entity-details-company-primary.component.css']
})
export class EntityDetailsCompanyPrimaryComponent implements OnInit {
  @Input() isNarrow = false;
  @Input() filterText = '';
  @Input() entityKey: number;
  @Input() entity: Company;
  //@Input() legalEntity: LegalEntity;

  @Output() onRecord = new EventEmitter();
  @Output() onTask = new EventEmitter();
  @Output() onFile = new EventEmitter();
  @Output() onDirty = new EventEmitter();
  constructor(public data: DataService) { }


  // get legalEntity(): EveryEntity{
  //   return this.data.getEntity(this.entityKey);
  // }

  ngOnInit(): void {
    if (this.data.lg) console.log( 'loaded:entities-details-company-primary');
    this.data.progress += 1;
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

}
