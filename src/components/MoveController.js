import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MoveController extends Component {
  static propTypes = {
    robot: PropTypes.object,
    processMove:PropTypes.func
  }

  render() {
    return (
      <div>
        <button className="flex-fill btn btn-light" onClick={ () => {this.props.processMove(this.props.robot)}}>Move </button>
      </div>
    )
  }
}



