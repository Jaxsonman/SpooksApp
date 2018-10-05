import React, { Component } from 'react';

class WerewolfKit extends Component {
  render() {
    return(
      <div className="kit__print__out">
        <h1>Your Werewolf Removal Kit</h1>
        <h3>This kit contains the following:</h3>
        <ol>
          <li>Silver Bullets</li>
          <li>Cow</li>
          <li>Werewolf Spray</li>
        </ol>
      </div>
    )
  }
}
export default WerewolfKit;