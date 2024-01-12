const express = require('express');
const {getHomepage, getABC, getHoidanIT, postCreateUsers, PostCreate, getUpdatePage, deleteUser,getUpdateUser,postHandleRemoveUser} = require('../controllers/homeController');
const router = express.Router();

//router.Method('/route', handler)

router.get('/', getHomepage); 
router.get('/ac', getABC);
router.get('/hoidanIT' , getHoidanIT);
router.post('/create-user' , postCreateUsers);
router.get('/create', PostCreate);
router.get('/update/:id', getUpdatePage)
router.post('/update-user/', getUpdateUser)
router.post('/delete-user/:id',deleteUser)
router.post('/delete-user',postHandleRemoveUser)
module.exports = router; // export default