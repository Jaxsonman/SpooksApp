import React, { Component } from 'react';
import Orders from '../orders/orders';
import Input from './input';


class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsterInput: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.renderMonster = this.renderMonster.bind(this)
  }

  handleInputChange(event) {
        this.setState({monsterInput: event.target.value})
    }
  renderMonster() {
    if(this.state.monsterInput === "vampire") {
      return <VampireKit />
    } else if (this.state.monsterInput === "werewolf") {
      return <WerewolfKit />
    } else if (this.state.monsterInput === "ghost") {
      return <GhostKit />
    } else if (this.state.monsterInput === "zombie") {
      return <ZombieKit />
    }else {
      alert("that is not a valid option")
    }
  }

  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <Orders />
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
        {Input(this.state.monsterInput, this.handleInputChange)}
        <button onClick={this.renderMonster}>Click me</button>
        
      </div>
    );
  }

  
  
}

export default Landing;