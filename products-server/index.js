// const express2=require('express');
// const cors= require('cors');
// const mysql2 =require('mysql');
// const app2 = express2();
// //let headers = new Headers();

// const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM taskstable';

// const connection2=mysql2.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'hoabui'
// });

// connection2.connect(err=>{
//     if(err){
//         return err;
//     }
// });

// app2.use(cors());

// app2.get('/',(req,res)=>{
//     res.send(
//         'sfsfsfsfsdfsfdf'
//     )
// });

// app2.get('/tasks/add',(req,res)=>{
//     const {id,name,time,level,deadline,checked}=req.query;
//     const INSERT_TASKS_QUERY=`INSERT INTO taskstable (id,name,time,level,deadline,checked) VALUE(${id},${name},${time},${level},${deadline},${checked})`;
//     connection.query(INSERT_TASKS_QUERY,(err,results)=>{
//         if(err){
//             return res.send(err)
//         }
//         else{
//             return res.send('successfully')
//         }
//     });
// });

// app2.get('/tasks',(req,res)=>{
//     connection.query(SELECT_ALL_PRODUCTS_QUERY,(err,results)=>{
//         if(err){
//             return res.send(err)
//         }
//         else{
//             return res.json({
//                 data:results
//             })
//         }
//     });
// });
// app2.get('/gdp',(req,res)=>{
//     const SELECT_GDP = 'SELECT * FROM gdp_asian';
//     connection.query(SELECT_GDP,(err,results)=>{
//         if(err){
//             return res.send(err)
//         }
//         else{
//             return res.json({
//                 data:results
//             })
//         }
//     });
// });

// app2.listen(4000,()=>{
//     console.log('Products server listening on port 4000')
// });



var express    = require("express");
var login = require('./routes/loginroutes');
var chart = require('./routes/charts');
var upload = require('./routes/fileroutes');
var chartMobiTV=require('./routes/chartMobiTV');
//var gdp=require('./routes/charts');
var bodyParser = require('body-parser');
//var cors= require('cors');
/*
Module:multer
multer is middleware used to handle multipart form data
*/
var multer = require('multer');
var multerupload = multer({ dest: 'fileprint/' })
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cors());



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();
app.get('/a',function(req,res){
    res.send('sfsfasfsdfsf')
})


// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login);
//route to handle file printing and listing
router.post('/fileprint',multerupload.any(),upload.fileprint);
router.get('/fileretrieve',upload.fileretrieve);

router.get('/chart',chart.chart);
router.get('/tasks',chart.tasks);
router.post('/chartMobiTV',chartMobiTV.chartMobiTV);
app.use('/api', router);
app.listen(4000,()=>{
     console.log('Products server listening on port 4000')
});




