import React, { Component } from 'react';
import * as actions from './actions';
import { TABLE_AXIS_MAX } from './actions/types';
import {connect} from 'react-redux';
import CellLink from './containers/CellLink';
import Controllers from './components/Controllers';

// import logo from './logo.svg';
// import './App.css';

const Header = () =>(
    <div className="text-center mt-3">
      <h2>Robot game!!!</h2>
    </div>
);
class App extends Component {
  Table = ()=>{
  let length = TABLE_AXIS_MAX ;
  let table = [] ;
    for(let i=0;i<length;i++){
      let children = [];
      for(let j=0;j<length;j++){
        children.push(<CellLink  key={[i,length-1-j].join('-')}  x={j} y={length - i -1} />);
      }
      table.push(
        <tr  key={i}>
          { children }
        </tr>
        );
    }
    return table;
  }
 
  render() {
    return (
      <div className="container">
        <Header/>
        <div className="row  mt-5">
        <div className="col-lg-8">
          <table className="table table-square table-bordered mx-auto">
            <tbody>
              {
                this.Table()
              }
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <Controllers/>
        </div>
        </div>
        
      </div>
    )
  }
}

export default connect(null,actions)(App);

