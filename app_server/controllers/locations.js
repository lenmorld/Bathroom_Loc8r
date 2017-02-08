/* GET 'home' page */
module.exports.homeList = function(req, res) {
	// res.render('index', { title: 'Home'} );
	res.render('locations-list', { title: 'Home'} );		// VIEW: locations-list.ejs
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
	res.render('location-info', { title: 'Location Info'} );
};

/* GET 'Add Review' page */
module.exports.addReview = function(req, res) {
	res.render('location-review-form', { title: 'Add review'} );
};
