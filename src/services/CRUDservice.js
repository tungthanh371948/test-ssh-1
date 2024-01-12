const { name } = require("ejs");
const connection = require ("../config/database")


const getAllUsers = async () => {
let [results, fields] = await connection.query('select * from Users') ;
return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId]) ;
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const getUpdateById = async (email,city,name,UserId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users 
        SET email =?, name = ?, city= ?
        WHERE id = ? 
        `,[email,city,name,UserId]
        );
}

const getDeleteById = async (UserId) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, [UserId]
    );
    
}

module.exports = {
    getAllUsers, getUserById, getUpdateById,getDeleteById
}