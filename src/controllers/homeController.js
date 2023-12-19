const connection = require('../config/database');

const getHomepage =(req,res)=>{
   return res.render('home.ejs')
}
  
const getABC = (req,res) => {
    res.send('Hoi tung dote come')
}
const getHoidanIT = (req,res) => {
    res.render('sample.ejs')
}

const postCreateUsers = (req,res) =>{
  console.log(">>> request.body: ", req.body)
  res.send('creat a new user')
}
module.exports = {
    getHomepage, getABC, getHoidanIT,  postCreateUsers
}