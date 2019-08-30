import React, { Component } from 'react';
class NavChart extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
      }
    render(){
        console.log(this.props.report)
        return(
            <nav className="navbar navbar-default">
          
           
                <div>
                
                    <ul className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        
                        <a onClick={()=>this.props.handleTime(this.props.report,'date')} className='btn'>Ngày</a>
                        <a onClick={()=>this.props.handleTime(this.props.report,'week')} className='btn'>Tuần</a>
                        <a onClick={()=>this.props.handleTime(this.props.report,'month')} className='btn'>Tháng</a>
                        <a onClick={()=>this.props.handleTime(this.props.report,'year')} className='btn'>Năm</a>
                    </ul>
                  
                </div>
            </nav>
   
        )
    }
}
export default NavChart;