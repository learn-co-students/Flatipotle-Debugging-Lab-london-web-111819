import React from 'react'
import './App.css'
// import Form from './Form'
// import Order from './Order'
import Order from './components/Order'
import Form from './components/Form'

class App extends React.Component {
  state= {
    orders: []
  }

  addOrder = (order) => {
    this.setState({
      orders: this.state.orders.concat(order)
    })
  }

  render() {
    const orders = this.state.orders.map( (order, idx) => {
      return <Order key={idx} {...order} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={ require('./images/logo.png') } className="App-logo" alt="logo" />
        </header>

        <Form />

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            { orders }
          </div>
        </div>
      </div>
    )
  }
}

export default App
