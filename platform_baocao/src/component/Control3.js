import React, { Component } from 'react';
import $ from 'jquery';
import Highcharts from 'highcharts'
import exporting from 'highcharts/modules/exporting'
import export_data from 'highcharts/modules/export-data'
class Control3 extends Component {
    constructor(props){
        super(props);
        this.state={
        
        }
      }
    render(){
        console.log('control3')
        exporting(Highcharts);
        export_data(Highcharts);
        $.getJSON(
            'https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json',
            function (data) {
        
            Highcharts.chart('chart3', {
                chart: {
                zoomType: 'x'
                },
                title: {
                text: 'USD to EUR exchange rate over time'
                },
                subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                },
                xAxis: {
                type: 'datetime'
                },
                yAxis: {
                title: {
                    text: 'Exchange rate'
                }
                },
                legend: {
                enabled: false
                },
                plotOptions: {
                area: {
                    fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                    },
                    marker: {
                    radius: 2
                    },
                    lineWidth: 1,
                    states: {
                    hover: {
                        lineWidth: 1
                    }
                    },
                    threshold: null
                }
                },
        
                series: [{
                type: 'area',
                name: 'USD to EUR',
                data: data
                }]
            });
            }
        );
        return(
            <div id="chart3" stype="min-width: 310px;
            max-width: 800px;
            height: 400px;
            margin: 0 auto"></div>)
    }
}
export default Control3;