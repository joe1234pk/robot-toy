import React, { Component } from 'react';

// import PropTypes from 'prop-types';


export class Cell extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  robotIsHere(){
    let robot = this.props.robot;
    return this.props.x === robot.x && this.props.y === robot.y;

  }
  angleClass(){
    let robotState = {...this.props.robot};

    switch(robotState.f){
        case 's': { return 'down'; }
        case 'n': {return 'up'; }
        case 'w': {return 'left';}
        case 'e': {return 'right';}
        default: return '';
    }
  }
  iconStyle(){
    return {
      display:this.robotIsHere()?'block':'none',
      color:'#ff2800'
    }
  }

  render() {
    return (
          <td className="cell">
            <div className={"robot-spot " + (this.robotIsHere()?'active':'') } >
             <i className={"fa-3x far fa-arrow-alt-circle-" + this.angleClass()} style={this.iconStyle()}></i></div>
          </td>
    )
  }
}
export default Cell;
