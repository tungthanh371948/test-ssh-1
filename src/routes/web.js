const express = require('express');
const {getHomepage, getABC, getHoidanIT, postCreateUsers, PostCreate, getUpdatePage} = require('../controllers/homeController');
const router = express.Router();

//router.Method('/route', handler)

router.get('/', getHomepage); 
router.get('/ac', getABC);
router.get('/hoidanIT' , getHoidanIT);
router.post('/create-user' , postCreateUsers);
router.get('/create', PostCreate);
router.get('/update/:id', getUpdatePage)
module.exports = router; // export default