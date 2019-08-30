import React, { Component } from 'react';
class Control extends Component {
    constructor(props){
        super(props);
        this.state={
        
        }
      }
    render(){

        return(
            <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Control Panel</h3>
            </div>
            <div className="panel-body">
             <a onClick={()=>{this.props.handleControl(1)}}>Báo cáo TB PT</a><br/><br/>
             <a onClick={()=>{this.props.handleControl(2)}}>Báo cáo TB ngưng do yêu cầu KH</a><br/><br/>
             <a onClick={()=>{this.props.handleControl(3)}}>Báo cáo TB ngưng do không nạp cước</a><br/><br/>
             <a onClick={()=>{this.props.handleControl(4)}}>Báo cáo TB ngưng do thiếu thông tin</a><br/><br/>
             <a onClick={()=>{this.props.handleControl(5)}}>Báo cáo TB kích hoạt lại</a><br/><br/>
             <a onClick={()=>{this.props.handleControl(6)}}>Tiện ích, báo cáo khác</a><br/><br/>
            </div>
            
          </div>)
    }
}
export default Control;