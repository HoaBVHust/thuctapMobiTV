import React, { Component } from 'react';
import $ from 'jquery';
import Highcharts from 'highcharts'
import exporting from 'highcharts/modules/exporting'
import export_data from 'highcharts/modules/export-data'
import highcharts_3d from 'highcharts/highcharts-3d'

class Control5 extends Component {
    constructor(props){
        super(props);
        this.state={data:{}
        
        }
      }
    
    
    render(){
      console.log('control5')
      var series=this.props.data.series;
      var categories=this.props.data.categories;
        exporting(Highcharts);
        export_data(Highcharts);
        highcharts_3d(Highcharts);
        $(function(){
        Highcharts.chart('chart5', {
            chart: {
              type: 'column'
            },
            title: {
              text: 'Monthly Average Rainfall'
            },
            subtitle: {
              text: 'Source: WorldClimate.com'
            },
            xAxis: {
              categories:categories,
              crosshair: true
            },
            yAxis: {
              min: 0,
              title: {
                text: 'Rainfall (mm)'
              }
            },
            tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
            },
            plotOptions: {
              column: {
                pointPadding: 0.2,
                borderWidth: 0
              }
            },
            series: series
          });
          console.log('ve chart5 xong')
        })
        return(
            <div id="chart5" stype="min-width: 310px;
            max-width: 800px;
            height: 400px;
            margin: 0 auto"></div>)
    }
}
export default Control5;