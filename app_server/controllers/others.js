//========================== SAMPLE HOMEPAGE ========================
/* GET home page. */
// module.exports.index = function(req, res) {
//   res.render('index', { title: 'Express' });			// homepage Controller 'index'
// };
//===================================================================

/* GET home page */
module.exports.about = function(req, res) {
	res.render('index', { title: 'About'} );
};
