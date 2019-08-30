import React, { Component } from 'react';
import $ from 'jquery';
import Highcharts from 'highcharts'
import exporting from 'highcharts/modules/exporting'
import export_data from 'highcharts/modules/export-data'
//import readXlsxFile from 'read-excel-file'
class Control6 extends Component {
    constructor(props){
        super(props);
        this.state={
            excel:null
        }
    }
    // handleSubmit(){
    //     var input=document.getElementById('input');
       
    //     // readXlsxFile(input).then((data)=>{
    //     //       this.setState({
    //     //           excel:data
    //     //       })
            
    //     // })
    //     console.log(input); 
    // }
  
    render(){
        console.log('control6')
        exporting(Highcharts);
        export_data(Highcharts);
        $(function () {
            Highcharts.chart('chart6', {
      
              title: {
                  text: 'Solar Employment Growth by Sector, 2010-2016'
              },
          
              subtitle: {
                  text: 'Source: thesolarfoundation.com'
              },
          
              yAxis: {
                  title: {
                      text: 'Number of Employees'
                  }
              },
              legend: {
                  layout: 'vertical',
                  align: 'right',
                  verticalAlign: 'middle'
              },
          
              plotOptions: {
                  series: {
                      pointStart: 2010
                  }
              },
          
              series: [{
                  name: 'Installation',
                  data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
              }, {
                  name: 'Manufacturing',
                  data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
              }, {
                  name: 'Sales & Distribution',
                  data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
              }, {
                  name: 'Project Development',
                  data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
              }, {
                  name: 'Other',
                  data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
              }]
          
            })
        })
    
          
        return(
        <div>
            <div id="chart6" stype="min-width: 310px;
            max-width: 800px;
            height: 400px;
            margin: 0 auto"></div>
             
  
  
        </div>)
    }
}
export default Control6;