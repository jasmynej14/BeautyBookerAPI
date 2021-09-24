var express = require('express');
var router = express.Router();
var db  = require('../db/connection')

router.get('/',function(req,res){
    db.any('SELECT * FROM businesses')
    .then(function(data){
        res.json(data)
    })
    .catch(function(error){
        res.send(error)
    })
})

router.get('/hair',function(req,res){
    db.any('SELECT * FROM businesses WHERE business_type = $1','hair')
    .then(function(data){
        res.json(data)
    })
    .catch(function(error){
        res.send(error)
    })
})
router.get('/nails',function(req,res){
    db.any('SELECT * FROM businesses WHERE business_type = $1','nails')
    .then(function(data){
        res.json(data)
    })
    .catch(function(error){
        res.send(error)
    })
})
router.get('/spa',function(req,res){
    db.any('SELECT * FROM businesses WHERE business_type = $1','spa')
    .then(function(data){
        res.json(data)
    })
    .catch(function(error){
        res.send(error)
    })
})
module.exports = router;