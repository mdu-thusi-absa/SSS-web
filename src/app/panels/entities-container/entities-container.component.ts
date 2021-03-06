import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
// import { Entities, AnyEntity} from 'src/app/data/models';
import { EnumEntityType } from 'src/app/data/data-entity-types';
//import { CompileShallowModuleMetadata } from '@angular/compiler';
// import { MatCardModule } from '@angular/material/card';
// import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';
import { EnvService } from 'src/app/env.service';
import { version } from 'package.json';
import { TaskWalker } from 'src/app/data/data-workflow-classes';

@Component({
  selector: 'app-entities-container',
  templateUrl: './entities-container.component.html',
  styleUrls: ['./entities-container.component.css'],
})
export class EntitiesContainerComponent implements OnInit {
  constructor(public data: DataService, public env: EnvService) {}

  ngOnInit(): void {
    this.panelRows = 1; //this.hideHistory && this.hideFiles ? 1 : 2;
    this.showFileFields = [];
    if (this.data.lg)
      console.log(new Date().getTime(), 'loaded:entities-container');
    this.data.progress += 1;
  }

  title = 'SSS';
  name: string = 'Max';
  public appVersion: string = version;
  entityName = ''

  showPanelRight = true;
  showPanelLeft = true
  hidePosts = true;
  isHalf = false;

  hideTasks = false;
  hideAudits = true;
  hideHistory = true;
  hideFiles = true;
  panelRows = 1;

  expandTaskDetail = false;
  expandHistoryDetail = false;
  expandFilesDetail = false;

  innerWidth: any;
  showFileFields: string[];
  isShowAllFiles = true;

  hidePrimary = false;
  hideSecondary = true;
  hideOptional = true;
  hideCustom = true;
  hideDetailFiles = true;
  hideUsers = true;
  hideContacts = true;
  hideHeader = true;
  hideMeetings = true;
  hideReminders = true;
  hideReports = true;

  //dashboardKey = 0;
  entityKey = EnumEntityType.Company;
  entityTypeKey: EnumEntityType = EnumEntityType.Company;

  isPageLoaded: string[] = [];
  isPageLoaded_index = 0;
  isPageLoaded_CalledToLoad: string[] = [];

  entities = [
    'Entity Name',
    'Registration Number',
    'Previous Name',
    'Code',
    'Suffix',
    'Country',
    'Industry',
    'Representative Office',
    'Foreign branch',
    'Incorporation Date',
    'Anniversary (month)',
    'Business Start Date',
    'Financial year end (month)',
    'Income Tax Number',
    'VAT Number',
    'Registered office address',
    'Postal address',
    'Business Area',
    'Business Division',
    'Legal classification',
    'Consolidated',
    'Entity status',
    'Entity status tiering',
    'Accounting classification',
    'Accounting classification tiering',
    'Direct parent/ownership',
    'Absa shareholding in entity (%)',
    'Appointed company secretary',
    'Internal secretary representative',
    'Entity Executive',
    'Entity Financial Officer',
    'Public Officer (income tax)',
  ];

  get pagesAreExpanded() {
    return (
      !this.hidePrimary &&
      !this.hideSecondary &&
      !this.hideOptional &&
      !this.hideCustom &&
      !this.hideDetailFiles &&
      !this.hideContacts &&
      !this.hideHeader &&
      !this.hideMeetings &&
      !this.hideReminders &&
      !this.hideReports
    );
  }

  // doEntityTypeChange(key: number){
  //   this.entityTypeKey = key
  // }

  isPage(name: string) {
    let r = false;
    if (name == 'dashboard') {
      r = this.entityTypeKey == EnumEntityType.Dashboard;
    } else if (name == 'search') {
      r = this.entityTypeKey == EnumEntityType.Search;
    } else if (name == 'detail') {
      r = !(
        this.entityTypeKey == EnumEntityType.Search ||
        this.entityTypeKey == EnumEntityType.Dashboard
      );
    }
    return r;
  }

  setHidePage(that: any, hidePage: string, setValue: boolean) {
    that[hidePage] = setValue;
  }

  expandContractAllPages() {
    let needToHide = this.pagesAreExpanded;
    let btns = [
      'hideHeader',
      'hidePrimary',
      'hideSecondary',
      'hideOptional',
      'hideContacts',
      'hideCustom',
      'hideDetailFiles',
      'hideMeetings',
      'hideReminders',
      'hideReports',
    ];
    for (let i = 0; i < btns.length; i++) {
      setTimeout(this.setHidePage, (i + 1) * 3, this, btns[i], needToHide);
    }
  }

  doLazy = false;
  getIsLoaded(setTo: boolean, key: string) {
    let r: boolean;
    if (setTo) {
      r = setTo;
      if (this.isPageLoaded.indexOf(key) < 0) {
        this.isPageLoaded.push(key);
      }
    } else {
      r = this.isPageLoaded.indexOf(key) > -1;
      //if not loaded load later
      if (!r)
        if (this.isPageLoaded_CalledToLoad.indexOf(key) == -1) {
          this.isPageLoaded_CalledToLoad.push(key);
          if (this.doLazy && this.isPageLoaded.indexOf(key) == -1) {
            this.isPageLoaded_index += 1;
            setTimeout(
              this.delayLoader,
              this.isPageLoaded_index * 500,
              key,
              this.isPageLoaded
            );
          }
        }
    }
    return r;
  }

  delayLoader(key: string, isPageLoaded: string[]) {
    //optimise lazy loader
    if (isPageLoaded.indexOf(key) == -1) isPageLoaded.push(key);
  }

  get dashboardName(): string {
    return this.data.entityTypes.get(this.entityTypeKey).name.toLowerCase();
  }

  doDashboardChange(event: any) {
    //this.dashboardKey = +event;
    this.entityTypeKey = +event;
  }

  doEntityChange(event: any) {
    this.entityKey = +event;
    this.entityName = this.data?.getEntities(this.entityTypeKey)?.get(this.entityKey).name
  }

  doSelectFields(selectedFields: string[]) {
    this.showFileFields = selectedFields;
  }

  showFilesAll() {
    this.isShowAllFiles = true;
    this.showHideFiles('');
  }

  doFile(event: any) {
    this.isShowAllFiles = false;
    this.showHideFiles(event);
  }
  doRecord(event: any) {
    this.showHideAudits();
  }

  doTask(event: any) {
    this.showHideTasks();
  }

  doSave_EntityDetail() {}
  doCancel_EntityDetail() {}

  private max(v: number, w: number) {
    if (v > w) return v;
    else return w;
  }

  showHideAudits() {
    this.hideAudits = !this.hideAudits;
    this.hidePosts = !this.hideAudits;
    this.hideTasks = !this.hideAudits;
  }
  showHideTasks() {
    this.hideTasks = !this.hideTasks;
    this.hidePosts = !this.hideTasks;
    this.hideAudits = !this.hideTasks;
  }
  showHideArticles() {
    this.hidePosts = !this.hidePosts;
    this.hideTasks = !this.hidePosts;
    this.hideAudits = !this.hideTasks;
  }

  showHideFiles(attribute: string, doShow: boolean = null) {
    this._showHide(2, doShow);
    this.setPaneRowCount();
    if (attribute.length > 0) this.showFileFields = [attribute];
    else {
      this.showFileFields = this.entities;
    }
  }

  showHideHistory(doShow: boolean = null) {
    // this._showHide(1, doShow);
    // this.setPaneRowCount();
    this.showHideAudits;
  }

  private _showHide(hideIndex: number, doShow: boolean = null) {
    let b0 = false;
    let b1 = false;
    let b2 = false;
    let bD0 = false;
    let bD1 = false;
    let bD2 = false;

    if (hideIndex === 0) {
      //b0 = this.hideTasks;
      b1 = this.hideHistory;
      b2 = this.hideFiles;
      bD0 = this.expandTaskDetail;
      bD1 = this.expandHistoryDetail;
      bD2 = this.expandFilesDetail;
    } else if (hideIndex === 1) {
      //b1 = this.hideTasks;
      b0 = this.hideHistory;
      b2 = this.hideFiles;
      bD1 = this.expandTaskDetail;
      bD0 = this.expandHistoryDetail;
      bD2 = this.expandFilesDetail;
    } else if (hideIndex === 2) {
      //b2 = this.hideTasks;
      b1 = this.hideHistory;
      b0 = this.hideFiles;
      bD2 = this.expandTaskDetail;
      bD1 = this.expandHistoryDetail;
      bD0 = this.expandFilesDetail;
    }

    b0 = !b0;

    if (!b0) {
      b1 = true;
      b2 = true;
    }
    bD0 = bD1 || bD2;

    if (hideIndex === 0) {
      //this.hideTasks = b0;
      this.hideHistory = b1;
      this.hideFiles = b2;
      //this.expandTaskDetail = bD0;
      this.expandHistoryDetail = bD1;
      this.expandFilesDetail = bD2;
    } else if (hideIndex === 1) {
      //this.hideTasks = b1;
      this.hideHistory = b0;
      this.hideFiles = b2;
      // this.expandTaskDetail = bD1;
      this.expandHistoryDetail = bD0;
      this.expandFilesDetail = bD2;
    } else if (hideIndex === 2) {
      //this.hideTasks = b2;
      this.hideHistory = b1;
      this.hideFiles = b0;
      //this.expandTaskDetail = bD2;
      this.expandHistoryDetail = bD1;
      this.expandFilesDetail = bD0;
    }
  }

  setPaneRowCount() {
    //this.panelRows = 1;
    if (this.hideHistory && this.hideFiles) this.panelRows = 1;

    // if (!this.hideHistory && !this.hideFiles)
    //   this.panelRows = 1;
    if (!this.hideHistory && this.hideFiles) this.panelRows = 2;
    if (this.hideHistory && !this.hideFiles) this.panelRows = 2;

    // if (this.hideHistory && this.hideFiles)
    //   this.panelRows = 1;
    if (!this.hideHistory && this.hideFiles) this.panelRows = 2;
    if (this.hideHistory && !this.hideFiles) this.panelRows = 2;
  }

  isFullPanel(): boolean {
    return this.panelRows == 0 ? true : this.panelRows == 1;
  }
  isHalfPanel(): boolean {
    return this.panelRows == 0 ? false : this.panelRows == 2;
  }
  // doNameChange(event: string){
  //   setTimeout(this.entityName = event,100)
  // }
}
