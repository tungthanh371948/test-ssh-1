const express = require('express');
const {getHomepage, getABC, getHoidanIT, postCreateUsers, PostCreate, getUpdatePage,getUpdateUser} = require('../controllers/homeController');
const router = express.Router();

//router.Method('/route', handler)

router.get('/', getHomepage); 
router.get('/ac', getABC);
router.get('/hoidanIT' , getHoidanIT);
router.post('/create-user' , postCreateUsers);
router.get('/create', PostCreate);
router.get('/update/:id', getUpdatePage)
router.post('/update-user/', getUpdateUser)
module.exports = router; // export default