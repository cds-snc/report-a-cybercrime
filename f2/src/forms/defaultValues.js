const formDefaults = {
  language: '',
  prodVersion: '',
  appVersion: '',
  consent: { consentOptions: [] },
  anonymous: { anonymousOptions: ['anonymousPage.no'] },
  howdiditstart: {
    howDidTheyReachYou: [],
    email: '',
    phone: '',
    online: '',
    application: '',
    others: '',
    howManyTimes: '',
    startDay: '',
    startMonth: '',
    startYear: '',
  },
  whatWasAffected: {
    affectedOptions: [],
  },
  moneyLost: {
    demandedMoney: '',
    moneyTaken: '',
    methodPayment: [],
    transactionDay: '',
    transactionMonth: '',
    transactionYear: '',
    methodOther: '',
  },
  personalInformation: {
    typeOfInfoReq: [],
    typeOfInfoObtained: [],
    infoReqOther: '',
    infoObtainedOther: '',
  },
  devicesInfo: { device: '', account: '' },
  businessInfo: {
    nameOfBusiness: '',
    industry: '',
    role: '',
    numberOfEmployee: '',
  },
  whatHappened: { whatHappened: '' },

  suspectClues: {
    suspectClues1: '',
    suspectClues2: '',
    suspectClues3: '',
  },
  evidence: {
    files: [],
    fileDescriptions: [],
  },
  location: { postalCode: '', city: '', province: '' },
  contactInfo: { fullName: '', email: '', phone: '' },
}

module.exports = { formDefaults }
