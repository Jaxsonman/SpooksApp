import React, { Component } from 'react';
import logo from './logo.png';
import casper from './ghost.jpg';
import who from './werewolf.jpg';
import sparkle from './vampire.jpg';
import zambie from './zombie.jpg';
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
          <div className='spacer70'></div>
          <div className='titles-and-stuff'>
            { Header() }
          </div>
          <div className='spacer60'></div>
          <div className='squaresWrapper'>
            <div className='square'>
              <img src={sparkle}/>
              <p>Got a vampire on your neck?</p>
              <br></br>
            </div>
            <div className='square'>
            <p>Do you have a werewolf hunting you?</p>
              <img src={who}/>
              <br></br>
            </div>
            <div className='square'>
              <img src={casper}/>
              <p>Ghost haunting your bedroom?</p>
              <br></br>
            </div>
            <div className='square'>            
            <p>Zombie gnawing your stump leg?</p>
              <img src={zambie}/>
              <br></br>
            </div>
          </div>
          <div className='spacer60'></div>

          <Link to='/order'>Proceed to Order Page</Link>
          <div className='spacer70'></div>
        

      </div>
    );
  }

  
  
}

export default Landing;