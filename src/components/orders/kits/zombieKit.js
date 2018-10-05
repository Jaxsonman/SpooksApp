import React, { Component } from 'react';

class ZombieKit extends Component {
  render() {
    return(
      <div className="kit__print__out">
        <h1>Your Zombie Removal Kit</h1>
        <h3>This kit contains the following:</h3>
        <ol>
          <li>Shotgun</li>
          <li>Baseball bat with nails</li>
          <li>Machete</li>
        </ol>
      </div>
    )
  }
}
export default ZombieKit;