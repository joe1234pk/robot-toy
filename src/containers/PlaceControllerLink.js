import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaceController from '../components/PlaceController';
import { placeRobot } from '../actions';

export class PlaceControllerLink extends Component {


  render() {
    return <PlaceController/> ;
    
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    placeRobot
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceController);
