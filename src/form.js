import React, { Component } from 'react'

class form extends Component {
  constructor(props) {
    super(props)
    this.state = {
       userName : "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSumit = this.handleSumit.bind(this)
  }
  
  handleChange(evt) {
    this.setState(
      {userName:evt.target.value}
    )
  }

  handleSumit(evt) {
    evt.preventDefault()
    //alert(`You typed: ${this.state.userName}!`);

    this.setState({userName: ""});
  }
  
  render() {
    return (
      <div>
        <h1>Form Demo!</h1>
        <form onSubmit={this.handleSumit}>
          <lable htmlFor="username">UserName</lable>
          <input 
          type="text" 
          id="username"
          value={this.state.userName}
          onChange={this.handleChange}
          />
          <button>Submit the form.</button>
        </form>
      </div>
    )
  }

}

export default form