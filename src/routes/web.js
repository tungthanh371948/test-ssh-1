const express = require('express');
const {getHomepage, getABC, getHoidanIT} = require('../controllers/homeController');
const router = express.Router();

//router.Method('/route', handler)

router.get('/', getHomepage); 
router.get('/ac', getABC);
router.get('/hoidanIT' , getHoidanIT);

module.exports = router; // export default