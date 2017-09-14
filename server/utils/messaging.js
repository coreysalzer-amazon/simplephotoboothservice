const AWS = require('aws-sdk');
const SES = new AWS.SES();

var sendEmail = function(emailAddress, url) {
  var params = {
    Destination: {
      ToAddresses: [
        emailAddress
      ]
  }, 
  Message: {
   Body: {
    Text: {
     Charset: "UTF-8", 
     Data: url
    }
   }, 
   Subject: {
    Charset: "UTF-8", 
    Data: "Your Simple Photo Booth Service Photo"
   }
  }, 
 };
 SES.sendEmail(params, function(err, data) {
   if (err) console.log(err, err.stack);
   else     console.log(data);
 });
}

exports .sendEmail = sendEmail;