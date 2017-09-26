const messagingUtil = require('../utils/messaging');
const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

/*
router.get('/', (req, res) => {
	//res.sendFile('index.html' , { root : __dirname + "/../"});
});
*/

router.post('/', (req, res) => {
  //parse contact info params
  let type = req.query.type;
  let value = req.query.value;

  if(!req.files)
    return res.status(400).send('No files were uploaded.');

  var params = {
    Bucket: "simplephotoboothservice-admin", 
    Key: new Date().getTime() + '-sfo10-IMG', 
    Body: req.files.file.data, 
    ACL: "public-read",
    Metadata: {
      'contactType': type,
      'contactValue': value
    }
  };

  s3.upload(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
      return res.status(500).send("There was an issue uploading your photo.");
    }
    else {
      console.log(data);

      var photoUrl = data.Location;
      if (type === "email") {
        messagingUtil.sendEmail(value, photoUrl, function(err, data) {
          if (err) {
            console.log(err, err.stack);
            return res.status(500).send("Your picture was uploaded, but there was an issue emailing you the S3 url.");
          }
          else {
            console.log(data);
            return res.sendStatus(200);
          }
        });
      }
      else if (type === "phone") {
        messagingUtil.sendText(value, photoUrl, function(err, data) {
          if (err) {
            console.log(err, err.stack);
            return res.status(500).send("Your picture was uploaded, but there was an issue texting you the S3 url.");
          }
          else {
            console.log(data);
            return res.sendStatus(200);
          }
        });
      }
    }
  });
});

module.exports = router;
