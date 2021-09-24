var express = require('express');
var router = express.Router();
var db  = require('../db/connection')

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.any('SELECT * FROM test_table')
  .then(function(data){
    res.json(data)
  })
  .catch(function(error){
    console.log(error)
    res.json({msg: "db malfunction"})
  })
  //res.json({name:"jasmyne"});
});

module.exports = router;
