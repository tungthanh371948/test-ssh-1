const connection = require('../config/database');
const {getAllUsers} = require ('../services/CRUDservice.js');

const getHomepage = async  (req,res)=>{
    let results = await getAllUsers();
   return res.render('home.ejs', {ListUsers:results})
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