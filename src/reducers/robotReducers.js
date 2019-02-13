import * as keys from '../actions/types';
const initState = {x:0,y:0,f:[...Object.keys(keys.DIRECTIONS)].shift()};
export default (state= initState, action)=>{
    switch(action.type){
        case keys.PLACE_ROBOT:
            return action.payload;
        case keys.REPORT_ROBOT:
            return state;
        case keys.TURN_RIGHT:
            return { ...state,...action.payload } ;
        case keys.TURN_LEFT:
            return { ...state,...action.payload };
        case keys.MOVE_ROBOT:
        {
            return { ...state,...action.payload };
        }
        default:
        return state;
    }

}