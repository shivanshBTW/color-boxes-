import React, { Component } from 'react';
import './ColorBox.css';
import { randArr } from './helpers.js';

export default class ColorBox extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    var firstRand = randArr(this.props.colorArray);
    this.state = {
      boxColor: firstRand
    };
  }
  changeCol = () => {
    let tempCol = randArr(this.props.colorArray);
    if (tempCol !== this.state.boxColor) {
      this.setState({ ...this.state, boxColor: tempCol });
    } else {
      this.changeCol();
    }
  };
  render() {
    var divStyle = {
      backgroundColor: this.state.boxColor
    };
    return <div className="ColorBox" onClick={this.changeCol} style={divStyle} />;
  }
}
