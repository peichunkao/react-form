import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: []
    };
    this.createBox = this.createBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  removeBox(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }

  createBox(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    });
  }

  renderBox() {
    return (
      this.state.boxes.map(box => (
        <Box
          key={box.id}
          id={box.id}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          removeBox={this.removeBox}
        />
      ))
    )
  }

  render() {
    return (
      <div>
        <h1>Creat New Box!!</h1>
        <NewBoxForm createBox={this.createBox} />
        {this.renderBox()}
      </div>
    );
  }
}

export default BoxList;
