var express = require('express');
var router = express.Router();

router.get("/",function(req, res, next){
    res.render('form', {name:'Choi shin hyuk',
                        blog:'blog.net',
                        homepage:'blog.net'
                    });
                });

router.post('/', function(req, res, next){
    res.json(req.body);
});

module.exports = router;