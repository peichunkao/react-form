import React, { Component } from 'react'

class MultipleInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
       userName : "",
       email: "",
       password: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSumit = this.handleSumit.bind(this)
  }
  
  handleChange(evt) {
    this.setState(
      {[evt.target.name]:evt.target.value}
    )
  }

  handleSumit(evt) {
    evt.preventDefault()
    //alert(`You typed: ${this.state.userName}!`);

    this.setState({
      userName : "",
      email: "",
      password: ""
    })
  }
  
  render() {
    return (
      <div>
        <h1>Form Demo!</h1>
        <form onSubmit={this.handleSumit}>
          <input 
          type="text" 
          name="userName"
          value={this.state.userName}
          onChange={this.handleChange}
          />
          <input 
          type="email"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
          />
          <input 
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
          />
          <button>Submit the form.</button>
        </form>
      </div>
    )
  }

}

export default MultipleInput