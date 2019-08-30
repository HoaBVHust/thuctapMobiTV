import React, { Component } from 'react';
import $ from 'jquery';
import Highcharts from 'highcharts'
import exporting from 'highcharts/modules/exporting'
import export_data from 'highcharts/modules/export-data'
import NavChart from './NavChart';
import Table from './Table'
class Control1 extends Component {
    constructor(props){
        super(props);
        this.state={

                  }
      }
   
   
    
  
    render(){
      var series=this.props.data.series;
      var categories=this.props.data.categories;
      
      //var c=categories.map((item)=>{return('Tuần '+item)});
      exporting(Highcharts);
      export_data(Highcharts);
      $(function () {Highcharts.chart('chart1', {
          chart: {
            type: 'area'
          },
          title: {
            text: 'Báo cáo phát triển thuê bao'
          },
          subtitle: {
            text: 'Source: MobiTV'
          },
          xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
            title: {
              enabled: false
            }
          },
          yAxis: {
            title: {
              text: 'Số lượng thuê bao kích hoạt'
            },
            labels: {
              formatter: function () {
                return this.value;
              }
            }
          },
          tooltip: {
            split: true,
            valueSuffix: ' '
          },
          plotOptions: {
            area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                lineWidth: 1,
                lineColor: '#666666'
              }
            }
          },
          series:series
        });
        console.log('ve chart xong')
      })
      console.log('control1')
        return(
          
          <div  >
          
            
            <div  id="chart1" stype="min-width: 310px;
            height: 400px;
            margin: 0 auto">
              
            </div>
      
          </div>
          
             )
    }
}
export default Control1;