import React, { Component } from 'react';

import logo from './logo.png';
import Header from './header';

import {Link} from 'react-router-dom';


class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsterInput: ''
    }
  }

  handleInputChange(event) {
        this.setState({monsterInput: event.target.value})
    }


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

          <Link to='/order'>Proceed to Order Page</Link>
        

      </div>
    );
  }

  
  
}

export default Landing;