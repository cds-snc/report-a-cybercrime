const wrapData = (fields) => {
  console.log(Object.entries(fields));

  return (
    Object.entries(fields)
      .map(
        ([key, value]) =>
          `------WebKitFormBoundaryRae6SV5A0TQklBAB\\r\\nContent-Disposition: form-data; name="${key}"\\r\\n\\r\\n"${value}"\\r\\n`
      )
      .join(" ") + `------WebKitFormBoundaryRae6SV5A0TQklBAB--\\r\\n`
  );
};

url = "http://localhost:3000/submit";

headers = `\
-H 'Connection: keep-alive' \
-H 'Cache-Control: max-age=0' \
-H 'Sec-Fetch-Dest: empty' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36' \
-H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryRae6SV5A0TQklBAB' \
-H 'Accept: */*' \
-H 'Origin: http://localhost:3000' \
-H 'Sec-Fetch-Site: same-origin' \
-H 'Sec-Fetch-Mode: cors' \
-H 'Referer: http://localhost:3000/no-referrer' \
-H 'Accept-Language: en-US,en;q=0.9'\
`;

data = wrapData({ "anonymous.anonymous": "anonymousPage.no" });

console.log(`curl ${url} ${headers} --data-binary $'${data}' --compressed`);

// curl 'http://localhost:3000/submit' \
// -H 'Connection: keep-alive' \
// -H 'Cache-Control: max-age=0' \
// -H 'Sec-Fetch-Dest: empty' \
// -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36' \
// -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryRae6SV5A0TQklBAB' \
// -H 'Accept: */*' \
// -H 'Origin: http://localhost:3000' \
// -H 'Sec-Fetch-Site: same-origin' \
// -H 'Sec-Fetch-Mode: cors' \
// -H 'Referer: http://localhost:3000/no-referrer' \
// -H 'Accept-Language: en-US,en;q=0.9'\
// \
// --data-binary $'
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="consent.consentOptions"\r\n\r\n["privacyConsentInfoForm.yes"]\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="anonymous.anonymous"\r\n\r\n"anonymousPage.no"\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.howDidTheyReachYou"\r\n\r\n[]\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.application"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.others"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.startDay"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.startMonth"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.startYear"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.howManyTimes"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.email"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.phone"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.online"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="whatWasAffected.affectedOptions"\r\n\r\n["whatWasAffectedForm.other"]\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="whatWasAffected.optionOther"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="whatHappened.whatHappened"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="suspectClues.suspectClues1"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="suspectClues.suspectClues2"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="suspectClues.suspectClues3"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="evidence.files"\r\n\r\n[]\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="evidence.fileDescriptions"\r\n\r\n[]\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="location.postalCode"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="contactInfo.fullName"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="contactInfo.email"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="contactInfo.phone"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="appVersion"\r\n\r\n"no version"\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.demandedMoney"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.moneyTaken"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.methodPayment"\r\n\r\n[]\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.transactionDay"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.transactionMonth"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.transactionYear"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.tellUsMore"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="personalInformation.typeOfInfoReq"\r\n\r\n[]\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="personalInformation.infoReqOther"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="personalInformation.typeOfInfoObtained"\r\n\r\n[]\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="personalInformation.infoObtainedOther"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="personalInformation.tellUsMore"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="devicesInfo.device"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="devicesInfo.account"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="devicesInfo.devicesTellUsMore"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="businessInfo.business"\r\n\r\n""\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="language"\r\n\r\n"en"\r\n
// ------WebKitFormBoundaryRae6SV5A0TQklBAB--\r\n'
// --compressed

// curl 'http://localhost:3000/submit' -H 'Connection: keep-alive' -H 'Cache-Control: max-age=0' -H 'Sec-Fetch-Dest: empty' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36' -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryRae6SV5A0TQklBAB' -H 'Accept: */*' -H 'Origin: http://localhost:3000' -H 'Sec-Fetch-Site: same-origin' -H 'Sec-Fetch-Mode: cors' -H 'Referer: http://localhost:3000/no-referrer' -H 'Accept-Language: en-US,en;q=0.9' --data-binary $'------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="consent.consentOptions"\r\n\r\n["privacyConsentInfoForm.yes"]\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="anonymous.anonymous"\r\n\r\n"anonymousPage.no"\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.howDidTheyReachYou"\r\n\r\n[]\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.application"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.others"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.startDay"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.startMonth"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.startYear"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.howManyTimes"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.email"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.phone"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="howdiditstart.online"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="whatWasAffected.affectedOptions"\r\n\r\n["whatWasAffectedForm.other"]\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="whatWasAffected.optionOther"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="whatHappened.whatHappened"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="suspectClues.suspectClues1"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="suspectClues.suspectClues2"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="suspectClues.suspectClues3"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="evidence.files"\r\n\r\n[]\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="evidence.fileDescriptions"\r\n\r\n[]\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="location.postalCode"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="contactInfo.fullName"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="contactInfo.email"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="contactInfo.phone"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="appVersion"\r\n\r\n"no version"\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.demandedMoney"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.moneyTaken"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.methodPayment"\r\n\r\n[]\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.transactionDay"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.transactionMonth"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.transactionYear"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="moneyLost.tellUsMore"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="personalInformation.typeOfInfoReq"\r\n\r\n[]\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="personalInformation.infoReqOther"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="personalInformation.typeOfInfoObtained"\r\n\r\n[]\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="personalInformation.infoObtainedOther"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="personalInformation.tellUsMore"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="devicesInfo.device"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="devicesInfo.account"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="devicesInfo.devicesTellUsMore"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="businessInfo.business"\r\n\r\n""\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB\r\nContent-Disposition: form-data; name="language"\r\n\r\n"en"\r\n------WebKitFormBoundaryRae6SV5A0TQklBAB--\r\n' --compressed
