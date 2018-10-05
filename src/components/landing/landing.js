import React, { Component } from 'react';
import Input from './input';

export default class Landing extends Component {
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
          <Input/>
      </div>
    );
  }
}
