const http = require('http');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('./middleware/cors');
const routes = require('./routes');

let app = express();
app.server = http.createServer(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors);
app.use(fileUpload());
app.use("/api/v1", routes);

app.server.listen(process.env.PORT || 7890, () => {
	console.log(`Simple Photobooth Service Server running on: http://localhost:${app.server.address().port}/`);
});
