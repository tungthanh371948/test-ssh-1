const getHomepage =(req,res)=>{
    //process data
    //call models
    res.send('Hello World! & hoi dan IT vs Eric va tung')
}

const getABC = (req,res) => {
    res.send('Hoi tung dote come')
}

const getHoidanIT = (req,res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getHoidanIT
}