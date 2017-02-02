var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');		// require controller files
var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homeList);						// location routes, mapping them to controller functions
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);						// define other routes



//========================== SAMPLE HOMEPAGE ========================
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


//----- refactor 1 ------------ put controller in a function, instead of anonymous
// var homepageController = function(req, res, next) {
//   res.render('index', { title: 'Express' });
// };

/* GET home page. */
// router.get('/', homepageController);

//----- refactor 2-------------- put controller in a file - main.js and require(import) it here
// var ctrlMain = require('../controllers/main');		

/* GET home page. */
// router.get('/', ctrlMain.index);		// link route to the controller by requiring the file, and referencing the controller function
// ========================================================================


module.exports = router;
