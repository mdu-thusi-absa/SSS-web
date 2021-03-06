// import * as M from './data-entity-parentTask';
import * as K from './data-entity-kids';
import * as W from './data-workflow-classes';
import * as E from './data-entity-types';
import * as G from './data-workflow-builder-get';
import { DataService } from './data.service';
import { AnyEntity, Entities } from './data-entities';

export function buildWorkFlow(data: DataService): W.TaskWalker {
  let workFlow = new W.TaskWalker(data, 'workflow');
  workFlow.description = 'Execute a company secretarial task';

  let db = data.getEntities(E.EnumEntityType.Workflow).select('activeIs',true);
  let kids = db.select('parentKey', -1);
  let child: K.EntityWorkflow = kids.get(kids.firstKey) as K.EntityWorkflow;
  let t = queKids(child, workFlow, data);
  workFlow.addNext(t);

  return workFlow;
}

function queKids(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
): W.Task {
  let kids = _getSubMenusList(parentEntity, data);
  let task: W.Task;
  let f = parentEntity.functionName;
  if (_stillSubMenuesToBuild(kids)) {
    task = _buildSubMenu(parentEntity, parentTask, data);
    _genSubSubMenus(kids);
  } else {
    task = _execTaskBuildingFunction(data, parentTask, parentEntity, f);
  }
  return task;

  function _genSubSubMenus(kids: Entities<AnyEntity>) {
    kids.forEach((value, key, map) => {
      if (value.activeIs) queKids(value as K.EntityWorkflow, task, data);
    });
  }

  function _getSubMenusList(
    parentEntity: K.EntityWorkflow,
    data: DataService
  ): Entities<AnyEntity> {
    let db = data.getEntities(E.EnumEntityType.Workflow);
    return db.select('parentKey', parentEntity.key);
  }

  function _stillSubMenuesToBuild(kids: Entities<AnyEntity>): boolean {
    return kids.size > 0;
  }

  function _execTaskBuildingFunction(
    data: DataService,
    parentTask: W.Task,
    parentEntity: K.EntityWorkflow,
    functionName: string
  ): W.Task {
    try {
      let fun: queFunction = eval(functionName);
      return fun(parentEntity, parentTask, data);
    } catch {
      console.log(
        'Warning',
        'data-workflow-builder',
        `Please implement function for full functionality: '${functionName}'`
      );
      return G.getFinalPage(data, parentTask, parentEntity);
    }
  }

  function _buildSubMenu(
    parentEntity: K.EntityWorkflow,
    parentTask: W.Task,
    data: DataService
  ): W.TaskSelect {
    let a = new W.TaskSelect(data, parentEntity.key + '_Key');
    a.name = parentEntity.name;
    a = G.attachToParentSelection(
      a,
      parentTask,
      parentEntity.key
    ) as W.TaskSelect;
    a.values = _getKids(data, parentEntity);
    return a;

    function _getKids(data: DataService, parentEntity: K.EntityWorkflow) {
      let d = data.getEntities(E.EnumEntityType.WorkflowForParent, {
        parentKey: parentEntity.key,
      });
      return d.select('activeIs', true);
    }
  }
}

interface queFunction {
  (
    parentEntity: K.EntityWorkflow,
    parentTask: W.Task,
    data: DataService
  ): W.Task;
}

function queCreateNewEntity
(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  taskList.add(G.getCountryForTask(data));

  let valueEntity = new W.EntityValue(data)
  valueEntity.initValue('','','')
  taskList.add(G.getInputText(data,'companyName','New company name',valueEntity,true))
  _getFinaliseTask(data,taskList)

  let insertEntity = new W.EntityValue(data)
  insertEntity.initInsert(E.EnumEntityType.Company,
    ['countryKey','name'],
    ['countryKey','companyName'],
    'companyKey')
  taskList.firstTask.targetsOfChange.push(insertEntity);
  return taskList.firstTask;
}

function queBoardMembershipAdd(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  taskList.add(G.getCountryForTask(data));
  taskList.add(G.getCompany(data));

  // taskList.add(G.getCommitteeForCompany(data));
  taskList.add(G.getDirectorType(data));
  taskList.add(G.getIndividualNotActiveOnBoard(data));

  _getFinaliseTask(data, taskList);
  let actionInsert = new W.EntityValue(data);
  actionInsert.addNotify('companyKey', 'boardAppointmentActiveForCompanyKeys');
  actionInsert.initInsert(
    E.EnumEntityType.BoardAppointment,
    ['companyKey', 'individualKey', 'directorTypeKey', 'startDate'],
    ['companyKey', 'individualKey', 'directorTypeKey', 'recordDate'],
    'boardAppoinmentKey'
  );
  taskList.firstTask.targetsOfChange.push(actionInsert);
  return taskList.firstTask;
}

function queBoardMembershipRemove(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  taskList.add(G.getCountryForTask(data));
  taskList.add(G.getCompany(data));

  taskList.add(G.getAppointmentOnBoard(data));

  _getFinaliseTask(data, taskList);
  let actionUpdate = new W.EntityValue(data);
  actionUpdate
    .addNotify('companyKey', 'boardAppointmentNotActiveForCompanyKeys')
    .initUpdate('boardAppointmentKey', 'endDate', 'recordDate');
  taskList.firstTask.targetsOfChange.push(actionUpdate);
  return taskList.firstTask;
}

function queCommitteeMembershipAdd(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  taskList.add(G.getCountryForTask(data));
  taskList.add(G.getCompany(data));

  taskList.add(G.getCommitteeForCompany(data));
  taskList.add(G.getCapacity(data));
  taskList.add(G.getIndividualNotActiveOnCommittee(data)); //that is not on committee

  _getFinaliseTask(data, taskList);
  // let actionInsert = new W.EntityValue(data, 'committeeAppointmentKey', '');
  let actionInsert = new W.EntityValue(data);
  actionInsert.addNotify('companyKey', 'committeeForCompanyKeys');
  actionInsert.initInsert(
    E.EnumEntityType.CommitteeAppointment,
    ['committeeKey', 'individualKey', 'capacityKey', 'startDate'],
    ['committeeKey', 'individualKey', 'capacityKey', 'recordDate'],
    'committeeAppointmentKey'
  );
  taskList.firstTask.targetsOfChange.push(actionInsert);
  return taskList.firstTask;
}

function queCommitteeMembershipRemove(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  taskList.add(G.getCountryForTask(data));
  taskList.add(G.getCompany(data));

  taskList.add(G.getCommitteeForCompany(data));
  //taskList.add(G.getCapacity(data));
  taskList.add(G.getAppointmentOnCommittee(data));

  _getFinaliseTask(data, taskList);
  let actionUpdate = new W.EntityValue(data);
  // actionUpdate
  //   .initNotify('companyKey', 'committeeForCompanyKeys')
  //   .initUpdate('committeeAppointmentKey', 'endDate', 'recordDate');
  actionUpdate
    .addNotify('companyKey', 'committeeForCompanyKeys')
    .addNotify('committeeKey', 'committeeAppointmentActiveForCommitteeKeys')
    .addNotify('committeeKey', 'committeeAppointmentNotActiveForCommitteeKeys')
    .initUpdate('committeeAppointmentKey', 'endDate', 'recordDate');
  taskList.firstTask.targetsOfChange.push(actionUpdate);
  return taskList.firstTask;
}

function queChangePhysicalAddress(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyAddress(
    parentEntity,
    parentTask,
    data,
    'physicalAddress',
    'Physical address'
  );
}
function queChangePostalAddress(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyAddress(
    parentEntity,
    parentTask,
    data,
    'postalAddress',
    'Postal address'
  );
}
function _getChangeCompanyAddress(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(data);
  updateEntityValue
    .addNotify('companyKey', fieldName)
    .initValue('companyKey', fieldName, new K.EntityAddress(data))
    .initUpdate('companyKey', fieldName, fieldName);
  taskList.add(G.getInputAddress(data, fieldName, heading, updateEntityValue));

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue);
  return taskList.firstTask;
}

function queChangeWeightDirectParentPercentOwnership(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyNumber(
    parentEntity,
    parentTask,
    data,
    'parentHoldingWeight',
    'Direct parent holding weight'
  );
}
function queChangeWeightAbsaShareholdingInTheEntityPercent(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyNumber(
    parentEntity,
    parentTask,
    data,
    'clientHoldingWeight',
    'Absa holding weight'
  );
}
function queChangePIScore(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyNumber(
    parentEntity,
    parentTask,
    data,
    'piScore',
    'PI score'
  );
}
function _getChangeCompanyNumber(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(data);
  updateEntityValue
    .addNotify('companyKey', fieldName)
    .initValue('companyKey', fieldName, '')
    .initUpdate('companyKey', fieldName, fieldName);
  taskList.add(G.getInputNumber(data, fieldName, heading, updateEntityValue));

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue);
  return taskList.firstTask;
}

// function queChangeAbsaInterconnectedEntityName(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService)
//   {return _getChangeCompanySelection(parentEntity,parentTask,data,'clientInterconnectedEntityKey','Absa interconnected entity',E.EnumEntityType.Company)}
// function queChangeAbsaShareholdingInEntityShareholder(parentEntity: K.EntityWorkflow,parentTask: W.Task,data: DataService)
//   {return _getChangeCompanySelection(parentEntity,parentTask,data,'clientHoldingCompanyKey','Absa shareholding entity',E.EnumEntityType.Company)}
function queChangeDirectParentownershipMajorShareholder(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'parentCompanyKey',
    'Direct parent/major shareholder',
    E.EnumEntityType.Company
  );
}
function queChangeEntityStatusTiering(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'entityStatusTierKey',
    'Entity status tier',
    E.EnumEntityType.EntityStatusTier
  );
}
function queChangeBusinessDivision(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'businessDivisionKey',
    'Business division',
    E.EnumEntityType.BusinessDivision
  );
}
function queChangeAccountingClassification(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'accountingClassKey',
    'Accounting classification',
    E.EnumEntityType.AccountingClass
  );
}
function queChangeAccountingClassificationTiering(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'accountingClassTierKey',
    'Accounting classification tier',
    E.EnumEntityType.AccountingClassTier
  );
}
function queChangeConsolidatednonconsolidated(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'consolidationKey',
    'Consolidation status',
    E.EnumEntityType.Consolidation
  );
}
function queChangeEntityStatus(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'entityStatusKey',
    'Entity status',
    E.EnumEntityType.EntityStatus
  );
}
function queChangeBusinessArea(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'businessAreaKey',
    'Business area',
    E.EnumEntityType.BusinessArea
  );
}
function queChangeAppointedCompanySecretary(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'secretariatKey',
    'Appointed secretariat',
    E.EnumEntityType.Secretariat
  );
}
function queChangeCompanyType(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'companyTypeKey',
    'Company type',
    E.EnumEntityType.CompanyType
  );
}
function queChangeAbsaGroupSecretariatRepresentative(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'secretaryKey',
    'Absa secretary representative',
    E.EnumEntityType.Secretary
  );
}
function queChangeIndustry(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'industryKey',
    'Industry',
    E.EnumEntityType.Industry
  );
}
function queChangeLegalClassification(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'legalClassKey',
    'Legal classification',
    E.EnumEntityType.LegalClass
  );
}
function queChangeLegalEntityExecutive_LEE(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanySelection(
    parentEntity,
    parentTask,
    data,
    'leeKey',
    'Legal entity executive',
    E.EnumEntityType.Individual
  );
}

function queChangeCountryOfIncorporation(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue_Country = new W.EntityValue(data);
  updateEntityValue_Country
    .addNotify('companyKey', 'countryKey')
    .initValue('companyKey', 'countryKey', '')
    .initUpdate('companyKey', 'countryKey', 'countryKey');
  let updateEntityValue_Suffix = new W.EntityValue(data);
  updateEntityValue_Suffix
    .addNotify('companyKey', 'suffix')
    .initValue('companyKey', 'suffix', 'suffix')
    .initUpdate('companyKey', 'suffix', 'suffix');
  taskList.add(
    G.getInputSelection(
      data,
      'countryKey',
      'Country of incorporation',
      updateEntityValue_Country,
      E.EnumEntityType.Country
    )
  );
  taskList.add(
    G.getInputText(data, 'suffix', 'Suffix', updateEntityValue_Suffix, false)
  );

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue_Country);
  taskList.firstTask.targetsOfChange.push(updateEntityValue_Suffix);
  return taskList.firstTask;
}

function _getChangeCompanySelection(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string,
  sourceEnumEntityType: E.EnumEntityType
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(data);
  updateEntityValue
    .addNotify('companyKey', fieldName)
    .initValue('companyKey', fieldName, '')
    .initUpdate('companyKey', fieldName, fieldName);
  taskList.add(
    G.getInputSelection(
      data,
      fieldName,
      heading,
      updateEntityValue,
      sourceEnumEntityType
    )
  );

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue);
  return taskList.firstTask;
}

function queChangeAnniversaryMonth(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyMonth(
    parentEntity,
    parentTask,
    data,
    'anniversaryMonthKey',
    'Anniversary month'
  );
}
function queChangeFinancialYearEndMonth(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyMonth(
    parentEntity,
    parentTask,
    data,
    'fyeMonthKey',
    'Financial year end'
  );
}

function _getChangeCompanyMonth(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(data);
  updateEntityValue
    .addNotify('companyKey', fieldName)
    .initValue('companyKey', fieldName, '')
    .initUpdate('companyKey', fieldName, fieldName);

  taskList.add(G.getInputMonth(data, fieldName, heading, updateEntityValue));

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue);
  return taskList.firstTask;
}

function queChangeRepresentativeOffice(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyDecide(
    parentEntity,
    parentTask,
    data,
    'representativeOfficeIs',
    'Is a representative office'
  );
}
function queChangeForeignBranch(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyDecide(
    parentEntity,
    parentTask,
    data,
    'foreignBranchIs',
    'Is foreign branch'
  );
}
function queChangeCertificatesAreKept(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyDecide(
    parentEntity,
    parentTask,
    data,
    'holdsCertificatesIs',
    'Are certificates kept'
  );
}
function queChangeInterconnectedWithinGroup(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyDecide(
    parentEntity,
    parentTask,
    data,
    'connectedEntityIs',
    'is internconnected in group'
  );
}
function queChangeGroupCompany(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyDecide(
    parentEntity,
    parentTask,
    data,
    'groupCompanyIs',
    'Absa group'
  );
}

function _getChangeCompanyConfirm(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(data);
  updateEntityValue
    .addNotify('companyKey', fieldName)
    .initValue('companyKey', fieldName, fieldName)
    .initUpdate('companyKey', fieldName, fieldName);
  taskList.add(G.getInputConfirm(data, fieldName, heading, updateEntityValue));

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue);
  return taskList.firstTask;
}

function _getChangeCompanyDecide(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(data);
  updateEntityValue
    .addNotify('companyKey', fieldName)
    .initValue('companyKey', fieldName, true)
    .initUpdate('companyKey', fieldName, fieldName);
  taskList.add(G.getInputDecide(data, fieldName, heading, updateEntityValue));

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue);
  return taskList.firstTask;
}

function queChangeIncorporationDate(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyDate(
    parentEntity,
    parentTask,
    data,
    'incorporationDate',
    'Incorporation date'
  );
}
function queChangeBusinessStart(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyDate(
    parentEntity,
    parentTask,
    data,
    'businessStartDate',
    'Business start date'
  );
}

function _getChangeCompanyDate(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(data);
  updateEntityValue
    .addNotify('companyKey', fieldName)
    .initValue('companyKey', fieldName, new Date())
    .initUpdate('companyKey', fieldName, fieldName);
  taskList.add(G.getInputDate(data, fieldName, heading, updateEntityValue));

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue);
  return taskList.firstTask;
}

function queChangeNatureOfBusinessForAnnualFinancialStatements(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyDesc(
    parentEntity,
    parentTask,
    data,
    'objectivePublishedDesc',
    'Nature of business for annual financial statements'
  );
}
function queChangeNatureOfBusinessActivitiesForMOI(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyDesc(
    parentEntity,
    parentTask,
    data,
    'objectiveRegisteredDesc',
    'Nature of business for MOI'
  );
}
function _getChangeCompanyDesc(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(data);
  updateEntityValue
    .addNotify('companyKey', fieldName)
    .initValue('companyKey', fieldName, '')
    .initUpdate('companyKey', fieldName, fieldName);
  taskList.add(G.getInputDesc(data, fieldName, heading, updateEntityValue));
  _getFinaliseTask(data, taskList);
  taskList.firstTask.targetsOfChange.push(updateEntityValue);
  return taskList.firstTask;
}

function queChangeCompanyName(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'name',
    'Entity name'
  );
}
function queChangeInternalCode(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'internalCode',
    'Internal code'
  );
}
function queChangeLE(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'leCode',
    'LE code'
  );
}
function queChangeRegistrationNumber(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'registrationCode',
    'Registration number'
  );
}
function queChangeIncomeTaxNumber(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'incomeTax',
    'Income tax number'
  );
}
function queChangeValueAddedTaxNumber(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'vatCode',
    'Value Added Tax number'
  );
}
function queChangeListedShareCode(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'listedCode',
    'Listed share code'
  );
}
function queChangeISIN(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'isinCode',
    'ISIN code'
  );
}
function queChangeLEINumber_Bloomberg(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'leiCode',
    'LEI number (Bloomberg)'
  );
}
function queChangeReuters(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'reutersCode',
    'Reuters code'
  );
}
function queChangeSuffix(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'suffix',
    'Suffix'
  );
}
function queChangeRegulatorClientCode(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'regulatorClientCode',
    'Regulator client code'
  );
}
function queChangeShortDescription(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'description',
    'Short description'
  );
}

function queChangeFSP(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  return _getChangeCompanyText(
    parentEntity,
    parentTask,
    data,
    'fspCode',
    'Financial Services Provider registration number'
  );
}

function _getChangeCompanyText(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService,
  fieldName: string,
  heading: string
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  _getCompany(data, taskList);
  //show show inputText to edit
  let updateEntityValue = new W.EntityValue(data);
  updateEntityValue
    .addNotify('companyKey', fieldName)
    .initValue('companyKey', fieldName, '')
    .initUpdate('companyKey', fieldName, fieldName);
  taskList.add(
    G.getInputText(data, fieldName, heading, updateEntityValue, true)
  );

  _getFinaliseTask(data, taskList);
  // create and save record, update object
  taskList.firstTask.targetsOfChange.push(updateEntityValue);
  return taskList.firstTask;
}

function _getNewIndividual(taskList: G.TaskList, data: DataService){
  taskList.add(
    G.getConfirm(data, 'addIndividualIs', 'Add individual', false, false)
  );

  let valueIndividual = new W.EntityValue(data);
  valueIndividual.initValue('', '', '');
  let firstNameTask = G.getInputText(
    data,
    'individual.firstName',
    'First name',
    valueIndividual,
    true
  );
  firstNameTask.setSkipIf('addIndividualIs',true)
  taskList.add(firstNameTask);

  let insertIndividual = new W.EntityValue(data);
  insertIndividual.actionAtFinish = false;
  insertIndividual
    .initInsert(
      E.EnumEntityType.Individual,
      ['surname', 'firstName', 'internalEmployeeIs'],
      ['individual.surname', 'individual.firstName', 'internalEmployeeIs'],
      'individualKey'
    )
    .initValue('', '', '');
  let surnameTask = G.getInputText(
    data,
    'individual.surname',
    'Surname',
    insertIndividual,
    true
  )
  surnameTask.setSkipIf('addIndividualIs',true)
  taskList.add(surnameTask)

  let d = G.getIndividualForEmployeeStatusNotOnBoard(data)
  d.setSkipIf('addIndividualIs',false)
  taskList.add(d)
}

function queBoardMembershipAdd_SA(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  taskList.add(G.getCountryForTask(data));
  taskList.add(G.getCompany(data));

  taskList.add(G.getDirectorType(data));

  taskList.add(
    G.getConfirm(data, 'internalEmployeeIs', 'Internal employee', true, false)
  );
  //show if addIndividualIs

  _getNewIndividual(taskList, data)

  //first name
  //
  //taskList.add(G.getIndividualForEmployeeStatusNotOnBoard(data));

  let secreatryDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  secreatryDownFileList
    .add(new K.EntityFileDownload('Entity Details SA'))
    .add(new K.EntityFileDownload('FSP 4B'));
  taskList.add(
    G.getDownloadFiles(
      data,
      secreatryDownFileList,
      'secreatryDownFileList',
      'Documents for the Company Secretary to fill'
    )
  );

  let secreatryUpFileList = new Entities<K.EntityFileUpload>(K.EntityFileUpload)
    .add(new K.EntityFileUpload('Filled: Entity Details SA'))
    .add(new K.EntityFileUpload('Filled: FSP 4B'));
  taskList.add(
    G.getUploadFiles(
      data,
      secreatryUpFileList,
      'secreatryUpFileList',
      `Company secreatry filled files`
    )
  );

  let individualDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  individualDownFileList
    .add(new K.EntityFileDownload('Consent form for the director'))
    .add(new K.EntityFileDownload('Abbreviated CV'))
    .add(new K.EntityFileDownload('Skill assessment'));
  taskList.add(
    G.getDownloadFiles(
      data,
      individualDownFileList,
      'individualDownFiles',
      'Documents for the individual to fill'
    )
  );

  let individualUpFileList = new Entities<K.EntityFileUpload>(
    K.EntityFileUpload
  )
    .add(new K.EntityFileUpload('Signed consent form from the director'))
    .add(new K.EntityFileUpload('Filled abbreviated CV'))
    .add(new K.EntityFileUpload(`Filled skill assessment`))
    .add(new K.EntityFileUpload(`Individual's ID`))
    .add(new K.EntityFileUpload(`Individual's Passport`));
  taskList.add(
    G.getUploadFiles(
      data,
      individualUpFileList,
      'individualFiles',
      `Individual's files`
    )
  );

  _getAuthorisation(data, taskList);
  _getApproval(
    data,
    taskList,
    'approvalLegalDepartmentIs',
    'Legal department approval'
  );

  let excoPackDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  excoPackDownFileList
    .add(new K.EntityFileDownload('Exco endorsement cover sheet for Exco'))
    .add(new K.EntityFileDownload('Exco supporting doc'));
  taskList.add(
    G.getDownloadFiles(
      data,
      excoPackDownFileList,
      'excoPackFiles',
      'Exco endorsement files'
    )
  );

  taskList.add(
    G.getConfirm(data, 'excoEndorsementApproveIs', 'Exco endorsed', true, true)
  );

  let excoEndorsementUpFileList = new Entities<K.EntityFileUpload>(
    K.EntityFileUpload
  ).add(new K.EntityFileUpload('Email file confirming endorsement'));
  taskList.add(
    G.getUploadFiles(
      data,
      excoEndorsementUpFileList,
      'excoEndorsementUpFileList',
      `Exco proof of endorsement`
    )
  );

  let boardDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  boardDownFileList.add(new K.EntityFileDownload('Board approval'));
  taskList.add(
    G.getDownloadFiles(
      data,
      boardDownFileList,
      'boardDownFileList',
      'Board approval files'
    )
  );

  let boardUpFileList = new Entities<K.EntityFileUpload>(K.EntityFileUpload);
  boardUpFileList.add(new K.EntityFileUpload('Signed board resolution'));
  taskList.add(
    G.getUploadFiles(
      data,
      boardUpFileList,
      'boardUpFileList',
      'Approved board approval files'
    )
  );

  let regulatorDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  regulatorDownFileList
    .add(new K.EntityFileDownload('CoR39'))
    .add(new K.EntityFileDownload('Signed board resolution'))
    .add(new K.EntityFileDownload('Signed director consent form'))
    .add(new K.EntityFileDownload('Uploaded copy of director ID'));
  taskList.add(
    G.getDownloadFiles(
      data,
      regulatorDownFileList,
      'regulatorDownFileList',
      'Regulator submission files'
    )
  );

  let ev = new W.EntityValue(data);
  ev.initValue('', '', '');
  taskList.add(
    G.getInputText(
      data,
      'regulatorSubmissionCode',
      'Regulator code for submission',
      ev,
      true
    )
  );
  let ew = new W.EntityValue(data);
  ew.initValue('', '', new Date());
  taskList.add(
    G.getInputDate(
      data,
      'regulatorSubmissionDate',
      'Date of submission to the regulator',
      ew
    )
  );
  taskList.add(
    G.getReminder(
      data,
      'regulatorSubmissionConfirmIs',
      'Regulator follow up reminder',
      'regulatorSubmissionCode'
    )
  );
  _getApproval(data, taskList, 'approvalRegulatortIs', 'Regulator approval');

  let regulatorUpFileList = new Entities<K.EntityFileUpload>(
    K.EntityFileUpload
  );
  regulatorUpFileList.add(
    new K.EntityFileUpload('Approval CoR39 from the regulator')
  );
  taskList.add(
    G.getUploadFiles(
      data,
      regulatorUpFileList,
      'regulatorApprovalFileList',
      'Regulator approval files'
    )
  );

  _getFinaliseTask(data, taskList);
  let actionInsert = new W.EntityValue(data);
  actionInsert.addNotify('companyKey', 'boardAppointmentActiveForCompanyKeys');
  actionInsert.initInsert(
    E.EnumEntityType.BoardAppointment,
    ['companyKey', 'individualKey', 'directorTypeKey', 'startDate'],
    ['companyKey', 'individualKey', 'directorTypeKey', 'recordDate'],
    'boardAppoinmentKey'
  );
  taskList.firstTask.targetsOfChange.push(actionInsert);
  return taskList.firstTask;
}

function queBoardMembershipRemove_SA(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  taskList.add(G.getCountryForTask(data));
  taskList.add(G.getCompany(data));

  taskList.add(G.getAppointmentOnBoard(data));

  _getFinaliseTask(data, taskList);
  let actionUpdate = new W.EntityValue(data);
  actionUpdate
    .addNotify('companyKey', 'boardAppointmentNotActiveForCompanyKeys')
    .initUpdate('boardAppointmentKey', 'endDate', 'recordDate');
  taskList.firstTask.targetsOfChange.push(actionUpdate);
  return taskList.firstTask;
}

function queAppointmentDirector(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);

  _getCompany(data, taskList);

  taskList.add(G.getDirectorType(data));

  taskList.add(
    G.getConfirm(data, 'internalEmployeeIs', 'Internal employee', true, false)
  );
  taskList.add(G.getAppointmentAction(data));
  taskList.add(G.getIndividualForEmployeeStatus(data));

  let secreatryDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  secreatryDownFileList
    .add(new K.EntityFileDownload('Entity Details SA'))
    .add(new K.EntityFileDownload('FSP 4B'));
  taskList.add(
    G.getDownloadFiles(
      data,
      secreatryDownFileList,
      'secreatryDownFileList',
      'Documents for the Company Secretary to fill'
    )
  );

  let secreatryUpFileList = new Entities<K.EntityFileUpload>(K.EntityFileUpload)
    .add(new K.EntityFileUpload('Filled: Entity Details SA'))
    .add(new K.EntityFileUpload('Filled: FSP 4B'));
  taskList.add(
    G.getUploadFiles(
      data,
      secreatryUpFileList,
      'secreatryUpFileList',
      `Company secreatry filled files`
    )
  );

  let individualDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  individualDownFileList
    .add(
      new K.EntityFileDownload('Sign off, consent declaration privacy combined')
    )
    .add(new K.EntityFileDownload('Abbreviated CV'))
    .add(new K.EntityFileDownload('Skill assessment'));
  taskList.add(
    G.getDownloadFiles(
      data,
      individualDownFileList,
      'individualDownFiles',
      'Documents for the individual to fill'
    )
  );

  let individualUpFileList = new Entities<K.EntityFileUpload>(
    K.EntityFileUpload
  )
    .add(new K.EntityFileUpload('Signed consent form from the director'))
    .add(new K.EntityFileUpload('Filled abbreviated CV'))
    .add(new K.EntityFileUpload(`Filled skill assessment`))
    .add(new K.EntityFileUpload(`Individual's ID`))
    .add(new K.EntityFileUpload(`Individual's Passport`));
  taskList.add(
    G.getUploadFiles(
      data,
      individualUpFileList,
      'individualFiles',
      `Individual's files`
    )
  );

  _getAuthorisation(data, taskList);
  _getApproval(
    data,
    taskList,
    'approvalLegalDepartmentIs',
    'Legal department approval'
  );

  let excoPackDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  excoPackDownFileList
    .add(new K.EntityFileDownload('Exco endorsement cover sheet for Exco'))
    .add(new K.EntityFileDownload('Exco supporting doc'));
  taskList.add(
    G.getDownloadFiles(
      data,
      excoPackDownFileList,
      'excoPackFiles',
      'Exco endorsement files'
    )
  );

  taskList.add(
    G.getConfirm(data, 'excoEndorsementApproveIs', 'Exco endorsed', true, true)
  );

  let excoEndorsementUpFileList = new Entities<K.EntityFileUpload>(
    K.EntityFileUpload
  ).add(new K.EntityFileUpload('Email file confirming endorsement'));
  taskList.add(
    G.getUploadFiles(
      data,
      excoEndorsementUpFileList,
      'excoEndorsementUpFileList',
      `Exco proof of endorsement`
    )
  );

  let boardDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  boardDownFileList.add(new K.EntityFileDownload('Board approval'));
  taskList.add(
    G.getDownloadFiles(
      data,
      boardDownFileList,
      'boardDownFileList',
      'Board approval files'
    )
  );

  let boardUpFileList = new Entities<K.EntityFileUpload>(K.EntityFileUpload);
  boardUpFileList.add(new K.EntityFileUpload('Signed board resolution'));
  taskList.add(
    G.getUploadFiles(
      data,
      boardUpFileList,
      'boardUpFileList',
      'Approved board approval files'
    )
  );

  let regulatorDownFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  );
  regulatorDownFileList
    .add(new K.EntityFileDownload('CoR39'))
    .add(new K.EntityFileDownload('Signed board resolution'))
    .add(new K.EntityFileDownload('Signed director consent form'))
    .add(new K.EntityFileDownload('Uploaded copy of director ID'));
  taskList.add(
    G.getDownloadFiles(
      data,
      regulatorDownFileList,
      'regulatorDownFileList',
      'Regulator submission files'
    )
  );

  let ev = new W.EntityValue(data);
  ev.initValue('', '', '-');
  taskList.add(
    G.getInputText(
      data,
      'regulatorSubmissionCode',
      'Regulator code for submission',
      ev,
      true
    )
  );
  let ew = new W.EntityValue(data);
  ew.initValue('', '', new Date());
  taskList.add(
    G.getInputDate(
      data,
      'regulatorSubmissionDate',
      'Date of submission to the regulator',
      ew
    )
  );
  //taskList.add(G.getConfirm(data, taskList.lastTask,'regulatorSubmissionConfirmIs','Regulator submited',false));
  taskList.add(
    G.getReminder(
      data,
      'regulatorSubmissionConfirmIs',
      'Regulator follow up reminder',
      'regulatorSubmissionCode'
    )
  );
  _getApproval(data, taskList, 'approvalRegulatortIs', 'Regulator approval');

  let regulatorUpFileList = new Entities<K.EntityFileUpload>(
    K.EntityFileUpload
  );
  regulatorUpFileList.add(
    new K.EntityFileUpload('Approval CoR39 from the regulator')
  );
  taskList.add(
    G.getUploadFiles(
      data,
      regulatorUpFileList,
      'regulatorApprovalFileList',
      'Regulator approval files'
    )
  );

  _getFinaliseTask(data, taskList);

  return taskList.firstTask;
}

function _getCompany(data: DataService, taskList: G.TaskList) {
  taskList.add(G.getCountryForTask(data));
  taskList.add(G.getCompany(data));
}

function _getApproval(
  data: DataService,
  taskList: G.TaskList,
  fieldName: string,
  heading: string
) {
  taskList.add(G.getConfirm(data, fieldName, heading, false, true));
}

function _getFinaliseTask(data: DataService, taskList: G.TaskList) {
  taskList.add(G.getRecordDate(data, 'recordDate', 'Record date'));
  taskList.add(
    G.getConfirm(data, 'finaliseIs', 'Finalise record', false, true)
  );
}

function _getAuthorisation(data: DataService, taskList: G.TaskList) {
  taskList.add(
    G.getConfirm(data, 'requestAuthoIs', 'Request authorisation', true, true)
  );

  taskList.add(
    G.getConfirm(data, 'receivedAuthoIs', 'Received authorisation', false, true)
  );
}

function queChangeAnyDetails(
  parentEntity: K.EntityWorkflow,
  parentTask: W.Task,
  data: DataService
) {
  let taskList = new G.TaskList(parentTask, parentEntity);
  taskList.add(G.getCountryForTask(data));

  taskList.add(G.getCompany(data));

  taskList.add(G.getCompany_EditAll(data));
  _getFinaliseTask(data, taskList);

  return taskList.firstTask;
}

function _useCompany_Amend_Specific(
  data: DataService,
  parentTask: W.Task,
  parentEntity: K.EntityWorkflow
): W.Task {
  let taskList = new G.TaskList(parentTask, parentEntity);
  let heading = parentTask.name;
  let fieldName = parentEntity.functionName;
  taskList.add(G.getCountryForTask(data));
  taskList.add(G.getCompany(data));
  let a = new W.TaskForm(data, fieldName);
  a.entityFieldKeyName = 'companyKey'; //the form will retrieve the relevant object, if it needs to show any of it's fields
  a.name = 'The amendment';
  // a.addInput(
  //   fieldName,
  //   data.getFieldTypeForFieldName(fieldName),
  //   heading,
  //   '',
  //   new W.EntityValue(data, 'companyKey', 'companyKey', fieldName, '')
  // );

  let ev = new W.EntityValue(data);
  ev.addNotify('companyKey', 'companyKey').initValue(
    'companyKey',
    'companyKey',
    ''
  );
  a.addInput(
    fieldName,
    data.getFieldTypeForFieldName(fieldName),
    heading,
    '',
    ev
  );

  taskList.add(a);
  //t.addNext(a)

  let upFiles = new Entities<K.EntityFileUpload>(K.EntityFileUpload);
  taskList.add(
    G.getUploadFiles(
      data,
      upFiles,
      'uploadFiles',
      'Please upload the following files'
    )
  );

  //'CoR 21.1' or any other
  //taskList.add(G.getFormForName(data, 'Required inputs'));

  let submitFileList = new Entities<K.EntityFileDownload>(
    K.EntityFileDownload
  ).add(new K.EntityFileDownload('CoR39'));

  taskList.add(
    G.getDownloadFiles(
      data,
      submitFileList,
      'submitFileKeys',
      'Submit following files to the regulator'
    )
  );

  taskList.add(
    G.getConfirm(
      data,
      'confirmSubmissionIs',
      'Confirmation of submission',
      false,
      true
    )
  );

  taskList.add(
    G.getReminder(
      data,
      'reminderDate',
      'Set reminder to follow up with the regulator',
      'regulatorSubmissionCode'
    )
  );

  taskList.add(
    G.getConfirm(
      data,
      'regulatorApprovalIs',
      'Confirm approval from the regulator',
      false,
      true
    )
  );

  let uploadApprovalFiles = new Entities<K.EntityFileUpload>(
    K.EntityFileUpload
  );
  taskList.add(
    G.getUploadFiles(
      data,
      uploadApprovalFiles,
      'uploadApprovalFileKeys',
      'Upload approval files from the regulator'
    )
  );
  taskList.add(G.getRecordDate(data, 'recordDate', 'Record date'));
  taskList.add(
    G.getConfirm(
      data,
      'taskCompleteIs',
      'Confirm completion of task',
      false,
      true
    )
  );
  return taskList.firstTask;
}
