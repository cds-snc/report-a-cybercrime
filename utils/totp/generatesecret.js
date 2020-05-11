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
