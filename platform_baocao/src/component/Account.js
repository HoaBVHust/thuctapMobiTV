import React, { Component } from 'react';
class Account extends Component {
    constructor(props){
        super(props);
        this.state={
        
        }
      }
    render(){

        return(
        
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">My Account</h3>
            </div>
            <div className="panel-body">
             Chào {this.props.first_name} {this.props.last_name}
            </div>
            <div className="panel-footer">
            <button type="button" className="btn btn-info">Set Name</button>
            <span><button type="button" className="btn btn-default">Set Password</button>
            </span></div>
          </div>
   
        )
    }
}
export default Account;