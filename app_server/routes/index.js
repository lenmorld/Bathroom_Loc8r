var express = require('express');
var router = express.Router();

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
var ctrlMain = require('../controllers/main');		

/* GET home page. */
router.get('/', ctrlMain.index);		// link route to the controller by requiring the file, and referencing the controller function



module.exports = router;
