export const jsonEntityTypes = `[
	{"key":0,"name":"AccountingClass","pluralName":"AccountingClasses","dashboardIndex":-1,"activeIs":true,"keyName":"accountingClassKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAccountingClasses","storeName":"","headingsSource":""},
	{"key":1,"name":"AccountingClassTier","pluralName":"AccountingClassTiers","dashboardIndex":-1,"activeIs":true,"keyName":"accountingClassTierKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAccountingClassTiers","storeName":"","headingsSource":""},
	{"key":2,"name":"Auditor","pluralName":"Auditors","dashboardIndex":-1,"activeIs":true,"keyName":"auditorKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAuditors","storeName":"","headingsSource":""},
	{"key":3,"name":"BusinessArea","pluralName":"BusinessAreas","dashboardIndex":-1,"activeIs":true,"keyName":"businessAreaKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonBusinessAreas","storeName":"","headingsSource":""},
	{"key":4,"name":"BusinessDivision","pluralName":"BusinessDivisions","dashboardIndex":-1,"activeIs":true,"keyName":"businessDivisionKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonBusinessDivisions","storeName":"","headingsSource":""},
	{"key":5,"name":"Capacity","pluralName":"Capacities","dashboardIndex":-1,"activeIs":true,"keyName":"capacityKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCapacities","storeName":"","headingsSource":""},
	{"key":6,"name":"City","pluralName":"Cities","dashboardIndex":-1,"activeIs":true,"keyName":"cityKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCities","storeName":"","headingsSource":""},
	{"key":7,"name":"Company","pluralName":"Companies","dashboardIndex":1,"activeIs":true,"keyName":"companyKey","canHoldSharesIs":"true","sourceType":"json","jsonSource":"jsonCompanies","storeName":"","headingsSource":"headingsCompany"},
	{"key":8,"name":"CompaniesForCountry","pluralName":"CompaniesForCountry","dashboardIndex":-1,"activeIs":true,"keyName":"companiesForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCompaniesForCountry","headingsSource":""},
	{"key":9,"name":"CompanyType","pluralName":"CompanyTypes","dashboardIndex":-1,"activeIs":true,"keyName":"companyTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCompanyTypes","storeName":"","headingsSource":""},
	{"key":10,"name":"Consolidation","pluralName":"Consolidation","dashboardIndex":-1,"activeIs":true,"keyName":"consolidationKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonConsolidation","storeName":"","headingsSource":""},
	{"key":11,"name":"Contact","pluralName":"Contacts","dashboardIndex":-1,"activeIs":true,"keyName":"contactKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonContacts","storeName":"","headingsSource":""},
	{"key":12,"name":"Country","pluralName":"Countries","dashboardIndex":-1,"activeIs":true,"keyName":"countryKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCountries","storeName":"","headingsSource":""},
	{"key":13,"name":"CountryWithTasks","pluralName":"CountriesWithTasks","dashboardIndex":-1,"activeIs":true,"keyName":"countryWithTasksKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCountriesWithTasks","headingsSource":""},
	{"key":14,"name":"CountryForTask","pluralName":"CountriesForTask","dashboardIndex":-1,"activeIs":true,"keyName":"countryForTaskKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCountriesForTask","headingsSource":""},
	{"key":15,"name":"CountryForName","pluralName":"CountryForName","dashboardIndex":-1,"activeIs":true,"keyName":"countryForNameKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCountryForName","headingsSource":""},
	{"key":16,"name":"Custom","pluralName":"Custom","dashboardIndex":-1,"activeIs":true,"keyName":"customKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCustom","headingsSource":""},
	{"key":17,"name":"Dashboard","pluralName":"Dashboards","dashboardIndex":0,"activeIs":true,"keyName":"dashboardKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"menus","headingsSource":""},
	{"key":18,"name":"EntityStatus","pluralName":"EntityStatuses","dashboardIndex":-1,"activeIs":true,"keyName":"entityStatusKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonEntityStatuses","storeName":"","headingsSource":""},
	{"key":19,"name":"EntityStatusTier","pluralName":"EntityStatusTiers","dashboardIndex":-1,"activeIs":true,"keyName":"entityStatusTierKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonEntityStatusTiers","storeName":"","headingsSource":""},
	{"key":20,"name":"Individual","pluralName":"Individuals","dashboardIndex":2,"activeIs":true,"keyName":"individualKey","canHoldSharesIs":"true","sourceType":"json","jsonSource":"jsonIndividuals","storeName":"","headingsSource":""},
	{"key":21,"name":"IndividualForCountries","pluralName":"IndividualsForCountries","dashboardIndex":-1,"activeIs":true,"keyName":"individualForCountriesKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getIndividualsForCountries","headingsSource":""},
	{"key":22,"name":"IndividualInternalEmployeeStatus","pluralName":"IndividualsInternalEmployeeStatus","dashboardIndex":-1,"activeIs":true,"keyName":"individualInternalEmployeeStatusKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getIndividualsInternalEmployeeStatus","headingsSource":""},
	{"key":23,"name":"IndividualInternalEmployeeStatusNotOnBoard","pluralName":"IndividualInternalEmployeeStatusNotOnBoard","dashboardIndex":-1,"activeIs":true,"keyName":"individualInternalEmployeeStatusNotOnBoardKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getIndividualInternalEmployeeStatusNotOnBoard","headingsSource":""},
	{"key":24,"name":"IndividualForCommittee","pluralName":"IndividualsForCommittee","dashboardIndex":-1,"activeIs":true,"keyName":"individualForCommitteeKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getIndividualsForCommittee","headingsSource":""},
	{"key":25,"name":"IndividualNotForCommittee","pluralName":"IndividualsNotForCommittee","dashboardIndex":-1,"activeIs":true,"keyName":"individualNotForCommitteeKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getIndividualsNotForCommittee","headingsSource":""},
	{"key":26,"name":"IndividualForBoard","pluralName":"IndividualsForBoard","dashboardIndex":-1,"activeIs":true,"keyName":"individualForBoardKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getIndividualsForBoard","headingsSource":""},
	{"key":27,"name":"IndividualNotForBoard","pluralName":"IndividualsNotForBoard","dashboardIndex":-1,"activeIs":true,"keyName":"individualNotForBoardKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getIndividualsNotForBoard","headingsSource":""},
	{"key":28,"name":"Industry","pluralName":"Industries","dashboardIndex":-1,"activeIs":true,"keyName":"industryKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonIndustries","storeName":"","headingsSource":""},
	{"key":29,"name":"LegalClass","pluralName":"LegalClasses","dashboardIndex":-1,"activeIs":true,"keyName":"legalClassKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonLegalClasses","storeName":"","headingsSource":""},
	{"key":30,"name":"Month","pluralName":"Months","dashboardIndex":-1,"activeIs":true,"keyName":"monthKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonMonths","storeName":"","headingsSource":""},
	{"key":31,"name":"Portfolio","pluralName":"Portfolios","dashboardIndex":-1,"activeIs":true,"keyName":"portfolioKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonPortfolios","storeName":"","headingsSource":""},
	{"key":32,"name":"Property","pluralName":"Properties","dashboardIndex":-1,"activeIs":true,"keyName":"propertyKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonProperties","storeName":"","headingsSource":""},
	{"key":33,"name":"Regulation","pluralName":"Regulations","dashboardIndex":-1,"activeIs":true,"keyName":"regulationKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonRegulations","storeName":"","headingsSource":""},
	{"key":34,"name":"Regulator","pluralName":"Regulators","dashboardIndex":-1,"activeIs":true,"keyName":"regulatorKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonRegulators","storeName":"","headingsSource":""},
	{"key":35,"name":"Search","pluralName":"Search","dashboardIndex":-1,"activeIs":true,"keyName":"searchKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"menus","headingsSource":""},
	{"key":36,"name":"Secretariat","pluralName":"Secretariats","dashboardIndex":-1,"activeIs":true,"keyName":"secretariatKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonSecretariats","storeName":"","headingsSource":""},
	{"key":37,"name":"Setting","pluralName":"Settings","dashboardIndex":-1,"activeIs":true,"keyName":"settingKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"menus","headingsSource":""},
	{"key":38,"name":"ShareCertificate","pluralName":"ShareCertificates","dashboardIndex":-1,"activeIs":true,"keyName":"shareCertificateKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonShareCertificates","storeName":"","headingsSource":""},
	{"key":39,"name":"Shareholding","pluralName":"Shareholdings","dashboardIndex":-1,"activeIs":true,"keyName":"shareholdingKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonShareholdings","storeName":"","headingsSource":""},
	{"key":40,"name":"Template","pluralName":"Templates","dashboardIndex":-1,"activeIs":true,"keyName":"templateKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTemplates","headingsSource":""},
	{"key":41,"name":"Trust","pluralName":"Trusts","dashboardIndex":-1,"activeIs":true,"keyName":"trustKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTrusts","storeName":"","headingsSource":""},
	{"key":42,"name":"User","pluralName":"Users","dashboardIndex":3,"activeIs":true,"keyName":"userKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonUsers","storeName":"","headingsSource":""},
	{"key":43,"name":"Entity","pluralName":"Entities","dashboardIndex":-1,"activeIs":true,"keyName":"entityKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
	{"key":44,"name":"File","pluralName":"Files","dashboardIndex":-1,"activeIs":true,"keyName":"fileKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonFiles","storeName":"","headingsSource":""},
	{"key":45,"name":"Meeting","pluralName":"Meetings","dashboardIndex":-1,"activeIs":true,"keyName":"meetingKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonMeetings","storeName":"","headingsSource":""},
	{"key":46,"name":"Functional","pluralName":"Functional","dashboardIndex":-1,"activeIs":true,"keyName":"functionalKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
	{"key":47,"name":"Legal","pluralName":"Legal","dashboardIndex":-1,"activeIs":true,"keyName":"legalKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
	{"key":48,"name":"Natural","pluralName":"Natural","dashboardIndex":-1,"activeIs":true,"keyName":"naturalKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
	{"key":49,"name":"AnniversaryMonth","pluralName":"AnniversaryMonths","dashboardIndex":-1,"activeIs":true,"keyName":"anniversaryMonthKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"months","headingsSource":""},
	{"key":50,"name":"ParentCompany","pluralName":"ParentCompanies","dashboardIndex":-1,"activeIs":true,"keyName":"parentCompanyKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"companies","headingsSource":""},
	{"key":51,"name":"EntityType","pluralName":"EntityTypes","dashboardIndex":-1,"activeIs":true,"keyName":"entityTypeKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
	{"key":52,"name":"HoldingParentCompany","pluralName":"HoldingParentCompanies","dashboardIndex":-1,"activeIs":true,"keyName":"holdingParentCompanyKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"companies","headingsSource":""},
	{"key":53,"name":"Secretary","pluralName":"Secretaries","dashboardIndex":-1,"activeIs":true,"keyName":"secretaryKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"users","headingsSource":""},
	{"key":54,"name":"Lee","pluralName":"Lee","dashboardIndex":-1,"activeIs":true,"keyName":"leeKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"individuals","headingsSource":""},
	{"key":55,"name":"FinancialOfficer","pluralName":"FinancialOfficers","dashboardIndex":-1,"activeIs":true,"keyName":"financialOfficerKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"individuals","headingsSource":""},
	{"key":56,"name":"PublicOfficer","pluralName":"PublicOfficers","dashboardIndex":-1,"activeIs":true,"keyName":"publicOfficerKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"individuals","headingsSource":""},
	{"key":57,"name":"AuditPartner","pluralName":"AuditPartners","dashboardIndex":-1,"activeIs":true,"keyName":"auditPartnerKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"individuals","headingsSource":""},
	{"key":58,"name":"FyeMonth","pluralName":"FyeMonths","dashboardIndex":-1,"activeIs":true,"keyName":"fyeMonthKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"months","headingsSource":""},
	{"key":59,"name":"TasksForCountry","pluralName":"TasksForCountry","dashboardIndex":-1,"activeIs":true,"keyName":"tasksForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTasksForCountry","headingsSource":""},
	{"key":60,"name":"TaskType","pluralName":"TaskTypes","dashboardIndex":-1,"activeIs":true,"keyName":"taskTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTaskTypes","storeName":"","headingsSource":""},
	{"key":61,"name":"TasksForEntityType","pluralName":"TasksForEntityType","dashboardIndex":-1,"activeIs":true,"keyName":"tasksForEntityTypeKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTasksForEntityType","headingsSource":""},
	{"key":62,"name":"TasksForEntityTypeForCountry","pluralName":"TasksForEntityTypeForCountry","dashboardIndex":-1,"activeIs":true,"keyName":"tasksForEntityTypeForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTasksForEntityTypeForCountry","headingsSource":""},
	{"key":63,"name":"YesNo","pluralName":"YesNo","dashboardIndex":-1,"activeIs":true,"keyName":"yesNoKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonYesNo","storeName":"","headingsSource":"headingsYesNo"},
	{"key":64,"name":"Period","pluralName":"Periods","dashboardIndex":-1,"activeIs":true,"keyName":"periodKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonPeriods","storeName":"","headingsSource":"headingsPeriod"},
	{"key":65,"name":"ContactPreference","pluralName":"ContactPreferences","dashboardIndex":-1,"activeIs":true,"keyName":"contactPreferenceKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonContactPreferences","storeName":"","headingsSource":"headingsContactPreference"},
	{"key":66,"name":"Report","pluralName":"Reports","dashboardIndex":-1,"activeIs":true,"keyName":"reportKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonReports","storeName":"","headingsSource":"headingsReport"},
	{"key":67,"name":"Attendance","pluralName":"Attendances","dashboardIndex":-1,"activeIs":true,"keyName":"attendanceKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAttendances","storeName":"","headingsSource":"headingsAttendance"},
	{"key":68,"name":"TaskStatus","pluralName":"TaskStatuses","dashboardIndex":-1,"activeIs":true,"keyName":"taskStatusKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTaskStatuses","storeName":"","headingsSource":"headingsTaskStatus"},
	{"key":69,"name":"TemplateInput","pluralName":"TemplateInputs","dashboardIndex":-1,"activeIs":true,"keyName":"templateInputKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTemplateInputs","storeName":"","headingsSource":""},
	{"key":70,"name":"TaskTypesForCountry","pluralName":"TaskTypesForCountry","dashboardIndex":-1,"activeIs":true,"keyName":"taskTypesForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTaskTypesForCountry","headingsSource":""},
	{"key":71,"name":"Task","pluralName":"Tasks","dashboardIndex":-1,"activeIs":true,"keyName":"taskKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTasks","storeName":"","headingsSource":""},
	{"key":72,"name":"DestinationType","pluralName":"DestinationTypes","dashboardIndex":-1,"activeIs":true,"keyName":"destinationTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonDestinationTypes","storeName":"","headingsSource":""},
	{"key":73,"name":"RegulatorType","pluralName":"RegulatorTypes","dashboardIndex":-1,"activeIs":true,"keyName":"regulatorTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonRegulatorTypes","storeName":"","headingsSource":""},
	{"key":74,"name":"Workflow","pluralName":"Workflows","dashboardIndex":-1,"activeIs":true,"keyName":"workflowKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonWorkflows","storeName":"","headingsSource":""},
	{"key":75,"name":"WorkflowForParent","pluralName":"WorkflowsForParent","dashboardIndex":-1,"activeIs":true,"keyName":"workflowForParentKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getWorkflowsForParent","headingsSource":""},
	{"key":76,"name":"DirectorType","pluralName":"DirectorTypes","dashboardIndex":-1,"activeIs":true,"keyName":"directorTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonDirectorTypes","storeName":"","headingsSource":""},
	{"key":77,"name":"AppointmentAction","pluralName":"AppointmentActions","dashboardIndex":-1,"activeIs":true,"keyName":"appointmentActionKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAppointmentActions","storeName":"","headingsSource":""},
	{"key":78,"name":"FileDownload","pluralName":"FilesDownload","dashboardIndex":-1,"activeIs":true,"keyName":"fileDownloadKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getFilesDownload","headingsSource":""},
	{"key":79,"name":"FileUpload","pluralName":"FilesUpload","dashboardIndex":-1,"activeIs":true,"keyName":"fileUploadKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getFilesUpload","headingsSource":""},
	{"key":80,"name":"CommitteeType","pluralName":"CommitteeTypes","dashboardIndex":-1,"activeIs":true,"keyName":"committeeTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCommitteeTypes","storeName":"","headingsSource":""},
	{"key":81,"name":"CommitteeTypeForCountry","pluralName":"CommitteeTypesForCountry","dashboardIndex":-1,"activeIs":true,"keyName":"committeeTypeForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCommitteeTypesForCountry","headingsSource":""},
	{"key":82,"name":"CommitteeAppointment","pluralName":"CommitteeAppointments","dashboardIndex":-1,"activeIs":true,"keyName":"committeeAppointmentKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCommitteeAppointments","storeName":"","headingsSource":""},
	{"key":83,"name":"Committee","pluralName":"Committees","dashboardIndex":-1,"activeIs":true,"keyName":"committeeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCommittees","storeName":"","headingsSource":""},
	{"key":84,"name":"CommitteeForCompany","pluralName":"CommitteesForCompany","dashboardIndex":-1,"activeIs":true,"keyName":"committeeForCompanyKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCommitteesForCompany","headingsSource":""},
	{"key":85,"name":"CommitteeAppointmentForCommittee","pluralName":"CommitteeAppointmentsForCommittee","dashboardIndex":-1,"activeIs":true,"keyName":"committeeAppointmentForCommitteeKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCommitteeAppointmentsForCommittee","headingsSource":""},
	{"key":86,"name":"IndividualForAppointment","pluralName":"IndividualsForAppointment","dashboardIndex":-1,"activeIs":true,"keyName":"individualForAppointmentKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getIndividualsForAppointment","headingsSource":""},
	{"key":87,"name":"CommitteeAppointmentActiveForCommittee","pluralName":"CommitteeAppointmentActiveForCommittee","dashboardIndex":-1,"activeIs":true,"keyName":"committeeAppointmentActiveForCommitteeKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCommitteeAppointmentActiveForCommittee","headingsSource":""},
	{"key":88,"name":"CommitteeAppointmentNotActiveForCommittee","pluralName":"CommitteeAppointmentNotActiveForCommittee","dashboardIndex":-1,"activeIs":true,"keyName":"committeeAppointmentNotActiveForCommitteeKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCommitteeAppointmentNotActiveForCommittee","headingsSource":""},
	{"key":89,"name":"BoardAppointment","pluralName":"BoardAppointments","dashboardIndex":-1,"activeIs":true,"keyName":"boardAppointmentKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonBoardAppointments","storeName":"","headingsSource":""},
	{"key":90,"name":"BoardAppointmentActiveForCompany","pluralName":"BoardAppointmentsActiveForCompany","dashboardIndex":-1,"activeIs":true,"keyName":"boardAppointmentActiveForCompanyKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getBoardAppointmentsActiveForCompany","headingsSource":""},
	{"key":91,"name":"BoardAppointmentNotActiveForCompany","pluralName":"BoardAppointmentsNotActiveForCompany","dashboardIndex":-1,"activeIs":true,"keyName":"boardAppointmentNotActiveForCompanyKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getBoardAppointmentsNotActiveForCompany","headingsSource":""},
	{"key":92,"name":"TaskWalker","pluralName":"TaskWalkers","dashboardIndex":-1,"activeIs":true,"keyName":"taskWalkerKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTaskWalkers","storeName":"","headingsSource":""}]`
export enum EnumEntityType{
	AccountingClass,
	AccountingClassTier,
	Auditor,
	BusinessArea,
	BusinessDivision,
	Capacity,
	City,
	Company,
	CompaniesForCountry,
	CompanyType,
	Consolidation,
	Contact,
	Country,
	CountryWithTasks,
	CountryForTask,
	CountryForName,
	Custom,
	Dashboard,
	EntityStatus,
	EntityStatusTier,
	Individual,
	IndividualForCountries,
	IndividualInternalEmployeeStatus,
	IndividualInternalEmployeeStatusNotOnBoard,
	IndividualForCommittee,
	IndividualNotForCommittee,
	IndividualForBoard,
	IndividualNotForBoard,
	Industry,
	LegalClass,
	Month,
	Portfolio,
	Property,
	Regulation,
	Regulator,
	Search,
	Secretariat,
	Setting,
	ShareCertificate,
	Shareholding,
	Template,
	Trust,
	User,
	Entity,
	File,
	Meeting,
	Functional,
	Legal,
	Natural,
	AnniversaryMonth,
	ParentCompany,
	EntityType,
	HoldingParentCompany,
	Secretary,
	Lee,
	FinancialOfficer,
	PublicOfficer,
	AuditPartner,
	FyeMonth,
	TasksForCountry,
	TaskType,
	TasksForEntityType,
	TasksForEntityTypeForCountry,
	YesNo,
	Period,
	ContactPreference,
	Report,
	Attendance,
	TaskStatus,
	TemplateInput,
	TaskTypesForCountry,
	Task,
	DestinationType,
	RegulatorType,
	Workflow,
	WorkflowForParent,
	DirectorType,
	AppointmentAction,
	FileDownload,
	FileUpload,
	CommitteeType,
	CommitteeTypeForCountry,
	CommitteeAppointment,
	Committee,
	CommitteeForCompany,
	CommitteeAppointmentForCommittee,
	IndividualForAppointment,
	CommitteeAppointmentActiveForCommittee,
	CommitteeAppointmentNotActiveForCommittee,
	BoardAppointment,
	BoardAppointmentActiveForCompany,
	BoardAppointmentNotActiveForCompany,
	TaskWalker}
