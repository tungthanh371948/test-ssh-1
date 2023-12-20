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

const postCreateUsers = async(req,res) =>{
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log(">>> emai = ", email , "name = ", name , "city = ", city)

  console.log(">>> request.body: ", req.body)

  let [results, fields] = await connection.query(
        ` INSERT INTO Users (email, name, city) VALUES (? , ? , ?)`,[email,name,city]
        );

console.log(">>>check results: ", results)
res.send('Creat user success!  ')
}


const PostCreate = (req,res) => {
    res.render('create.ejs')
}
module.exports = {
    getHomepage, getABC, getHoidanIT,  postCreateUsers, PostCreate
}