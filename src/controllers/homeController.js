const connection = require('../config/database');
const {getAllUsers, getUserById, getUpdateById, getDeleteById} = require ('../services/CRUDservice.js');

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

const getUpdatePage = async (req,res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', {userEdit : user}); //x <- y
}

const getUpdateUser = async (req,res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let UserId = req.body.UserId;

        getUpdateById(email,city,name, UserId)
  
res.send('Update user success!  ')
}

const deleteUser = async(req,res) => {

    const userId = req.params.id;
    let user = await getUserById(userId);
        res.render('delete.ejs', {userEdit : user})
}

const postHandleRemoveUser = async(req,res) => {
    let UserId = req.body.UserId;
    getDeleteById(UserId)
    res.send ('oke delete')

}


module.exports = {
    getHomepage, getABC, getHoidanIT,  postCreateUsers, deleteUser, PostCreate, getUpdatePage, getUpdateUser,postHandleRemoveUser}