import React, { Component } from 'react';
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
        <h1>Spooks Be Gone!</h1>
        <h2>Whats Spookin you?</h2>
        <div> 
          <img src=""/>
          got a vampire on your neck? we've got a kit for you!
          <br></br>
          <img src=""/>
          if you have a werewolf hunting your kids? we have a kit a for that!
          <br></br>
          <img src=""/>
          ghost watching you sleep? we have a solution for you!
          <br></br>
          <img src=""/>
          zombies banging your door down? our newest kit has a solution for you!
        </div>
          <Link to='/order'>Proceed to Order Page</Link>
        
      </div>
    );
  }

  
  
}

export default Landing;