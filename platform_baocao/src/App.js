import React, { Component } from 'react';

//import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';
import './App.css';

import Loginscreen from './Loginscreen'
import UploadScreen from './UploadScreen';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:null,
      uploadScreen:null,
      i:0,
    
    }
  }

  // componentWillMount(){
  //   this.getGdp();
  //   console.log(this.state.countries);
  //   console.log('will')
  // }
  componentWillMount(){
    var loginPage =<Loginscreen appContext={this} key={this.state.i}/>;
    
    this.setState({
                  loginPage:loginPage,
                  uploadScreen:null,i:this.state.i+1
                    })
  }

  handleLogin(data){
    
    var uploadScreen=<UploadScreen first_name={data.data[0].first_name} last_name={data.data[0].last_name} appContext={this} />
  this.setState({
    i:this.state.i+1,
    uploadScreen:uploadScreen,
    loginPage:null,
    

    
  })
  }
  handleLogout(){
  this.componentWillMount();
  }
  render() {
    
    return (

      <div className="App" style={{minWidth:800}}>
        <header className="App-header" >
        
        
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Application</h1>
        </header>
        <div style={{minHeight:800}}>
          {this.state.loginPage}
          {this.state.uploadScreen}
          
        </div>
        
       <footer className='panel'>
            <div className="panel-body">
              
            </div>
            
                   
            <div id="footer-bottom" stype="background: #FFFFFF">  
              <div id="footer-inner-bottom" className="section-container">
                <div className="footer-company">MOBITV</div>
                <div className="footer-contact-container dark-inverse">
                  <div id="footer-social">
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/MobiTV" stype="color:#EBEBEB">
                      <i className="fa fa-twitter"></i><span>     </span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mobitv" stype="color:#EBEBEB">
                      <i className="fa fa-facebook"></i>  <span>     </span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/mobitv" stype="color:#EBEBEB">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="footer-site-links" align="center" stype="padding-top: 30px;clear:both;">
                  <a href="http://www.mobitv.com/">
                    <span>Home  </span></a>
                  <a href="http://www.mobitv.com/our-team/">
                    <span>About  </span></a>
                  <a href="http://www.mobitv.com/press/">
                    <span>Press  </span></a>
                  <a href="http://www.mobitv.com/careers/">
                    <span>Careers  </span></a>
                  <a href="http://www.mobitv.com/contact/">
                    <span>Contact  </span></a>
                </div>
                <div id="copyright">© Copyright 2018. All Rights Reserved, MOBITV</div>
                <br/>
                <br/>
              </div>
            </div>
        </footer> 
         
          
      </div>
    );
  }
}

export default App;
