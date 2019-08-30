import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import MapsLocalFlorist from 'material-ui/SvgIcon';



//var ibmdb = require('ibm_db');
 
// ibmdb.open("DATABASE=AVGRP;HOSTNAME=10.254.12.8;UID=ARP;PWD=crm.com;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
//   if (err) return console.log(err);
  
//   conn.query('select 1 from arp.address', function (err, data) {
//     if (err) console.log(err);
//     else console.log(data);
 
//     conn.close(function () {
//       console.log('done');
//     });
//   });
// });



ReactDOM.render(<App/>, document.getElementById('root'));
console.log("ddeens index.js");
registerServiceWorker();
