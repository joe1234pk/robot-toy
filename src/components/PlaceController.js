import React, { Component } from 'react';
import { DIRECTIONS } from '../actions/types';

export default class PlaceController extends Component {
    inputY = ''; 
    inputX = '';
    inputF = '';
    directionOptions(){
      
       return Object.keys(DIRECTIONS).map((key)=>{
            return <option value={key} key={key}>{ DIRECTIONS[key] } </option>;
            
        });
    }
    onClickPlace(x,y,f){
        let isValid = true ;
        isValid = isValid && (x.length && 0<=x && x< 5 ? true :false);
        isValid = isValid && (y.length  && 0<=y && x< 5 ? true :false);

        if(isValid)
            this.props.placeRobot(x,y,f);
            else{
                alert('Invalid input. Valid input for both x and y is in range of 0 to 4');
                this.inputY.value = '';
                this.inputX.value = '';

            }
    }
  render() {
     
    return (
        <div className="form">
              <div className="row no-gutters">
        <div className="col-4">
            <input type="text" className="form-control" placeholder="x" ref={node => this.inputX = node} /> 
        </div>
        <div className="col-4"><input type="text" className="form-control" placeholder="y"  ref={node => this.inputY = node}/> </div>
        <div className="col-4">
            <select type="text" className="form-control" ref={node => this.inputF = node}>
                {this.directionOptions()}
            </select>
         </div>
        
      </div>
            <div className="form-group">
            <button className="btn btn-warning btn-block" onClick={(event)=>{this.onClickPlace(this.inputX.value,this.inputY.value,this.inputF.value);}}>Place</button>
            </div>
        </div>
    )
  }
}
