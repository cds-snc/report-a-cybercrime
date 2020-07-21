const formDefaults = {
  language: '',
  prodVersion: '',
  appVersion: '',
  consent: { consentOptions: [] },
  anonymous: { anonymousOptions: [] },
  howdiditstart: {
    email: {
      checked: false,
      description: '',
    },
    phone: {
      checked: false,
      description: '',
    },
    web: {
      checked: false,
      description: '',
    },
    software: {
      checked: false,
      description: '',
    },
    other: {
      checked: false,
      description: '',
    },
  },
  whenDidItHappen: {
    incidentFrequency: '',
    startDay: '',
    startMonth: '',
    startYear: '',
    endDay: '',
    endMonth: '',
    endYear: '',
    happenedOnceDay: '',
    happenedOnceMonth: '',
    happenedOnceYear: '',
    description: '',
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
