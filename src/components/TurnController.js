import React, { Component } from 'react';

export default class TurnController extends Component {
  render() {
    return (
      <div>
         <button className={"flex-fill btn " + this.props.classes } onClick={e=> {this.props.handler(this.props.robot) }}>{this.props.text}</button>
      </div>
    )
  }
}
