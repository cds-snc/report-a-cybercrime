/*
A run-once node js script to generate a TOTP code 
that can be used with Authenticator apps 
(Google Authenticator, Authy, Microsoft Authenticator)

Simply:
cd /utils/totp
npm i
node generatesecret.js


This will create two files. 
'secret' is a text file with the TOTP secret. 
This goes in the TOTP_SECRET environment variable for our app
If this is for a production, protect this like you would a password!

'code.html' is a HTML file you can open with a browser to get a QR
code. Scan this code with your authenticator app of choice to start
generating TOTP codes.


*/
var speakeasy = require("speakeasy");
var QRCode = require("qrcode");
var path = require("path");
var fs = require("fs");

var secret = speakeasy.generateSecret();

QRCode.toDataURL(secret.otpauth_url, function (err, data_url) {
  fs.writeFile(
    path.join(__dirname, "code.html"),
    '<img src="' + data_url + '">',
    function (err, file) {
      if (err) throw err;
    }
  );
});

fs.writeFile(path.join(__dirname, "secret"), secret.base32, function (
  err,
  file
) {
  if (err) throw err;
});
