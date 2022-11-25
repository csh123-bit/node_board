var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();


router.get('/', function(req, res, next){
    conn;
    console.log('접속 성공');
});

module.exports = router;