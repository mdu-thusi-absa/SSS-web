// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [],
//   imports: [CommonModule],
// })
// class DataJsonModule {}

export const jsonShareCertificates = `[
  {"key":0,"name":"Ordiary 1","suffix":"Ord","issuedDate":""},
  {"key":1,"name":"IPO","suffix":"IPO","issuedDate":""}
  ]`;

export const mapEntityHeadings = `[
    ["name","Name"],
    ["suffix","Suffix"],
  ]`;

export const jsonShareholdings = `[
  {"key":0,"name":"100","shareTypeKey":"0","individualKey":"1","companyKey":"0","shareCount":"100"},
  {"key":1,"name":"1000","shareTypeKey":"0","individualKey":"2","companyKey":"1","shareCount":"1000"},
  {"key":2,"name":"10000","shareTypeKey":"1","individualKey":"3","companyKey":"2","shareCount":"10000"},
  {"key":3,"name":"1000000","shareTypeKey":"1","individualKey":"4","companyKey":"3","shareCount":"1000000"}
  ]`;

export const jsonAddresses = `[
    {"key":0,"name":"Primary","addressTypeKey":"0","cityKey":"0","text":"5th Str 4"},
    {"key":1,"name":"Secondary","addressTypeKey":"1","cityKey":"0","text":"3th Str 3"},
    {"key":2,"name":"Primary","addressTypeKey":"0","cityKey":"3","text":"Main Ave 1"},
    {"key":3,"name":"Secondary","addressTypeKey":"1","cityKey":"4","text":"Main Ave 2"}
    ]`;

// export const jsonShareholders = `[
//   {"key":0,"name":"","shareTypeKey":"0","individualKey":"1","companyKey":"0","shareCount":"100"},
//   {"key":1,"name":"","shareTypeKey":"0","individualKey":"2","companyKey":"1","shareCount":"1000"},
//   {"key":2,"name":"","shareTypeKey":"1","individualKey":"3","companyKey":"2","shareCount":"10000"},
//   {"key":3,"name":"","shareTypeKey":"1","individualKey":"4","companyKey":"3","shareCount":"1000000"}
//   ]`;

export const jsonAppointments = `[
    {"key":0,"name":"Chairperson","companyKey":"0","individualKey":"0","startDate":"","endDate":""},
    {"key":1,"name":"Director","companyKey":"0","individualKey":"1","startDate":"","endDate":""},
    {"key":2,"name":"Director","companyKey":"1","individualKey":"3","startDate":"","endDate":""},
    {"key":3,"name":"Director","companyKey":"1","individualKey":"1","startDate":"","endDate":""},
    {"key":4,"name":"Director","companyKey":"2","individualKey":"0","startDate":"","endDate":""},
    {"key":5,"name":"Director","companyKey":"2","individualKey":"1","startDate":"","endDate":""},
    {"key":6,"name":"Director","companyKey":"3","individualKey":"3","startDate":"","endDate":""},
    {"key":7,"name":"Director","companyKey":"3","individualKey":"4","startDate":"","endDate":""},
    {"key":8,"name":"Director","companyKey":"4","individualKey":"5","startDate":"","endDate":""}
    ]`;

export const jsonShareTypes = `[
    {"key":0,"name":"Ord"},
    {"key":1,"name":"Pref"}
    ]`;

export const jsonProperties = `[
      {"key":0,"name":"Sandton HQ","addressKey":"0"},
      {"key":1,"name":"London Branch","addressKey":"1"},
      {"key":2,"name":"Cape Town office","addressKey":"3"}
      ]`;

export const jsonContactTypes = `[
  {"key":0,"name":"Company Primary Contact"},
  {"key":1,"name":"Company Secondary contact"},
  {"key":2,"name":"Company Optional contact"},
  {"key":3,"name":"Compliance Officer Contact Details"},
  {"key":4,"name":"Rick Officer Contact Details"},
  {"key":5,"name":"Legal Councel/Internal Contact details"},
  {"key":6,"name":"Legal Councel/External Contact details"},
  {"key":7,"name":"Finance Contact Details"},
  {"key":8,"name":"Group Tax Contact Details"}
  ]`;

export const jsonAddressTypes = `[
    {"key":0,"name":"Physical"},
    {"key":1,"name":"Postal"}
    ]`;

export const jsonAccountingClasses = `[
  {"key":0,"name":"Group holding company: Subsidiaries"},
  {"key":1,"name":"Joint ventures - equity accounted"},
  {"key":2,"name":"Structured entity"},
  {"key":3,"name":"Unconsolidated structured entity"},
  {"key":4,"name":"Associates - equity accounted"},
  {"key":5,"name":"Investments"},
  {"key":6,"name":"Unlisted equity investments held at fair value through profit or loss - property valuation"},
  {"key":7,"name":"Group holding company "}
  ]`;

export const jsonAccountingClassTiers = `[
  {"key":0,"name":"Tier 1"},
  {"key":1,"name":"Tier 2"},
  {"key":2,"name":"Tier 3"},
  {"key":3,"name":"Tier 4"},
  {"key":4,"name":"Tier 5"},
  {"key":5,"name":"Tier 6"}
  ]`;

export const jsonConsolidation = `[
  {"key":0,"name":"Consolidated"},
  {"key":1,"name":"Not Consolidated"}
  ]`;

export const jsonBusinessAreas = `[
  {"key":0,"name":"Head Office Function"},
  {"key":1,"name":"Retail and Business Banking (RBB)"},
  {"key":2,"name":"Corporate and Investment Bank (CIB)"},
  {"key":3,"name":"Absa Financial Services Group (AFS)"},
  {"key":4,"name":"Absa Regional Operations (ARO)"},
  {"key":5,"name":"Enterprise Function"},
  {"key":6,"name":"Head Office Function"}
  ]`;

export const jsonLegalClasses = `[
  {"key":0,"name":"Group holding company Subsidiaries"},
  {"key":1,"name":"Joint ventures"},
  {"key":2,"name":"Structured special purpose"},
  {"key":3,"name":"Structured special purpose - Trust"},
  {"key":4,"name":"Associates - significant influence but no control over its operating and financial policies"},
  {"key":5,"name":"Association agreement"},
  {"key":6,"name":"Investments"},
  {"key":7,"name":"Joint arrangement"},
  {"key":8,"name":"Group holding company "}
  ]`;

export const jsonEntityStatuses = `[
  {"key":0,"name":"Active"},
  {"key":1,"name":"Passively Trading"},
  {"key":2,"name":"Non Trading"},
  {"key":3,"name":"Dormant"},
  {"key":4,"name":"Process of deregistration"}
  ]`;

export const jsonEntityStatusTiers = `[
  {"key":0,"name":"Tier 1"},
  {"key":1,"name":"Tier 2"},
  {"key":2,"name":"Tier 3"},
  {"key":3,"name":"Tier 4"},
  {"key":4,"name":"Tier 5"},
  {"key":5,"name":"Tier 6"}
  ]`;

export const jsonBusinessDivisions = `[
  {"key":0,"name":"Retail"},
  {"key":1,"name":"Investments"},
  {"key":2,"name":"Credit"}
  ]`;

export const jsonCompanyTypes = `[
    {"key":0,"name":"Fund"},
    {"key":1,"name":"Investment"},
    {"key":2,"name":"Joint Venture"},
    {"key":3,"name":"Non-profit company"},
    {"key":4,"name":"Private company"},
    {"key":5,"name":"Public Company"},
    {"key":6,"name":"Scheme"},
    {"key":7,"name":"Trust"}
    ]`;

export const jsonIndustries = `[
  {"key":0,"name":"Banking"},
  {"key":1,"name":"Asset Management"},
  {"key":2,"name":"Property"}
  ]`;

export const jsonSecretariats = `[
  {"key":0,"name":"Internal"},
  {"key":1,"name":"PWC"}
  ]`;

export const jsonAuditors = `[
  {"key":0,"name":"KPMG"},
  {"key":1,"name":"PWC"},
  {"key":2,"name":"Deloitte"}
  ]`;

export const jsonDestinationTypes = `[
    {"key":0,"name":"View"},
    {"key":1,"name":"Email"},
    {"key":2,"name":"Download"}]`;

export const jsonContactPreferences = `[
  {"key":0,"name":"Email"},
  {"key":1,"name":"Call"},
  {"key":2,"name":"Text"}
  ]`;

export const jsonTaskTypes = `[
    {"key":0,"name":"Aquire new entity","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"false"},
    {"key":1,"name":"Aquire existing entity","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"false"},
    {"key":2,"name":"Register new entity","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"false"},
    {"key":3,"name":"Change location of company records","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":4,"name":"Change of registered address","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":5,"name":"Change of main business","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":6,"name":"Change type of company","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":7,"name":"Change an article of the MOI","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":8,"name":"Adopt new MOI","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":9,"name":"Changing the main and/or auxilliary powers of the company and its office bearers","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":10,"name":"Removing, amending or inserting ring fencing conditions into MOI","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":11,"name":"Change to company name","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":12,"name":"Change to financial year end","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":13,"name":"Director registery","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":14,"name":"Resign directors","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":15,"name":"Remove directors","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":16,"name":"Appointment, resignation and removal of auditors, audit committee members or company secretaries","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":17,"name":"Changes to company share capital Capture","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":18,"name":"Changes to company share capital Amend","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":19,"name":"Amalgamation or Merger of Companies","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":20,"name":"Deregistering/Closing","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":21,"name":"Re-instating","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":22,"name":"Amend entity details","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":23,"name":"Sale or transfer of entity","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":24,"name":"Dereg wind down entity - solvent","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":25,"name":"Dereg wind down entity - insolvent","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":26,"name":"Dereg wind down entity - court order/liquidtion","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":27,"name":"Share conversion","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":28,"name":"Amend trust deed","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":29,"name":"Amend JV agreement","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":30,"name":"Transfer of shares","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":31,"name":"Appointment of auditors","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":32,"name":"Appointment of audit committee members","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":33,"name":"Appointment of company secretaries","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":34,"name":"Resignation and removal of auditors","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":35,"name":"Resignation and removal of auditors, audit committee members","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":36,"name":"Resignation and removal of company secretaries","countryKey":202,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":37,"name":"Resignation and removal of company secretaries","countryKey":29,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"},
    {"key":38,"name":"Reports","countryKey":29,"entityTypeKey":9,"requireAuthIs":"false","isActive":"true"},
    {"key":39,"name":"Reports","countryKey":202,"entityTypeKey":9,"requireAuthIs":"false","isActive":"true"},
    {"key":40,"name":"Amend entity details","countryKey":29,"entityTypeKey":9,"requireAuthIs":"true","isActive":"true"}]`;

export const jsonTaskStatuses = `[
  {"key":0,"name":"Doing"},
  {"key":1,"name":"Done"}
  ]`;

export const jsonYesNo = `[
  {"key":1,"name":"Yes"},
  {"key":0,"name":"No"}
  ]`;

export const jsonTrusts = `[
  {"key":0,"name":"Northern Trust","suffix":"NTH"},
  {"key":1,"name":"BEE Trust","suffix":"BEET"}
  ]`;

export const jsonRegulations = `[
  {"key":0,"name":"Companies Act 71 of 2008","suffix":"FSCA"},
  {"key":1,"name":"Protection of Personal Information Act 4 of 2013","suffix":"POPIA"},
  {"key":2,"name":"Trust Property Control Act 57 of 1988","suffix":"TPCA"}
  ]`;

export const jsonRegulators = `[
    {"key":0,"name":"Financial Services Conduct Authority","suffix":"FSCA"},
    {"key":1,"name":"South Africian Reserve Bank","suffix":"SARB"},
    {"key":2,"name":"JSE","suffix":"JSE"},
    {"key":3,"name":"Securities and Exchange Commission","suffix":"SEC"}
    ]`;

export const jsonAccountingTiers = `[
  {"key":0,"name":"Top"},
  {"key":1,"name":"Middle"},
  {"key":2,"name":"Low"}
  ]`;

export const jsonUsers = `[
  {"key":0,"firstName":"Vlad","surname":"Anuchin"},
  {"key":1,"firstName":"Alex","surname":"Voznesenskey"},
  {"key":2,"firstName":"Ulrich","surname":"Kurchner"},
  {"key":3,"firstName":"Samantha","surname":"Rajagopaul"},
  {"key":4,"firstName":"Lourika","surname":"Stander"}
  ]`;

export const jsonCities = `[
    {"key":0,"countryKey":29,"name":"Gaborone"},
    {"key":1,"countryKey":83,"name":"Accra"},
    {"key":2,"countryKey":111,"name":"Nairobi"},
    {"key":3,"countryKey":135,"name":"Port Louis"},
    {"key":4,"countryKey":144,"name":"Maputo"},
    {"key":5,"countryKey":146,"name":"Windhoek"},
    {"key":6,"countryKey":154,"name":"Lagos"},
    {"key":7,"countryKey":190,"name":"Victoria"},
    {"key":8,"countryKey":202,"name":"Johannesburg"},
    {"key":9,"countryKey":214,"name":"Dar es Salaam"},
    {"key":10,"countryKey":226,"name":"Kampala"},
    {"key":11,"countryKey":229,"name":"London"},
    {"key":12,"countryKey":230,"name":"New York City"},
    {"key":13,"countryKey":242,"name":"Lusaka"},
    {"key":14,"countryKey":29,"name":"Francistown"},
    {"key":15,"countryKey":83,"name":"Kumasi"},
    {"key":16,"countryKey":111,"name":"Mombasa"},
    {"key":17,"countryKey":135,"name":"Beau Bassin-Rose Hill"},
    {"key":18,"countryKey":144,"name":"Matola"},
    {"key":19,"countryKey":146,"name":"Rundu"},
    {"key":20,"countryKey":154,"name":"Kano"},
    {"key":21,"countryKey":190,"name":"Anse Boileau"},
    {"key":22,"countryKey":202,"name":"Cape Town"},
    {"key":23,"countryKey":214,"name":"Mwanza"},
    {"key":24,"countryKey":226,"name":"Nansana"},
    {"key":25,"countryKey":229,"name":"Birmingham"},
    {"key":26,"countryKey":230,"name":"Los Angeles"},
    {"key":27,"countryKey":242,"name":"Kitwe"}
    ]`;

export const jsonPortfolios = `[
  {"key":0,"name":"- All -"},
  {"key":13,"name":"Botswana"},
  {"key":1,"name":"Ghana"}, 
  {"key":2,"name":"Kenya"}, 
  {"key":3,"name":"Mauritius"}, 
  {"key":4,"name":"Mozambique"}, 
  {"key":5,"name":"Namibia"}, 
  {"key":6,"name":"Nigeria"}, 
  {"key":7,"name":"Seychelles"}, 
  {"key":8,"name":"South Africa"}, 
  {"key":9,"name":"Tanzania"}, 
  {"key":10,"name":"Uganda"}, 
  {"key":13,"name":"Zambia"}
]`;

export const jsonCountriesWithTasks = `[
  {"key":202,"name":"South Africa","suffix":""},
  {"key":29,"name":"Botswana","suffix":""},
  {"key":83,"name":"Ghana","suffix":""},
  {"key":111,"name":"Kenya","suffix":""},
  {"key":135,"name":"Mauritius","suffix":""},
  {"key":144,"name":"Mozambique","suffix":""},
  {"key":146,"name":"Namibia","suffix":""},
  {"key":154,"name":"Nigeria","suffix":""},
  {"key":190,"name":"Seychelles","suffix":""},
  {"key":214,"name":"Tanzania","suffix":""},
  {"key":226,"name":"Uganda","suffix":""},
  {"key":242,"name":"Zambia","suffix":""}
]`;

export const jsonCountries = `[
  {"key":29,"name":"Botswana","suffix":""},
  {"key":83,"name":"Ghana","suffix":""},
  {"key":111,"name":"Kenya","suffix":""},
  {"key":135,"name":"Mauritius","suffix":""},
  {"key":144,"name":"Mozambique","suffix":""},
  {"key":146,"name":"Namibia","suffix":""},
  {"key":154,"name":"Nigeria","suffix":""},
  {"key":190,"name":"Seychelles","suffix":""},
  {"key":202,"name":"South Africa","suffix":""},
  {"key":214,"name":"Tanzania","suffix":""},
  {"key":226,"name":"Uganda","suffix":""},
  {"key":229,"name":"United Kingdom of Great Britain","suffix":""},
  {"key":230,"name":"United States of America","suffix":""},
  {"key":242,"name":"Zambia","suffix":""}
]`;

export const jsonFiles = `[
  {"key":0,"fileName":"moi.pdf","name":"MOI","description":""},
  {"key":1,"fileName":"res.pdf","name":"Resolution 1","description":"second file"},
  {"key":2,"fileName":"res.pdf","name":"Resolution 2","description":"third file"},
  {"key":3,"fileName":"moi.pdf","name":"MOI 1","description":""},
  {"key":4,"fileName":"res.pdf","name":"Resolution 3","description":"second file"},
  {"key":5,"fileName":"res.pdf","name":"Resolution 4","description":"third file"},
  {"key":6,"fileName":"moi.pdf","name":"MOI 2","description":""}
]`;

export const jsonTemplates = `[
  {"key":0,"name":"CoR 9.1","inputsKeys":[0,3]},
  {"key":1,"name":"CoR 15.2","inputsKeys":[1,3]},
  {"key":2,"name":"CoR 21.1","inputsKeys":[1,3]},
  {"key":3,"name":"CoR 22","inputsKeys":[1,3]}]`;

export const jsonTemplateInputs = `[
    {"key":0,"name":"effectiveDate","heading":"Effective Date"},
    {"key":1,"name":"businessPurposeDescription","heading":"Business purpose"},
    {"key":2,"name":"newAddress","heading":"New Address"},
    {"key":3,"name":"individualKey","heading":"Signatory"}]`;

export const jsonAttendances = `[
  {"key":0,"meetingKey":0,"individualKey":0},
  {"key":1,"meetingKey":0,"individualKey":1},
  {"key":2,"meetingKey":1,"individualKey":2},
  {"key":3,"meetingKey":1,"individualKey":3},
  {"key":4,"meetingKey":2,"individualKey":4},
  {"key":5,"meetingKey":2,"individualKey":5},
  {"key":6,"meetingKey":3,"individualKey":6},
  {"key":7,"meetingKey":3,"individualKey":7},
  {"key":8,"meetingKey":4,"individualKey":8},
  {"key":9,"meetingKey":4,"individualKey":9},
  {"key":10,"meetingKey":5,"individualKey":10},
  {"key":11,"meetingKey":5,"individualKey":11},
  {"key":12,"meetingKey":6,"individualKey":12},
  {"key":13,"meetingKey":6,"individualKey":13},
  {"key":14,"meetingKey":7,"individualKey":14},
  {"key":15,"meetingKey":7,"individualKey":15},
  {"key":16,"meetingKey":8,"individualKey":16},
  {"key":17,"meetingKey":8,"individualKey":17},
  {"key":18,"meetingKey":9,"individualKey":18},
  {"key":19,"meetingKey":9,"individualKey":19},
  {"key":20,"meetingKey":10,"individualKey":20}]`;

export const jsonMeetings = `[
    {"key":0,"name":"Subject 1","where":"Here","start":"2020-12-01  15:06","end":"2020-12-01  16:06","fileKeys":[],"notes":""},
    {"key":1,"name":"Subject 2","where":"There","start":"2021-03-14  16:24","end":"2021-03-14  17:24","fileKeys":[],"notes":""},
    {"key":2,"name":"Subject 3","where":"Over there","start":"2021-02-25  06:15","end":"2021-02-25  07:15","fileKeys":[],"notes":""},
    {"key":3,"name":"Subject 4","where":"Over here","start":"2021-03-19  00:56","end":"2021-03-19  01:56","fileKeys":[],"notes":""},
    {"key":4,"name":"Subject 5","where":"Somewhere","start":"2020-10-02  03:22","end":"2020-10-02  04:22","fileKeys":[],"notes":""},
    {"key":5,"name":"Subject 6","where":"Here","start":"2020-11-01  22:14","end":"2020-11-01  23:14","fileKeys":[],"notes":""},
    {"key":6,"name":"Subject 7","where":"There","start":"2020-12-12  16:52","end":"2020-12-12  17:52","fileKeys":[],"notes":""},
    {"key":7,"name":"Subject 8","where":"Over there","start":"2020-11-24  08:31","end":"2020-11-24  09:31","fileKeys":[],"notes":""},
    {"key":8,"name":"Subject 9","where":"Over here","start":"2021-08-25  05:48","end":"2021-08-25  06:48","fileKeys":[],"notes":""},
    {"key":9,"name":"Subject 10","where":"Somewhere","start":"2020-12-31  16:00","end":"2020-12-31  17:00","fileKeys":[],"notes":""},
    {"key":10,"name":"Subject 11","where":"Here","start":"2021-06-12  15:38","end":"2021-06-12  16:38","fileKeys":[],"notes":""},
    {"key":11,"name":"Subject 12","where":"There","start":"2021-06-18  16:52","end":"2021-06-18  17:52","fileKeys":[],"notes":""},
    {"key":12,"name":"Subject 13","where":"Over there","start":"2020-11-06  06:59","end":"2020-11-06  07:59","fileKeys":[],"notes":""},
    {"key":13,"name":"Subject 14","where":"Over here","start":"2021-04-09  20:07","end":"2021-04-09  21:07","fileKeys":[],"notes":""},
    {"key":14,"name":"Subject 15","where":"Somewhere","start":"2021-03-12  02:22","end":"2021-03-12  03:22","fileKeys":[],"notes":""},
    {"key":15,"name":"Subject 16","where":"Here","start":"2021-03-17  22:30","end":"2021-03-17  23:30","fileKeys":[],"notes":""},
    {"key":16,"name":"Subject 17","where":"There","start":"2021-08-03  05:23","end":"2021-08-03  06:23","fileKeys":[],"notes":""},
    {"key":17,"name":"Subject 18","where":"Over there","start":"2021-08-28  06:07","end":"2021-08-28  07:07","fileKeys":[],"notes":""},
    {"key":18,"name":"Subject 19","where":"Over here","start":"2021-03-23  17:28","end":"2021-03-23  18:28","fileKeys":[],"notes":""},
    {"key":19,"name":"Subject 20","where":"Somewhere","start":"2020-11-28  00:11","end":"2020-11-28  01:11","fileKeys":[],"notes":""},
    {"key":20,"name":"Subject 21","where":"Over there","start":"2020-12-09  15:09","end":"2020-12-09  16:09","fileKeys":[],"notes":""}]`;

export const jsonTasks = `[
      {"key":0,"name":"Task 1","who":"","when":"","workFlowObject":""},
      {"key":1,"name":"Task 2","who":"","when":"","workFlowObject":""},
      {"key":2,"name":"Task 3","who":"","when":"","workFlowObject":""},
      {"key":3,"name":"Task 4","who":"","when":"","workFlowObject":""},
      {"key":4,"name":"Task 5","who":"","when":"","workFlowObject":""},
      {"key":5,"name":"Task 6","who":"","when":"","workFlowObject":""},
      {"key":6,"name":"Task 7","who":"","when":"","workFlowObject":""},
      {"key":7,"name":"Task 8","who":"","when":"","workFlowObject":""},
      {"key":8,"name":"Task 9","who":"","when":"","workFlowObject":""},
      {"key":9,"name":"Task 10","who":"","when":"","workFlowObject":""},
      {"key":10,"name":"Task 11","who":"","when":"","workFlowObject":""},
      {"key":11,"name":"Task 12","who":"","when":"","workFlowObject":""},
      {"key":12,"name":"Task 13","who":"","when":"","workFlowObject":""},
      {"key":13,"name":"Task 14","who":"","when":"","workFlowObject":""},
      {"key":14,"name":"Task 15","who":"","when":"","workFlowObject":""},
      {"key":15,"name":"Task 16","who":"","when":"","workFlowObject":""},
      {"key":16,"name":"Task 17","who":"","when":"","workFlowObject":""},
      {"key":17,"name":"Task 18","who":"","when":"","workFlowObject":""}]`;

export const jsonReports = `[
        {"key":0,"name":"Organogram"},
        {"key":1,"name":"Company Registry"},
        {"key":2,"name":"Directors Registry"},
        {"key":3,"name":"Audit"},
        {"key":4,"name":"Report 5"},
        {"key":5,"name":"Report 6"},
        {"key":6,"name":"Report 7"},
        {"key":7,"name":"Report 8"},
        {"key":8,"name":"Report 9"},
        {"key":9,"name":"Report 10"},
        {"key":10,"name":"Report 11"},
        {"key":11,"name":"Report 12"},
        {"key":12,"name":"Report 13"},
        {"key":13,"name":"Report 14"},
        {"key":14,"name":"Report 15"},
        {"key":15,"name":"Report 16"},
        {"key":16,"name":"Report 17"},
        {"key":17,"name":"Report 18"}]`;

export const jsonCompanyStatuses = `[
  {"key":0,"name":"Active"},
  {"key":1,"name":"Nontrading"},
  {"key":2,"name":"Dormant, passively trading"},
  {"key":3,"name":"Deregistered"}
]`;

export const jsonDivisions = `[
  {"key":0,"name":"Corporate Investment Banking"},
  {"key":1,"name":"Retail and Business Banking"},
  {"key":2,"name":"Enterprise function"},
  {"key":3,"name":"Absa Regional Operations"},
  {"key":4,"name":"AFS Group"}
]`;

export const jsonMonths = `[
  {"key":0,"name":"01"},
  {"key":1,"name":"02"},
  {"key":2,"name":"03"},
  {"key":3,"name":"04"},
  {"key":4,"name":"05"},
  {"key":5,"name":"06"},
  {"key":6,"name":"07"},
  {"key":7,"name":"08"},
  {"key":8,"name":"09"},
  {"key":9,"name":"10"},
  {"key":10,"name":"11"},
  {"key":11,"name":"12"}
]`;

export const jsonCapacities = `[
  {"key":0,"name":"Executive Director"},
  {"key":1,"name":"Non-Executive Diretor"},
  {"key":2,"name":"Secretary"},
  {"key":3,"name":"Public Officer"}
  ]`;

export const jsonPeriods = `[
  {"key":0,"name":"Daily"},
  {"key":1,"name":"Weekly"},
  {"key":2,"name":"Monthly"},
  {"key":3,"name":"Quarterly"},
  {"key":4,"name":"Annualy"}
]`;

export const jsonIndividuals = `[
  {"key":0,"countryKey":144,"surname":"AEGIDIUS","firstName":"FREDERICK","suffix":"Europe North","tasksCount":3,"isActive":true},
  {"key":1,"countryKey":230,"surname":"ANDERSEN","firstName":"RASMUS","suffix":"Africa Middle East","tasksCount":1,"isActive":true},
  {"key":2,"countryKey":242,"surname":"ANDERSON","firstName":"CODY","suffix":"West Coast","tasksCount":1,"isActive":false},
  {"key":3,"countryKey":135,"surname":"ANDERSON","firstName":"ALEX","suffix":"Central East","tasksCount":3,"isActive":true},
  {"key":4,"countryKey":242,"surname":"BRIDGES","firstName":"JOSH","suffix":"West Coast","tasksCount":1,"isActive":true},
  {"key":5,"countryKey":154,"surname":"CARON","firstName":"ALEXANDRE","suffix":"Canada East","tasksCount":2,"isActive":true},
  {"key":6,"countryKey":229,"surname":"CHALFUN","firstName":"PABLO","suffix":"South America","tasksCount":3,"isActive":true},
  {"key":7,"countryKey":135,"surname":"COLLINS","firstName":"LOGAN","suffix":"South Central","tasksCount":2,"isActive":true},
  {"key":8,"countryKey":230,"surname":"COLTEY","firstName":"JOHN","suffix":"South East","tasksCount":0,"isActive":true},
  {"key":9,"countryKey":135,"surname":"DUNNE","firstName":"ROYCE","suffix":"Australasia","tasksCount":4,"isActive":true},
  {"key":10,"countryKey":214,"surname":"ENDERTON","firstName":"JARED","suffix":"South West","tasksCount":1,"isActive":true},
  {"key":11,"countryKey":230,"surname":"ESSLINGER","firstName":"LUKAS","suffix":"Europe South","tasksCount":2,"isActive":true},
  {"key":12,"countryKey":83,"surname":"FIKOWSKI","firstName":"BRENT","suffix":"Canada West","tasksCount":4,"isActive":true},
  {"key":13,"countryKey":229,"surname":"FRASER","firstName":"MATHEW","suffix":"Central East","tasksCount":3,"isActive":false},
  {"key":14,"countryKey":154,"surname":"GAMBOA","firstName":"ROGELIO","suffix":"South Central","tasksCount":3,"isActive":true},
  {"key":15,"countryKey":83,"surname":"GEORGES","firstName":"WILLY","suffix":"Europe South","tasksCount":4,"isActive":true},
  {"key":16,"countryKey":83,"surname":"GROVE","firstName":"ZEKE","suffix":"Australasia","tasksCount":4,"isActive":true},
  {"key":17,"countryKey":190,"surname":"GUÐMUNDSSON","firstName":"BJÖRGVIN KARL","suffix":"Europe North","tasksCount":0,"isActive":true},
  {"key":18,"countryKey":111,"surname":"HELBIG","firstName":"ETHAN","suffix":"Mid Atlantic","tasksCount":0,"isActive":true},
  {"key":19,"countryKey":202,"surname":"HÖGBERG","firstName":"LUKAS","suffix":"Europe North","tasksCount":0,"isActive":true},
  {"key":20,"countryKey":190,"surname":"JONES","firstName":"MARQUAN","suffix":"North East","tasksCount":0,"isActive":true},
  {"key":21,"countryKey":190,"surname":"KENNEY","firstName":"CRAIG","suffix":"North East","tasksCount":3,"isActive":true},
  {"key":22,"countryKey":135,"surname":"KHRENNIKOV","firstName":"ROMAN","suffix":"Europe North","tasksCount":1,"isActive":true},
  {"key":23,"countryKey":202,"surname":"LINDER-LEIGHTON","firstName":"DEAN","suffix":"Australasia","tasksCount":2,"isActive":true},
  {"key":24,"countryKey":146,"surname":"LUCKETT","firstName":"BRANDON","suffix":"South Central","tasksCount":1,"isActive":true},
  {"key":25,"countryKey":146,"surname":"MUNDWILER","firstName":"ADRIAN","suffix":"Europe Central","tasksCount":5,"isActive":true},
  {"key":26,"countryKey":242,"surname":"NEWBURY","firstName":"JAMES","suffix":"Australasia","tasksCount":2,"isActive":true},
  {"key":27,"countryKey":229,"surname":"OHLSEN","firstName":"NOAH","suffix":"South East","tasksCount":2,"isActive":true},
  {"key":28,"countryKey":144,"surname":"PANCHIK","firstName":"SCOTT","suffix":"Central East","tasksCount":4,"isActive":false},
  {"key":29,"countryKey":135,"surname":"PANCHIK","firstName":"SAXON","suffix":"Central East","tasksCount":4,"isActive":true},
  {"key":30,"countryKey":111,"surname":"PAULSON","firstName":"TIM","suffix":"North East","tasksCount":4,"isActive":true},
  {"key":31,"countryKey":202,"surname":"PORTER","firstName":"KHAN","suffix":"Australasia","tasksCount":4,"isActive":true},
  {"key":32,"countryKey":154,"surname":"SAGER","firstName":"COLE","suffix":"West Coast","tasksCount":2,"isActive":false},
  {"key":33,"countryKey":226,"surname":"SIMMONDS","firstName":"ELLIOT","suffix":"Africa Middle East","tasksCount":2,"isActive":true},
  {"key":34,"countryKey":214,"surname":"SMITH","firstName":"BEN","suffix":"Mid Atlantic","tasksCount":0,"isActive":true},
  {"key":35,"countryKey":226,"surname":"SMITH","firstName":"ALEC","suffix":"Mid Atlantic","tasksCount":4,"isActive":true},
  {"key":36,"countryKey":144,"surname":"STEVENSON","firstName":"MITCHEL","suffix":"West Coast","tasksCount":4,"isActive":true},
  {"key":37,"countryKey":202,"surname":"SWEENEY","firstName":"SEAN","suffix":"South West","tasksCount":1,"isActive":true},
  {"key":38,"countryKey":190,"surname":"URANKAR","firstName":"NICHOLAS","suffix":"Central East","tasksCount":5,"isActive":true},
  {"key":39,"countryKey":230,"surname":"VELLNER","firstName":"PATRICK","suffix":"Canada East","tasksCount":1,"isActive":false}
  ]`;

export const jsonCompanies = `[
    {"key":0,"name":"Aaron's, Inc.","isActive":true,"countryKey":214,"suffix":""},
    {"key":1,"name":"Applied Optoelectronics, Inc.","isActive":true,"countryKey":29,"suffix":""},
    {"key":2,"name":"AAON, Inc.","isActive":true,"countryKey":202,"suffix":""},
    {"key":3,"name":"American Assets Trust, Inc.","isActive":true,"countryKey":146,"suffix":""},
    {"key":4,"name":"Atlas Air Worldwide Holdings, Inc.","isActive":true,"countryKey":202,"suffix":""},
    {"key":5,"name":"Axon Enterprise, Inc.","isActive":true,"countryKey":230,"suffix":""},
    {"key":6,"name":"Ameris Bancorp","isActive":true,"countryKey":226,"suffix":""},
    {"key":7,"name":"Abeona Therapeutics, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":8,"name":"Asbury Automotive Group, Inc.","isActive":false,"countryKey":146,"suffix":""},
    {"key":9,"name":"ABM Industries, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":10,"name":"Allegiance Bancshares, Inc. (Texas)","isActive":true,"countryKey":144,"suffix":""},
    {"key":11,"name":"Associated Capital Group, Inc.","isActive":false,"countryKey":226,"suffix":""},
    {"key":12,"name":"Arcosa, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":13,"name":"ACADIA Pharmaceuticals, Inc.","isActive":true,"countryKey":202,"suffix":""},
    {"key":14,"name":"Atlantic Capital Bancshares, Inc.","isActive":false,"countryKey":144,"suffix":""},
    {"key":15,"name":"ACCO Brands Corp.","isActive":true,"countryKey":154,"suffix":""},
    {"key":16,"name":"Acer Therapeutics, Inc.","isActive":true,"countryKey":83,"suffix":""},
    {"key":17,"name":"Achillion Pharmaceuticals, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":18,"name":"Acacia Communications, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":19,"name":"ACI Worldwide, Inc.","isActive":true,"countryKey":214,"suffix":""},
    {"key":20,"name":"Axcelis Technologies, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":21,"name":"ACNB Corp.","isActive":true,"countryKey":144,"suffix":""},
    {"key":22,"name":"Acorda Therapeutics, Inc.","isActive":true,"countryKey":144,"suffix":""},
    {"key":23,"name":"Ares Commercial Real Estate Corp.","isActive":true,"countryKey":226,"suffix":""},
    {"key":24,"name":"Aclaris Therapeutics, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":25,"name":"AcelRx Pharmaceuticals, Inc.","isActive":true,"countryKey":29,"suffix":""},
    {"key":26,"name":"Acacia Research Corp.","isActive":true,"countryKey":83,"suffix":""},
    {"key":27,"name":"Agree Realty Corp.","isActive":true,"countryKey":83,"suffix":""},
    {"key":28,"name":"Advanced Emissions Solutions, Inc.","isActive":false,"countryKey":226,"suffix":""},
    {"key":29,"name":"ADMA Biologics, Inc.","isActive":true,"countryKey":202,"suffix":""},
    {"key":30,"name":"Adamas Pharmaceuticals, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":31,"name":"Adient plc","isActive":true,"countryKey":226,"suffix":""},
    {"key":32,"name":"Aduro BioTech, Inc.","isActive":true,"countryKey":144,"suffix":""},
    {"key":33,"name":"Advanced Disposal Services, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":34,"name":"ADTRAN, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":35,"name":"Addus HomeCare Corp.","isActive":true,"countryKey":83,"suffix":""},
    {"key":36,"name":"Adverum Biotechnologies, Inc.","isActive":true,"countryKey":83,"suffix":""},
    {"key":37,"name":"Aegion Corp.","isActive":true,"countryKey":226,"suffix":""},
    {"key":38,"name":"Advanced Energy Industries, Inc.","isActive":true,"countryKey":29,"suffix":""},
    {"key":39,"name":"American Equity Investment Life Holding Co.","isActive":true,"countryKey":146,"suffix":""},
    {"key":40,"name":"American Eagle Outfitters, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":41,"name":"Aerie Pharmaceuticals, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":42,"name":"Armstrong Flooring, Inc.","isActive":true,"countryKey":135,"suffix":""},
    {"key":43,"name":"American Finance Trust, Inc.","isActive":true,"countryKey":29,"suffix":""},
    {"key":44,"name":"Affimed NV","isActive":false,"countryKey":229,"suffix":""},
    {"key":45,"name":"AgeX Therapeutics, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":46,"name":"Agenus, Inc.","isActive":true,"countryKey":146,"suffix":""},
    {"key":47,"name":"Aeglea Biotherapeutics, Inc.","isActive":true,"countryKey":190,"suffix":""},
    {"key":48,"name":"Federal Agricultural Mortgage Corp.","isActive":true,"countryKey":214,"suffix":""},
    {"key":49,"name":"PlayAGS, Inc.","isActive":true,"countryKey":202,"suffix":""},
    {"key":50,"name":"Argan, Inc.","isActive":true,"countryKey":135,"suffix":""},
    {"key":51,"name":"Agilysys, Inc.","isActive":true,"countryKey":29,"suffix":""},
    {"key":52,"name":"Armada Hoffler Properties, Inc.","isActive":true,"countryKey":83,"suffix":""},
    {"key":53,"name":"Ashford Hospitality Trust, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":54,"name":"Arlington Asset Investment Corp.","isActive":true,"countryKey":111,"suffix":""},
    {"key":55,"name":"Altra Industrial Motion Corp.","isActive":true,"countryKey":135,"suffix":""},
    {"key":56,"name":"Aimmune Therapeutics, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":57,"name":"Albany International Corp.","isActive":true,"countryKey":214,"suffix":""},
    {"key":58,"name":"AAR Corp.","isActive":true,"countryKey":111,"suffix":""},
    {"key":59,"name":"Airgain, Inc.","isActive":true,"countryKey":214,"suffix":""},
    {"key":60,"name":"Applied Industrial Technologies, Inc.","isActive":true,"countryKey":144,"suffix":""},
    {"key":61,"name":"Aerojet Rocketdyne Holdings, Inc.","isActive":true,"countryKey":135,"suffix":""},
    {"key":62,"name":"Great Ajax Corp.","isActive":true,"countryKey":83,"suffix":""},
    {"key":63,"name":"Akebia Therapeutics, Inc.","isActive":true,"countryKey":190,"suffix":""},
    {"key":64,"name":"Akcea Therapeutics, Inc.","isActive":true,"countryKey":83,"suffix":""},
    {"key":65,"name":"Acadia Realty Trust","isActive":false,"countryKey":202,"suffix":""},
    {"key":66,"name":"Akero Therapeutics, Inc.","isActive":true,"countryKey":190,"suffix":""},
    {"key":67,"name":"Akorn, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":68,"name":"AK Steel Holding Corp.","isActive":true,"countryKey":144,"suffix":""},
    {"key":69,"name":"Akoustis Technologies, Inc.","isActive":true,"countryKey":230,"suffix":""},
    {"key":70,"name":"Albireo Pharma, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":71,"name":"Alico, Inc.","isActive":false,"countryKey":190,"suffix":""},
    {"key":72,"name":"Alder Biopharmaceuticals, Inc.","isActive":false,"countryKey":214,"suffix":""},
    {"key":73,"name":"Aldeyra Therapeutics, Inc.","isActive":true,"countryKey":111,"suffix":""},
    {"key":74,"name":"ALLETE, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":75,"name":"Alector, Inc.","isActive":false,"countryKey":202,"suffix":""},
    {"key":76,"name":"Alexander & Baldwin, Inc.","isActive":true,"countryKey":29,"suffix":""},
    {"key":77,"name":"Alamo Group, Inc.","isActive":true,"countryKey":83,"suffix":""},
    {"key":78,"name":"Allegiant Travel Co.","isActive":true,"countryKey":226,"suffix":""},
    {"key":79,"name":"Allakos, Inc.","isActive":false,"countryKey":190,"suffix":""},
    {"key":80,"name":"Allogene Therapeutics, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":81,"name":"AstroNova, Inc.","isActive":true,"countryKey":135,"suffix":""},
    {"key":82,"name":"Alarm.com Holdings, Inc.","isActive":true,"countryKey":135,"suffix":""},
    {"key":83,"name":"Altus Midstream Co.","isActive":true,"countryKey":146,"suffix":""},
    {"key":84,"name":"Altair Engineering, Inc.","isActive":true,"countryKey":190,"suffix":""},
    {"key":85,"name":"Alexander's, Inc.","isActive":false,"countryKey":230,"suffix":""},
    {"key":86,"name":"AMAG Pharmaceuticals, Inc.","isActive":true,"countryKey":144,"suffix":""},
    {"key":87,"name":"Amalgamated Bank","isActive":false,"countryKey":146,"suffix":""},
    {"key":88,"name":"Ambarella, Inc.","isActive":true,"countryKey":154,"suffix":""},
    {"key":89,"name":"Ambac Financial Group, Inc.","isActive":true,"countryKey":111,"suffix":""},
    {"key":90,"name":"AMC Entertainment Holdings, Inc.","isActive":true,"countryKey":230,"suffix":""},
    {"key":91,"name":"Amedisys, Inc.","isActive":true,"countryKey":226,"suffix":""},
    {"key":92,"name":"Apollo Medical Holdings, Inc.","isActive":true,"countryKey":230,"suffix":""},
    {"key":93,"name":"AssetMark Financial Holdings, Inc.","isActive":true,"countryKey":83,"suffix":""},
    {"key":94,"name":"Amkor Technology, Inc.","isActive":true,"countryKey":229,"suffix":""},
    {"key":95,"name":"AMN Healthcare Services, Inc.","isActive":true,"countryKey":146,"suffix":""},
    {"key":96,"name":"American National Bankshares, Inc. (Virginia)","isActive":true,"countryKey":226,"suffix":""},
    {"key":97,"name":"Allied Motion Technologies, Inc.","isActive":true,"countryKey":111,"suffix":""},
    {"key":98,"name":"Amphastar Pharmaceuticals, Inc.","isActive":true,"countryKey":111,"suffix":""},
    {"key":99,"name":"Ameresco, Inc.","isActive":true,"countryKey":146,"suffix":""},
    {"key":100,"name":"Amyris, Inc.","isActive":true,"countryKey":214,"suffix":""},
    {"key":101,"name":"Amneal Pharmaceuticals, Inc.","isActive":true,"countryKey":242,"suffix":""},
    {"key":102,"name":"American Superconductor Corp.","isActive":true,"countryKey":83,"suffix":""},
    {"key":103,"name":"AMERISAFE, Inc.","isActive":true,"countryKey":146,"suffix":""}]`;

export const jsonContacts = `[
    {"key":0,"name":"Good contact","individualKey":"0","onLeaveIs":false,"comingBackDate":"","contactPreferenceKey":0,"email":"a@b.c","cellphone":"1234","landline":"","note":"Nice"},
    {"key":1,"name":"Not good","individualKey":"1","onLeaveIs":false,"comingBackDate":"","contactPreferenceKey":0,"email":"b@c.d","cellphone":"","landline":"5678","note":"Reliable"},
    {"key":2,"name":"Last Resord","individualKey":"2","onLeaveIs":false,"comingBackDate":"","contactPreferenceKey":0,"email":"e@d.f","cellphone":"","landline":"","note":"Always there"}
    ]`;
