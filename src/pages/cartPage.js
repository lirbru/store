import React, { Component } from 'react'

export default class CartPage extends Component {

    constructor() {
        super();
    }

    pay = () => {
        console.log('pay');
    }

    render() {
        const cart = this.props.cart;
        const total = this.props.total;
        const items = cart.map((item, index) => {
            return (
                <pre key={index}>{item[0].title}              {item[0].price}$ </pre>
            )
        })
        return (
            <div className='cartPage'>
                <div className='cartItems'>
                    {items} <br/>
                </div>
                <div className='total'>
                    <pre>Total          {total}$ </pre> <br/> <br/>
                    <button className='payBtn' onClick={this.pay} >Pay</button>
                </div>
            </div>
        )
    }
}
