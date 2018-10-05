import React, { Component } from 'react';
import CheckoutInput from './checkoutInput';
import Content from './content';
import Header from '../header';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  residentState: '',
  zip: '',
  creditCard: '',
  phone: '',
  monster: ''
}

class Orders extends Component {

  constructor() {
    super()

    this.state = INITIAL_STATE

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault()

    if (this.state.contentVisible) {
      this.setState(INITIAL_STATE)
    } else {
      this.setState({ contentVisible: true })
    }

    this.setState({ contentVisible: !this.state.contentVisible })
  }

  render() {

    const inputData = [
      { title: 'First Name', state: this.state.firstName, name: 'firstName' },
      { title: 'Last Name', state: this.state.lastName, name: 'lastName' },
      { title: 'Address', state: this.state.address, name: 'address' },
      { title: 'City', state: this.state.city, name: 'city' },
      { title: 'State', state: this.state.residentState, name: 'residentState' },
      { title: 'Zip', state: this.state.zip, name: 'zip' },
      { title: 'Credit Card', state: this.state.creditCard, name: 'creditCard' },
      { title: 'Phone', state: this.state.phone, name: 'phone' },
      { title: 'Monster', state: this.state.monster, name: 'monster' }

    ]


    return (
    <div>
      <div className='titles-and-stuff'>
        { Header() }
      </div>
      <form onSubmit={this.handleFormSubmit} className="checkout" >
        <div className="checkout__inputs">
          {
            inputData.map((data, index) => {
              return CheckoutInput((data), this.handleInputChange, index)
            })
          }
        </div>
        <button className={`orders__${!this.state.contentVisible ? 'checkout' : 'clear'}`} type="submit">{this.state.contentVisible ? 'Cancel' : 'Checkout'} </button>
        {
          this.state.contentVisible ? <Content data={this.state} /> : ''
        }
      </form>
      </div>
    )


  }
}
export default Orders;