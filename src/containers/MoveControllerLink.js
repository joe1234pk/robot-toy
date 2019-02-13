import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MoveController} from '../components/MoveController';
import { processMove } from '../actions';

export class MoveControllerLink extends Component {
  render() {
    return <MoveController/> ;
  }
}

const mapStateToProps = ({robot}) => ({robot});

const mapDispatchToProps = {
    processMove
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveController)
