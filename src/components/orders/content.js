import React, { Component } from 'react';

class Content extends Component {
  render() {

    const data = this.props.data
    return (
        <div className="checkout__content">
            <p>
            Thanks for your order {(data.firstName)}. We will ship that out as soon as possible to {(data.address)}.
            Have a nice day {(data.firstName)}!
            </p> 
        </div>
    )
  }
}
export default Content;