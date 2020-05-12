import { check, fail, sleep } from "k6";
import http from "k6/http";

const loadTestingUrl = `${__ENV.LOAD_TESTING_BASE_URL}`;
if (loadTestingUrl === "undefined") {
  fail("ERROR: Environment variable LOAD_TESTING_BASE_URL not defined");
}

const flattenedData = {
  language: "",
  prodVersion: "",
  appVersion: "",
  "consent.consentOptions": [],
  "anonymous.anonymousOptions": ["anonymousPage.no"],
  "howdiditstart.howDidTheyReachYou": [],
  "howdiditstart.email": "",
  "howdiditstart.phone": "",
  "howdiditstart.online": "",
  "howdiditstart.application": "",
  "howdiditstart.others": "",
  "howdiditstart.howManyTimes": "",
  "howdiditstart.startDay": "",
  "howdiditstart.startMonth": "",
  "howdiditstart.startYear": "",
  "whatWasAffected.affectedOptions": [],
  "moneyLost.demandedMoney": "",
  "moneyLost.moneyTaken": "",
  "moneyLost.methodPayment": [],
  "moneyLost.transactionDay": "",
  "moneyLost.transactionMonth": "",
  "moneyLost.transactionYear": "",
  "moneyLost.methodOther": "",
  "personalInformation.typeOfInfoReq": [],
  "personalInformation.typeOfInfoObtained": [],
  "personalInformation.infoReqOther": "",
  "personalInformation.infoObtainedOther": "",
  "devicesInfo.device": "",
  "devicesInfo.account": "",
  "businessInfo.nameOfBusiness": "",
  "businessInfo.industry": "",
  "businessInfo.role": "",
  "businessInfo.numberOfEmployee": "",
  "whatHappened.whatHappened": "",
  "suspectClues.suspectClues1": "",
  "suspectClues.suspectClues2": "",
  "suspectClues.suspectClues3": "",
  "evidence.files": [],
  "evidence.fileDescriptions": [],
  "location.postalCode": "",
  "location.city": "",
  "location.province": "",
  "contactInfo.fullName": "Load Test",
  "contactInfo.email": "",
  "contactInfo.phone": "",
};

let preparedData = {};
Object.entries(flattenedData).forEach(([key, value]) => {
  preparedData[key] = JSON.stringify(value);
});

export default function () {
  var res = http.post(`${loadTestingUrl}/submit`, preparedData);
  check(res, {
    "is status 200": (r) => r.status === 200,
  });

  sleep(1);
}
