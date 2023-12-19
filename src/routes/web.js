const express = require('express');
const {getHomepage, getABC, getHoidanIT, postCreateUsers} = require('../controllers/homeController');
const router = express.Router();

//router.Method('/route', handler)

router.get('/', getHomepage); 
router.get('/ac', getABC);
router.get('/hoidanIT' , getHoidanIT);
router.post('/creat-user' , postCreateUsers);
module.exports = router; // export default