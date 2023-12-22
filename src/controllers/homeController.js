const connection = require('../config/database');

const getHomepage = async  (req,res)=>{
    let [result, fields] = await connection.query('select * from Users') 
    console.log(">>check query", result)
   return res.render('home.ejs', {ListUsers:result})
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