module.exports = function(req, res, next){
	var origin = req.get('Origin');
	if(origin){
		res.header("Access-Control-Allow-Origin", origin);
		res.header("Access-Control-Allow-Credentials", true);
		res.header("Access-Control-Expose-Headers", "Content-Encoding, Content-Length, Content-Type, Date, Server");
	}
	next();
};
