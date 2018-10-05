import React, { Component } from 'react';
import Input from './input';
import logo from './logo.png';
import Header from './header';


export default class Landing extends Component {
  render() {
    return (
      <div className='app'>
          <div className='logo'>
            <img src={logo} alt="Profile image"/>
          </div>
          <div className='spacer60'></div>
          <div className='titles-and-stuff'>
            { Header() }
          </div>
          <div className='squaresWrapper'>
            <div className='square'>
              <img src=""/>
              <p>Got a vampire on your neck? We've got a kit for you!</p>
              <br></br>
            </div>
            <div className='square'>
            <p>Got a vampire on your neck? We've got a kit for you!</p>
              <img src=""/>
              <br></br>
            </div>
            <div className='square'>
              <img src=""/>
              <p>Got a vampire on your neck? We've got a kit for you!</p>
              <br></br>
            </div>
            <div className='square'>            
            <p>Got a vampire on your neck? We've got a kit for you!</p>
              <img src=""/>
              <br></br>
            </div>
          </div>
              <Input />
      </div>
    );
  }
}
