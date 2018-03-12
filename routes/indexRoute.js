var express = require('express')
var router = express.Router()

var indexController = require('../controllers/indexController');
router.get('/', indexController.get_zero_page);

router.get('/pages/1', indexController.get_first_page)
router.get('/pages/2', indexController.get_second_page)
router.get('/pages/3', indexController.get_third_page)

module.exports = router