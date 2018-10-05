import React, { Component } from 'react';
import Orders from '../orders/orders';

export default class Landing extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <Orders />
      </div>
    );
  }
}
