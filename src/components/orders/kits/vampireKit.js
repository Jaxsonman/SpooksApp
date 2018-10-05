import React, { Component } from 'react';

class VampireKit extends Component {

    // constructor() {
    //     super()

    //     this.state = INITIAL_CHECKOUT 
    // }


  render() {
    return(
        <div className="kit__print__out">
            <h1>Your Vampire Removal Kit</h1>
            <h3>This kit contains the following:</h3>
            <ol>
                <li>Garlic</li>
                <li>Cross</li>
                <li>Holy Water</li>
            </ol>
        </div>
    )
  }
}
export default VampireKit;

// print out kit title
// print out kit items
// create inputs
// checkout Button
// Binding to place info into a paragraph 
// delete breaks