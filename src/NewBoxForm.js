import React, { Component } from 'react'
import uuid from "uuid/v4";


class NewBoxForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
       width : "",
       height: "",
       backgroundColor: ""
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
    const newBox = {...this.state, id: uuid()}
    this.props.createBox(newBox)
    this.setState({
      width : "",
      height: "",
      backgroundColor: ""
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSumit}>
          <div>
            <lable htmlFor="width">Width:</lable>
            <input 
            type="text" 
            name="width"
            placeholder="width"
            value={this.state.width}
            onChange={this.handleChange}
            />
          </div>
          <div>
            <lable htmlFor="height">Height:</lable>
            <input 
            type="text"
            name="height"
            placeholder="height"
            value={this.state.height}
            onChange={this.handleChange}
            />
          </div>
          <div>
            <lable htmlFor="backgroundColor">BackgroundColor:</lable>
            <input 
            type="text"
            name="backgroundColor"
            placeholder="backgroundColor"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
            />
          </div>
          <button>Create a new box!</button>
        </form>
      </div>
    )
  }
}

export default NewBoxForm