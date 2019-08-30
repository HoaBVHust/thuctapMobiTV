var mysql = require('mysql');
// var bcrypt = require('bcrypt');
//var jsonfile = require('jsonfile');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'hoabui',
  //insecureAuth: false
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn",err);
}
});



exports.chart = function(req,res){

  connection.query("SELECT * FROM gdp_asian", function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }
  else{
        var itemsTg=results.map((item,index)=>{return({
            name:item.nation,
            data:[item._2011,item._2012,item._2013,item._2014,item._2015,item._2016]
        })})
        return res.json({
            data:itemsTg
        })
}
})
}
exports.tasks=function(req,res){
  const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM taskstable';
  connection.query(SELECT_ALL_PRODUCTS_QUERY,(err,results)=>{
      if(err){
          return res.send(err)
      }
      else{
          return res.json({
              data:results
          })
      }
  });
};