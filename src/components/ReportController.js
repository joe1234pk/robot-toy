import React, { Component } from 'react';

export default class ReportController extends Component {
 render() {
    return (
      <button className="flex-fill btn btn-info" onClick={()=>{this.props.reportRobot(this.props.robot)}}>
        Report
      </button>
    )
  };
}


