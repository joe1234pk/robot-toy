import React, { Component } from 'react';
import { connect } from 'react-redux';
import {turnRight, turnLeft } from '../actions';
import TurnController from '../components/TurnController';

export class TurnControllerLink extends Component {

  render() {
    return <TurnController/>
  }
}

const mapStateToProps = ({robot},ownProps) => ({
    ...ownProps,
    robot
})

const mapDispatchToProps = (dispatch, ownProps) => {
    let handler;
    if(ownProps.type === 'l'){
        handler = (robot)=>{
            dispatch(turnLeft(robot));
        } 
    }
    else {
        handler = (robot)=>{
            dispatch(turnRight(robot));
        } 
    }
    return {handler};
}

export default connect(mapStateToProps, mapDispatchToProps)(TurnController)
