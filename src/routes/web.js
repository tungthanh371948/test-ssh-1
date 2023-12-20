const express = require('express');
const {getHomepage, getABC, getHoidanIT, postCreateUsers, PostCreate} = require('../controllers/homeController');
const router = express.Router();

//router.Method('/route', handler)

router.get('/', getHomepage); 
router.get('/ac', getABC);
router.get('/hoidanIT' , getHoidanIT);
router.post('/create-user' , postCreateUsers);
router.get('/create', PostCreate)
module.exports = router; // export default