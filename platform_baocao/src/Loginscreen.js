import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
import { randomBytes } from 'crypto';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:null,
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=<Login parentContext={this} appContext={this.props.appContext} key={randomBytes}/>;
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage,
                  buttonLabel:"Register",
                  isLogin:true
                    })
  }
  handleClick(event){
    // console.log("event",event);
    var loginmessage;
    if(this.state.isLogin){
      var loginscreen=<Register parentContext={this} appContext={this.props.appContext} key={randomBytes}/>;
      loginmessage = "Already registered.Go to Login";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
                   })
    }
    else{
      this.componentWillMount();
      // var loginscreen=[];
      // loginscreen.push(<Login parentContext={this} key={randomBytes}/>);
      // loginmessage = "Not Registered yet.Go to registration";
      // this.setState({
      //                loginscreen:loginscreen,
      //                loginmessage:loginmessage,
      //                buttonLabel:"Register",
      //                isLogin:true
      //              })
    }
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Loginscreen;