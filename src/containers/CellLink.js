import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from '../components/Cell';

export class CellLink extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return <Cell/>;
    
    
  }
}

const mapStateToProps = ({robot}) => {
    return {robot};
};
const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
