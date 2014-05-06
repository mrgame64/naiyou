exports.main = function(req, res){
	res.render('layout.html', { 'production': production });
};
