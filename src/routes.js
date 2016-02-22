module.exports = function(router) {

	router.get('*', function(req, res) {
	    res.json({
	        'route': 'Sorry this page does not exist!'
	    });
	});
	
 	router.get('/get', function(req, res) {
 		var data = {
 			status:'success'
 		}
	    res.json(data);
	});
};