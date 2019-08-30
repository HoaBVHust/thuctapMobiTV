import React, { Component } from 'react';

import $ from 'jquery'

import Control1 from './component/Control1'
import Control2 from './component/Control2'
import Control3 from './component/Control3'
import Control4 from './component/Control4'
import Control5 from './component/Control5'
import Control6 from './component/Control6'

import axios from 'axios'
import NavChart from './component/NavChart';
import Table from './component/Table'
import Account from './component/Account';
import Contact from './component/Contact';
import About from './component/About';
class UploadScreen extends Component {
    constructor(props){
        super(props);
        this.state={
          screen:null,
          report1:{},report2:{},report3:{},report4:{},report5:{},report6:{},
          chartline:null,
        
          
          
        
        }   
        this.handleControl=this.handleControl.bind(this)
        this.handleAccount=this.handleAccount.bind(this)
        this.handleContact=this.handleContact.bind(this)
        this.handleAbout=this.handleAbout.bind(this)


    }
    
    componentWillMount(){
      
      this.handleTime('report1','date');
      this.getGdp();
      this.handleTime('report3','date');
      this.handleTime('report4','date');
      this.handleTime('report5','date');
      this.handleTime('report6','date');
      var self = this;
      setTimeout(() => {
        self.setState({
          screen: <div  style={{minWidth:570}}>
          <div  onClick={()=>self.handleControl(1)} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 panel panel-info">
            <Control1  data={self.state.report1} />
          </div> 
          <div onClick={()=>self.handleControl(2)} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 panel panel-info" >
            <Control2 chartline={self.state.chartline}/>
          </div>
          <div onClick={()=>self.handleControl(3)} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 panel panel-info" >
            <Control3 data={self.state.report3}/>
          </div>
          <div onClick={()=>self.handleControl(4)} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 panel panel-info" >
            <Control4 data={self.state.report4}/>
          </div>
          <div onClick={()=>self.handleControl(5)} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 panel panel-info" >
            <Control5 data={self.state.report5} />
          </div>
          <div onClick={()=>self.handleControl(6)} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 panel panel-info" >
            <Control6 data={self.state.report6}/>
          </div> 
        </div>}
        );
    }, 4500);
      
    
    }
    getGdp= _ =>{
      fetch('http://localhost:4000/api/chart')
          .then(response=>response.json())

          .then(response=>{this.setState({chartline:response.data});})
          .then(response=>console.log("fetch"))
          .catch(err=>console.error(err))
    }
    handleTime=(reporti,time)=>{
      var apiBaseUrl = "http://localhost:4000/api/";
      var self = this;
      
      axios.post(apiBaseUrl+'chartMobiTV', time)
      .then(function (response) {
        
        self.setState({[reporti]:response.data})
        console.log('axios'+reporti+' xong '+time)
      })
      
      .catch(function (error) {
      console.log(error);
      });
    }
    
    handleControl=(i)=>{
      var reports= [  <Control1 data={this.state.report1}/>,
                    <Control2 chartline={this.state.chartline}/>,
                    <Control3 data={this.state.report3}/>,
                    <Control4 data={this.state.report4}/>,
                    <Control5 data={this.state.report5}/>,
                    <Control6 data={this.state.report6}/>]
    
      this.setState({
         screen:<div>
                <NavChart handleTime={this.handleTime} report={'report'+i}/>
                {reports[i-1]}
                <Table data={this.state.report}/>
              </div> 
    })
      console.log(this.state.report)
    }
    handleAccount(){
      this.setState({screen:<Account first_name={this.props.first_name} last_name={this.props.last_name}/>})
    }
    handleContact(){
      this.setState({screen:<Contact/>})
    }
    handleAbout(){
      this.setState({screen:<About/>})
    }
render(){
  console.log(this.state.report1);
  console.log(this.state.chartline);
  
 
    return(
      <div style={{minWidth:800}}>
        <nav className="navbar navbar-default" role="navigation">
          {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" onClick={()=>this.setState({screen: <div  style={{minWidth:570}}>
                      <div  onClick={()=>this.handleControl(1)} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 panel panel-info">
                        <Control1  data={this.state.report1}/>
                      </div> 
                      <div onClick={()=>this.handleControl(2)} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 panel panel-info" >
                        <Control2 chartline={this.state.chartline}/>
                      </div>
                      <div onClick={()=>this.handleControl(3)} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 panel panel-info" >
                        <Control3 data={this.state.report3}/>
                      </div>
                      <div onClick={()=>this.handleControl(4)} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 panel panel-info" >
                        <Control4 data={this.state.report4}/>
                      </div>
                      <div onClick={()=>this.handleControl(5)} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 panel panel-info" >
                        <Control5  data={this.state.report5}/>
                      </div>
                      <div onClick={()=>this.handleControl(6)} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 panel panel-info" >
                        <Control6 data={this.state.report6}/>
                      </div> 
                    </div>})}>Home</a>
          </div>
        
          {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a onClick={this.handleContact}>Contact</a></li>
              <li><a onClick={this.handleAbout}>About</a></li>
              <li><a onClick={this.handleAccount}>My Account</a></li>
            </ul>
            {/* <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"></input>
              </div>
              <button className='btn btn-default'>Submit</button>
            </form> */}
           
            
            <ul className="nav navbar-nav navbar-right">
              <li><a onClick={() =>this.props.appContext.handleLogout()}>Log out</a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><a >Action</a></li>
                  <li><a >Another action</a></li>
                  <li><a >Something else here</a></li>
                  <li><a >Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>{/*<!-- /.navbar-collapse -->*/}
        </nav>
   

       
      
        <div  className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{minWidth:570}}>    
          {this.state.screen} 
          
        </div>
       
       
      </div>
    )
}
}
export default UploadScreen;