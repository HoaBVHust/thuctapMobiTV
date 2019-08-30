import React, { Component } from 'react';
import $ from 'jquery';
import Highcharts from 'highcharts'
import exporting from 'highcharts/modules/exporting'
import export_data from 'highcharts/modules/export-data'
class Control2 extends Component {
    constructor(props){
        super(props);
        this.state={
           chartline:null
        }
    }
    // getGdp= _ =>{
    //     fetch('http://localhost:4000/api/chart')
    //         .then(response=>response.json())

    //         .then(response=>{this.setState({chartline:response.data});})
    //         .then(response=>console.log("fetch"))
    //         .catch(err=>console.error(err))
    // }
    componentWillMount(){
        //this.getGdp();
        this.setState({chartline:this.props.chartline})
    }
    render(){

        var chartline=  this.props.chartline;
        exporting(Highcharts);
        export_data(Highcharts);
        console.log('control2')
        $(function () {
                
            Highcharts.chart('chart2', {
    
            title: {
                text: 'Tăng trưởng GDP các nước khu vực ASIAN, 2011-2015'
            },
        
            // subtitle: {
            //     text: 'Source: thesolarfoundation.com'
            // },
        
            yAxis: {
                title: {
                    text: 'tăng trưởng (đơn vị: %)'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            plotOptions: {
                series: {
                    pointStart: 2011
                }
            },
        
            series:chartline
        
    
        
            })
        })
        return(
            <div id="chart2" stype="min-width: 310px;
            max-width: 800px;
            height: 400px;
            margin: 0 auto"></div>)
    }
}
export default Control2;