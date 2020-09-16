import { DataService } from './data.service';
//import * as M from './data-entity-parent';
import * as K from './data-entity-kids';
import * as W from './data-workflow-classes';
import * as E from './data-entity-types';
import { Entities } from './data-entities';

//TODO: branch to various forms: 15.2, 25, 21.1...
export function getFormForName(data: DataService, formName: string): W.TaskForm {
  let t7 = new W.TaskForm(data, 'formCoR211');
  t7.name = formName;
  t7.addInput('effectiveDate', 'date', 'Effective date of the amendment', '',new Date());
  // todo: add source type for each form and mapHeading
  return t7;
}

// export function getCompany_ForParentSelection(config: ConfigWorkflow) {
//   let t = new W.TaskFlowSelect(config.data, 'companyKey');
//   t.name = 'Company';
//   t.sourceType = E.EnumEntityType.CompaniesForCountry;
//   t.actionEntityNameIsEntityName = true;

//   t = attachToParentSelection(
//     t,
//     config.parent,
//     config.parentConditionKey
//   ) as W.TaskFlowSelect;

//   return t;
// }

export function attachToParentSelection(
  childTask: W.Task,
  parentTask: W.Task,
  parentConditionKey: number
) {
  let cond = new W.Task_SubTaskCondition(
    parentTask.fieldName,
    parentConditionKey,
    '==',
    'number'
  );
  let subTask = new W.Task_SubTask(childTask, [cond]);
  parentTask.addNextFork(subTask);
  return childTask;
}

export function getConfirm(
  data: DataService,
  fieldName: string,
  heading: string,
  startValue: boolean,
  ensureValueIsTrue: boolean
): W.TaskConfirm {
  let a = new W.TaskConfirm(data, fieldName);
  a.name = heading;
  a.defaultValue = startValue
  a.ensure = ensureValueIsTrue
  return a;
}

export class TaskList {
  private _list: W.Task[] = [];
  private _lastTask: W.Task;
  constructor(public parentTask: W.Task, public parentWorkflow: K.EntityWorkflow) {
    this._lastTask = parentTask;
  }
  add(t: W.Task) {
    this._list.push(t);
    if (this._list.length == 1) {
      let condition = new W.Task_SubTaskCondition(
        this.parentTask.fieldName,
        this.parentWorkflow.key,
        '==',
        'number'
      );
      let subTask = new W.Task_SubTask(t, [condition]);
      this._lastTask.addNextFork(subTask);
    } else{
      this._lastTask.addNext(t)
    }
    this._lastTask = t;
  }
  get firstTask() {
    return this._list[0];
  }
}

export function getFinalPage(data: DataService,parent: W.Task, parentWorkflow: K.EntityWorkflow):W.Task{
  let taskList = new TaskList(parent,parentWorkflow)
  taskList.add(getMessage(
    data,
    parentWorkflow.name +
      `: test page for end of workflow. Press 'Save & Next' to reset`
  ))
  return taskList.firstTask
}

export function getRecordDate(
  data: DataService,
  fieldName: string,
  heading: string
): W.TaskDate {
  let a = new W.TaskDate(data, fieldName);
  a.name = heading;
  return a;
}

// export function getUploadDocs(
//   data: DataService,
//   parent: W.TaskFlow,
//   fieldName: string,
//   heading: string
// ): W.TaskFlowUploadDocs {
//   let a = new W.TaskFlowUploadDocs(data, fieldName);
//   a.name = heading;
//   parent.addNext(a);
//   return a;
// }

export function getReminder(
  data: DataService,
  fieldName: string,
  heading: string
): W.TaskReminder {
  let a = new W.TaskReminder(data, fieldName);
  a.name = heading;
  a.offsetDays = 20;
  return a;
}

export function getInputDate(
  data: DataService,
  fieldName: string,
  heading: string
): W.TaskDate {
  let a = new W.TaskDate(data, 'form_' + fieldName);
  a.name = heading;
  return a;
}

export function getInputText(
  data: DataService,
  fieldName: string,
  heading: string
): W.TaskForm {
  let a = new W.TaskForm(data, 'form_' + fieldName);
  a.name = heading;
  a.addInput(fieldName, 'text', heading, '','');
  return a;
}



export function getSubmitFiles(
  data: DataService,
  fileList: Entities<K.EntityFile>,
  fieldName: string,
  heading: string
) {
  let a = new W.TaskDownload(data, fieldName);
  a.files = fileList
  a.name = heading;
  return a;
}

export function getUploadFiles(
  data: DataService,
  fileList: Entities<K.EntityFile>,
  fieldName: string,
  heading: string
) {
  let a = new W.TaskUpload(data, fieldName);
  a.files = fileList
  a.name = heading;
  return a;
}

export function getAppointmentAction(
  data: DataService,
) {
  let a = new W.TaskSelect(data, 'appointmentActionKey');
  a.name = 'Appointment action';
  a.sourceType = E.EnumEntityType.AppointmentAction;
  a.thisEntityNameIsAction = true;
  return a;
}

export function getCompany(data: DataService) {
  let a = new W.TaskSelect(data, 'companyKey');
  a.name = 'Company';
  a.sourceType = E.EnumEntityType.CompaniesForCountry;
  a.thisEntityNameIsSubjectName = true;
  // let s = new W.TaskFlowSubTask(a);

  // parent.addNextFork(s);
  return a;
}

export function getDirectorType(data: DataService) {
  let a = new W.TaskSelect(data, 'directorTypeKey');
  a.name = 'Director type';
  a.sourceType = E.EnumEntityType.DirectorType;
  return a;
}

export function getIndividual(data: DataService) {
  let a = new W.TaskSelect(data, 'individualKey');
  a.name = 'Individual';
  a.sourceType = E.EnumEntityType.Individual;
  a.thisEntityNameIsObjectName = true;
  // parent.addNext(a);
  return a;
}

export function getIndividualEmployeeStatus(data: DataService) {
  let a = new W.TaskSelect(data, 'individualKey')
  a.name = 'Individual'
  a.sourceType = E.EnumEntityType.IndividualInternalEmployeeStatus;
  a.thisEntityNameIsObjectName = true;
  return a;
}

export function getMessage(data: DataService, messageText: string) {
  let a = new W.TaskMessage(data, 'message');
  a.name = 'Message';
  a.description = messageText
  return a;
}

//public parentConditionKey: number,
// public formName: string
export class ConfigWorkflow {
  constructor(
    public data: DataService,
    public parent: W.Task,
    public heading: string,
    public fieldName: string,
    public parentWorkflow: K.EntityWorkflow
  ) {}
}

export function getCompany_EditAll(data: DataService){
  let a = new W.TaskForm(data, 'companyDetails');
  a.name = 'The amendment';
  a.entityFieldKey = 'companyKey';
  a.inputObject = new K.EntityCompany('New Company');
  return a
}

// export function getCountry(data: DataService, parent: W.TaskFlow) {
//   let a = new W.TaskFlowSelect(data, 'countryKey');
//   a.name = 'Country';
//   a.sourceType = E.EnumEntityType.CountryWithTasks;
//   parent.addNext(a);
//   return a;
// }

export function getCountryForTask(data: DataService): W.TaskSelect{
  let a = new W.TaskSelect(data, 'countryKey');
  a.name = 'Country';
  a.sourceType = E.EnumEntityType.CountryForTask;
  return a
}

// export function getCountryForTask_AttachedToParentMenuSelection(data: DataService, parent: W.TaskFlow,parentFieldName: string, parentConditionKey: number) {
//   let a = new W.TaskFlowSelect(data, 'countryKey');
//   a.name = 'Country';
//   a.sourceType = E.EnumEntityType.CountryForTask;

//   let condition = new W.TaskFlowSubTaskCondition(parentFieldName,parentConditionKey,'==','number')
//   let subTask = new W.TaskFlowSubTask(a,[condition])
//   parent.addNextFork(subTask);
//   return a;
// }

// export function getCountry_AttachedToParentMenuSelection(data: DataService, parent: W.TaskFlow,parentFieldName: string, parentConditionKey: number) {
//   let a = new W.TaskFlowSelect(data, 'countryKey');
//   a.name = 'Country';
//   a.sourceType = E.EnumEntityType.CountryWithTasks;

//   let condition = new W.TaskFlowSubTaskCondition(parentFieldName,parentConditionKey,'==','number')
//   let subTask = new W.TaskFlowSubTask(a,[condition])
//   parent.addNextFork(subTask);
//   return a;
// }

// function getCountry(
//   parentWorkflow: K.EntityWorkflow,
//   parent: W.TaskFlow,
//   data: DataService
// ): W.TaskFlowSelect {
//   let t = new W.TaskFlowSelect(data, 'countryKey');
//   t.name = 'Country';
//   t.sourceType = E.EnumEntityType.CountryWithTasks;
//   // parent.addNext(t);
//   return t;
// }

