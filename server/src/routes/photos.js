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

	// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.file;

  	// Use the mv() method to place the file somewhere on your server
	sampleFile.mv('./uploads/file.jpg', function(err) {
    	if(err) 
        return res.status(500).send(err);
		res.send('File uploaded!');
	});

  var params = {
    Bucket: "simplephotoboothservice-admin", 
    Key: 'sfo10-IMG' + new Date().getTime(), 
    Body: req.files.file.data, 
    Metadata: {
      'contactType': type,
      'contactValue': value
    }
  };

  var photoUrl = null;
  s3.upload(params, function(err, data) {
    console.log(err, data);
    photoUrl = data.Location;
  });

  if (type === "email") {
    messagingUtil.sendEmail(value, photoUrl);
  }
  else if (type === "phone") {
    messagingUtil.sendText(value, photoUrl);
  }

});

module.exports = router;
