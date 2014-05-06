exports.main = function(req, res){
	console.log("Got a call");
	res.render('layout', { 'production': production });
	console.log("Call answered");
};
