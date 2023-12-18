const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
    res.send('Hello World! & hoi dan IT vs Eric va tung')
  })
  
  router.get('/abc', (req, res) => {
    res.render('sample.ejs')
  })

  module.exports = router; // export default