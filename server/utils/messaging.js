const AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});
const SES = new AWS.SES();
const SNS = new AWS.SNS();

exports.sendEmail = function(emailAddress, url) {
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
  Source: "salzer@amazon.com", 
 };
 
 SES.sendEmail(params, function(err, data) {
   if (err) console.log(err, err.stack);
   else     console.log(data);
 });
}

exports.sendText = function(phoneNumber, url) {
  var params = {
    PhoneNumber: phoneNumber,
    Message: url
  };

  SNS.publish(params, function(err, data) {
   if (err) console.log(err, err.stack);
   else     console.log(data);
 });
}