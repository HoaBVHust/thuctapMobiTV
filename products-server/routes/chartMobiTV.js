var utf8 = require('utf8');

var ibmdb = require('ibm_db');

 
exports.chartMobiTV=function(req,res){ibmdb.open("DATABASE=AVGRP;HOSTNAME=10.254.12.8;UID=ARP;PWD=crm.com;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
  if (err) return console.log(err);
  var Matrix=[[],[],[],[],[]];var time=[];var DV=[]//don vi;
  var QUERY_CONTENT = "select count(SUBACTIVECOUNT) as SO_LUONG, ou.GRANDPARENTOUUNIT as DV_KICH_HOAT, t.REPORTTIMEYEARWEEK as TUAN from arp.SUBACTIVECOUNTS sa left join arp.ADDRESSES aa on aa.ADDRESSID = sa.ADDRESSID left join arp.OUUNITS  ou  on ou.OUUNITID = sa.OUUNITID left join arp.OUUNITS wh on wh.OUUNITID = sa.WAREHOUSEUNITID left join arp.REPORTTIMES t on t.REPORTTIMEID = sa.SUBACTIVETIMEID where t.REPORTTIMEYEARWEEK in ('27','26','25','28') group by ou.GRANDPARENTOUUNIT, t.REPORTTIMEYEARWEEK order by t.REPORTTIMEYEARWEEK"
  var QUERY_CONTENT2 = "select sum(a.SUBACTIVECOUNT) as SL,case when u.GRANDPARENTOUUNIT like 'MBF%' then 'Mobifone' else u.GRANDPARENTOUUNIT end as DL, t.REPORTTIMEYEARWEEK as TUAN from ARP.SUBACTIVECOUNTS a left join arp.OUUNITS u on u.OUUNITID = a.OUUNITID left join arp.REPORTTIMES t on t.REPORTTIMEID = a.SUBACTIVETIMEID where t.REPORTTIMEMONTH in('7','8') group by case when u.GRANDPARENTOUUNIT like 'MBF%' then 'Mobifone' else u.GRANDPARENTOUUNIT end, t.REPORTTIMEYEARWEEK order by case when u.GRANDPARENTOUUNIT like 'MBF%' then 'Mobifone' else u.GRANDPARENTOUUNIT end "
  conn.query(QUERY_CONTENT2, function (err, data) {
    if (err) console.log(err);
    
    else {
      
      console.log(data);
      
      var i,j=0;
      data.map((item)=>{
        if(time.length==0){time.push(item.TUAN)}
        else{
          for(i=0;i<time.length;i++){
            if(item.TUAN==time[i])j++;
          }
          if(j==0){time.push(item.TUAN);}
          j=0;
        }
      })
      console.log(time);
      data.map((item)=>{
        if(DV.length==0){DV.push(item.DL)}
        else{
          for(i=0;i<DV.length;i++){
            if(item.DL==DV[i])j++;
          }
          if(j==0){DV.push(item.DL);}
          j=0;
        }
      })
      console.log(DV);
      
      data.map((item,index)=>{
        for(j=0;j<DV.length;j++){
          switch(item.DL){
            case DV[j]:{
              for(i=0;i<time.length;i++){
                switch(item.TUAN){
                  case time[i]:{Matrix[j][i]=item.SL;break;}
                }
              }
              break;
            }
          }
        }
      })

    }  console.log(Matrix);
    console.log(utf8.encode(DV[2]));
    
  

    
    return res.json({series:[
                      {name:'Mobifone',data:Matrix[0]},
                      {name:'Tổng FTV',data:Matrix[1]},
                      {name:'Tổng đại lí Huy Hùng',data:Matrix[2]},
                      {name:'Tổng đại lí TTS',data:Matrix[3]},
                      {name:'khác',data:Matrix[4]},
                      ],
                      categories:time
                    })

  });
  conn.close(function () {
    console.log('done');
  });
});

}
