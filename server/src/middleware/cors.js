let cors = function(req, res, next){
	let origin = req.get('Origin');
	if(origin){
		res.header("Access-Control-Allow-Origin", origin);
		res.header("Access-Control-Allow-Credentials", true);
		res.header("Access-Control-Expose-Headers", "Content-Encoding, Content-Length, Content-Type, Date, Server");
	}
	next();
};

export default cors;
