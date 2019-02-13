import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReportController from '../components/ReportController';
import { reportRobot } from '../actions/index';

export class ReportControllerLink extends Component {

  render() {
    return <ReportController/>
  }
}

const mapStateToProps = ({robot}) => ({
    robot    
});

const mapDispatchToProps = {
    reportRobot
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportController);
