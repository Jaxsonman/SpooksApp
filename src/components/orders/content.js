import React, { Component } from 'react';
import VampireKit from './kits/vampireKit';
import WerewolfKit from './kits/werewolfkit';
import GhostKit from './kits/ghostKit';
import ZombieKit from './kits/zombieKit';

class Content extends Component {

  renderMonster() {
    if (this.props.data.monster === "vampire") {
      return <VampireKit />
    } else if (this.props.data.monster === "werewolf") {
      return <WerewolfKit />
    } else if (this.props.data.monster === "ghost") {
      return <GhostKit />
    } else if (this.props.data.monster === "zombie") {
      return <ZombieKit />
    } else {
      return " Not a valid Kit"
    }
  }
  render() {

    const data = this.props.data
    return (
        <div className="checkout__content">
            <div>
            Thanks for your order {(data.firstName)}. We will ship that out as soon as possible to {(data.address)}.
            Have a nice day {(data.firstName)}!

            Here is your kit {this.renderMonster()}
            </div> 
        </div>
    )
  }
}
export default Content;