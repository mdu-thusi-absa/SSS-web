export const jsonEntityTypes = `[
{"key":0,"name":"AccountingClass","pluralName":"AccountingClasses","dashboardIndex":-1,"isActive":true,"keyName":"accountingClassKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAccountingClasses","storeName":"accountingClasses","headingsSource":""},
{"key":1,"name":"AccountingClassTier","pluralName":"AccountingClassTiers","dashboardIndex":-1,"isActive":true,"keyName":"accountingClassTierKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAccountingClassTiers","storeName":"accountingClassTiers","headingsSource":""},
{"key":2,"name":"Address","pluralName":"Addresses","dashboardIndex":-1,"isActive":true,"keyName":"addressKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAddresses","storeName":"addresses","headingsSource":""},
{"key":3,"name":"Appointment","pluralName":"Appointments","dashboardIndex":-1,"isActive":true,"keyName":"appointmentKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAppointments","storeName":"appointments","headingsSource":""},
{"key":4,"name":"Auditor","pluralName":"Auditors","dashboardIndex":-1,"isActive":true,"keyName":"auditorKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAuditors","storeName":"auditors","headingsSource":""},
{"key":5,"name":"BusinessArea","pluralName":"BusinessAreas","dashboardIndex":-1,"isActive":true,"keyName":"businessAreaKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonBusinessAreas","storeName":"businessAreas","headingsSource":""},
{"key":6,"name":"BusinessDivision","pluralName":"BusinessDivisions","dashboardIndex":-1,"isActive":true,"keyName":"businessDivisionKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonBusinessDivisions","storeName":"businessDivisions","headingsSource":""},
{"key":7,"name":"Capacity","pluralName":"Capacities","dashboardIndex":-1,"isActive":true,"keyName":"capacityKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCapacities","storeName":"capacities","headingsSource":""},
{"key":8,"name":"City","pluralName":"Cities","dashboardIndex":-1,"isActive":true,"keyName":"cityKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCities","storeName":"cities","headingsSource":""},
{"key":9,"name":"Company","pluralName":"Companies","dashboardIndex":1,"isActive":true,"keyName":"companyKey","canHoldSharesIs":"true","sourceType":"json","jsonSource":"jsonCompanies","storeName":"companies","headingsSource":"headingsCompany"},
{"key":10,"name":"CompaniesForCountry","pluralName":"CompaniesForCountry","dashboardIndex":-1,"isActive":true,"keyName":"companiesForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCompaniesForCountry","headingsSource":""},
{"key":11,"name":"CompanyType","pluralName":"CompanyTypes","dashboardIndex":-1,"isActive":true,"keyName":"companyTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCompanyTypes","storeName":"companyTypes","headingsSource":""},
{"key":12,"name":"Consolidation","pluralName":"Consolidation","dashboardIndex":-1,"isActive":true,"keyName":"consolidationKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonConsolidation","storeName":"consolidation","headingsSource":""},
{"key":13,"name":"Contact","pluralName":"Contacts","dashboardIndex":-1,"isActive":true,"keyName":"contactKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonContacts","storeName":"contacts","headingsSource":""},
{"key":14,"name":"Country","pluralName":"Countries","dashboardIndex":-1,"isActive":true,"keyName":"countryKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCountries","storeName":"countries","headingsSource":""},
{"key":15,"name":"CountryWithTasks","pluralName":"CountriesWithTasks","dashboardIndex":-1,"isActive":true,"keyName":"countryWithTasksKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonCountriesWithTasks","storeName":"countriesWithTasks","headingsSource":""},
{"key":16,"name":"Custom","pluralName":"Custom","dashboardIndex":-1,"isActive":true,"keyName":"customKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getCustom","headingsSource":""},
{"key":17,"name":"Dashboard","pluralName":"Dashboards","dashboardIndex":0,"isActive":true,"keyName":"dashboardKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"menus","headingsSource":""},
{"key":18,"name":"EntityStatus","pluralName":"EntityStatuses","dashboardIndex":-1,"isActive":true,"keyName":"entityStatusKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonEntityStatuses","storeName":"entityStatuses","headingsSource":""},
{"key":19,"name":"EntityStatusTier","pluralName":"EntityStatusTiers","dashboardIndex":-1,"isActive":true,"keyName":"entityStatusTierKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonEntityStatusTiers","storeName":"entityStatusTiers","headingsSource":""},
{"key":20,"name":"Individual","pluralName":"Individuals","dashboardIndex":2,"isActive":true,"keyName":"individualKey","canHoldSharesIs":"true","sourceType":"json","jsonSource":"jsonIndividuals","storeName":"individuals","headingsSource":""},
{"key":21,"name":"IndividualForCountries","pluralName":"IndividualsForCountries","dashboardIndex":-1,"isActive":true,"keyName":"individualForCountriesKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getIndividualsForCountries","headingsSource":""},
{"key":22,"name":"Industry","pluralName":"Industries","dashboardIndex":-1,"isActive":true,"keyName":"industryKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonIndustries","storeName":"industries","headingsSource":""},
{"key":23,"name":"LegalClass","pluralName":"LegalClasses","dashboardIndex":-1,"isActive":true,"keyName":"legalClassKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonLegalClasses","storeName":"legalClasses","headingsSource":""},
{"key":24,"name":"Month","pluralName":"Months","dashboardIndex":-1,"isActive":true,"keyName":"monthKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonMonths","storeName":"months","headingsSource":""},
{"key":25,"name":"Portfolio","pluralName":"Portfolios","dashboardIndex":-1,"isActive":true,"keyName":"portfolioKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonPortfolios","storeName":"portfolios","headingsSource":""},
{"key":26,"name":"Property","pluralName":"Properties","dashboardIndex":-1,"isActive":true,"keyName":"propertyKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonProperties","storeName":"properties","headingsSource":""},
{"key":27,"name":"Regulation","pluralName":"Regulations","dashboardIndex":-1,"isActive":true,"keyName":"regulationKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonRegulations","storeName":"regulations","headingsSource":""},
{"key":28,"name":"Regulator","pluralName":"Regulators","dashboardIndex":-1,"isActive":true,"keyName":"regulatorKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonRegulators","storeName":"regulators","headingsSource":""},
{"key":29,"name":"Search","pluralName":"Search","dashboardIndex":-1,"isActive":true,"keyName":"searchKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"menus","headingsSource":""},
{"key":30,"name":"Secretariat","pluralName":"Secretariats","dashboardIndex":-1,"isActive":true,"keyName":"secretariatKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonSecretariats","storeName":"secretariats","headingsSource":""},
{"key":31,"name":"Setting","pluralName":"Settings","dashboardIndex":-1,"isActive":true,"keyName":"settingKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"menus","headingsSource":""},
{"key":32,"name":"ShareCertificate","pluralName":"ShareCertificates","dashboardIndex":-1,"isActive":true,"keyName":"shareCertificateKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonShareCertificates","storeName":"shareCertificates","headingsSource":""},
{"key":33,"name":"Shareholding","pluralName":"Shareholdings","dashboardIndex":-1,"isActive":true,"keyName":"shareholdingKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonShareholdings","storeName":"shareholdings","headingsSource":""},
{"key":34,"name":"Template","pluralName":"Templates","dashboardIndex":-1,"isActive":true,"keyName":"templateKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTemplates","headingsSource":""},
{"key":35,"name":"Trust","pluralName":"Trusts","dashboardIndex":-1,"isActive":true,"keyName":"trustKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTrusts","storeName":"trusts","headingsSource":""},
{"key":36,"name":"User","pluralName":"Users","dashboardIndex":3,"isActive":true,"keyName":"userKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonUsers","storeName":"users","headingsSource":""},
{"key":37,"name":"Entity","pluralName":"Entities","dashboardIndex":-1,"isActive":true,"keyName":"entityKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
{"key":38,"name":"File","pluralName":"Files","dashboardIndex":-1,"isActive":true,"keyName":"fileKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonFiles","storeName":"files","headingsSource":""},
{"key":39,"name":"Meeting","pluralName":"Meetings","dashboardIndex":-1,"isActive":true,"keyName":"meetingKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonMeetings","storeName":"meetings","headingsSource":""},
{"key":40,"name":"Functional","pluralName":"Functional","dashboardIndex":-1,"isActive":true,"keyName":"functionalKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
{"key":41,"name":"Legal","pluralName":"Legal","dashboardIndex":-1,"isActive":true,"keyName":"legalKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
{"key":42,"name":"Natural","pluralName":"Natural","dashboardIndex":-1,"isActive":true,"keyName":"naturalKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
{"key":43,"name":"AnniversaryMonth","pluralName":"AnniversaryMonths","dashboardIndex":-1,"isActive":true,"keyName":"anniversaryMonthKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"months","headingsSource":""},
{"key":44,"name":"ParentCompany","pluralName":"ParentCompanies","dashboardIndex":-1,"isActive":true,"keyName":"parentCompanyKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"companies","headingsSource":""},
{"key":45,"name":"EntityType","pluralName":"EntityTypes","dashboardIndex":-1,"isActive":true,"keyName":"entityTypeKey","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"0","headingsSource":""},
{"key":46,"name":"HoldingParentCompany","pluralName":"HoldingParentCompanies","dashboardIndex":-1,"isActive":true,"keyName":"holdingParentCompanyKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"companies","headingsSource":""},
{"key":47,"name":"Secretary","pluralName":"Secretaries","dashboardIndex":-1,"isActive":true,"keyName":"secretaryKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"secretaries","headingsSource":""},
{"key":48,"name":"Lee","pluralName":"Lee","dashboardIndex":-1,"isActive":true,"keyName":"leeKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"individuals","headingsSource":""},
{"key":49,"name":"FinancialOfficer","pluralName":"FinancialOfficers","dashboardIndex":-1,"isActive":true,"keyName":"financialOfficerKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"individuals","headingsSource":""},
{"key":50,"name":"PublicOfficer","pluralName":"PublicOfficers","dashboardIndex":-1,"isActive":true,"keyName":"publicOfficerKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"individuals","headingsSource":""},
{"key":51,"name":"AuditPartner","pluralName":"AuditPartners","dashboardIndex":-1,"isActive":true,"keyName":"auditPartnerKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"individuals","headingsSource":""},
{"key":52,"name":"FyeMonth","pluralName":"FyeMonths","dashboardIndex":-1,"isActive":true,"keyName":"fyeMonthKey","canHoldSharesIs":"false","sourceType":"redirect","jsonSource":"","storeName":"months","headingsSource":""},
{"key":53,"name":"TasksForCountry","pluralName":"TasksForCountry","dashboardIndex":-1,"isActive":true,"keyName":"tasksForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTasksForCountry","headingsSource":""},
{"key":54,"name":"TaskType","pluralName":"TaskTypes","dashboardIndex":-1,"isActive":true,"keyName":"taskTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTaskTypes","storeName":"taskTypes","headingsSource":""},
{"key":55,"name":"TasksForEntityType","pluralName":"TasksForEntityType","dashboardIndex":-1,"isActive":true,"keyName":"tasksForEntityTypeKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTasksForEntityType","headingsSource":""},
{"key":56,"name":"EntityTypesForCountry","pluralName":"EntityTypesForCountry","dashboardIndex":-1,"isActive":true,"keyName":"entityTypesForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getEntityTypesForCountry","headingsSource":""},
{"key":57,"name":"TasksForEntityTypeForCountry","pluralName":"TasksForEntityTypeForCountry","dashboardIndex":-1,"isActive":true,"keyName":"tasksForEntityTypeForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTasksForEntityTypeForCountry","headingsSource":""},
{"key":58,"name":"CoR21_1","pluralName":"","dashboardIndex":-1,"isActive":true,"keyName":"coR21_1Key","canHoldSharesIs":"false","sourceType":"","jsonSource":"","storeName":"","headingsSource":"headingsCoR21_1"},
{"key":59,"name":"YesNo","pluralName":"YesNo","dashboardIndex":-1,"isActive":true,"keyName":"yesNoKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonYesNo","storeName":"","headingsSource":"headingsYesNo"},
{"key":60,"name":"Period","pluralName":"Periods","dashboardIndex":-1,"isActive":true,"keyName":"periodKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonPeriods","storeName":"","headingsSource":"headingsPeriod"},
{"key":61,"name":"ContactPreference","pluralName":"ContactPreferences","dashboardIndex":-1,"isActive":true,"keyName":"contactPreferenceKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonContactPreferences","storeName":"","headingsSource":"headingsContactPreference"},
{"key":62,"name":"Report","pluralName":"Reports","dashboardIndex":-1,"isActive":true,"keyName":"reportKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonReports","storeName":"","headingsSource":"headingsReport"},
{"key":63,"name":"Attendance","pluralName":"Attendances","dashboardIndex":-1,"isActive":true,"keyName":"attendanceKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonAttendances","storeName":"","headingsSource":"headingsAttendance"},
{"key":64,"name":"TaskStatus","pluralName":"TaskStatuses","dashboardIndex":-1,"isActive":true,"keyName":"taskStatusKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTaskStatuses","storeName":"","headingsSource":"headingsTaskStatus"},
{"key":65,"name":"TemplateInput","pluralName":"TemplateInputs","dashboardIndex":-1,"isActive":true,"keyName":"templateInputKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTemplateInputs","storeName":"","headingsSource":""},
{"key":66,"name":"TaskTypesForCountry","pluralName":"TaskTypesForCountry","dashboardIndex":-1,"isActive":true,"keyName":"taskTypesForCountryKey","canHoldSharesIs":"false","sourceType":"function","jsonSource":"","storeName":"getTaskTypesForCountry","headingsSource":""},
{"key":67,"name":"Task","pluralName":"Tasks","dashboardIndex":-1,"isActive":true,"keyName":"taskKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonTasks","storeName":"","headingsSource":""},
{"key":68,"name":"DestinationType","pluralName":"DestinationTypes","dashboardIndex":-1,"isActive":true,"keyName":"destinationTypeKey","canHoldSharesIs":"false","sourceType":"json","jsonSource":"jsonDestinationTypes","storeName":"","headingsSource":""}]`
export enum EnumEntityType{
AccountingClass,
AccountingClassTier,
Address,
Appointment,
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
Custom,
Dashboard,
EntityStatus,
EntityStatusTier,
Individual,
IndividualForCountries,
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
EntityTypesForCountry,
TasksForEntityTypeForCountry,
CoR21_1,
YesNo,
Period,
ContactPreference,
Report,
Attendance,
TaskStatus,
TemplateInput,
TaskTypesForCountry,
Task,
DestinationType}
