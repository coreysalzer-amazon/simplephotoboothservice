const express = require('express');
const router = express.Router();
let photos = require('./photos');

router.use("/photos", photos);

module.exports = router;
