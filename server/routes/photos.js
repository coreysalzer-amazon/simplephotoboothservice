const express = require('express');
const router = express.Router();

/*
router.get('/', (req, res) => {
	//res.sendFile('index.html' , { root : __dirname + "/../"});
});
*/

router.post('/', (req, res) => {
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
});

module.exports = router;
