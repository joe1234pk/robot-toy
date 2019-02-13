import * as keys from './types';

let rotationArray = [...Object.keys(keys.DIRECTIONS)];

export const placeRobot = (x,y,f) =>{
    return {
        type:keys.PLACE_ROBOT,
        payload:{
            x:Number(x),
            y:Number(y),
            f
        }
    }
};

export const reportRobot = ({x,y,f}) =>{
    let text = [x,y,keys.DIRECTIONS[f].toUpperCase()].join(', ');
    alert(text);
    return {
        type:keys.REPORT_ROBOT,
        payload: text,
    } ;  
};

export const turnRight = (robot) =>{
    let directionInex = rotationArray.findIndex((d)=>(d === robot.f));
    let curDirectionIndex =  rotateRight(directionInex);
    return {
        type: keys.TURN_RIGHT,
        payload:{
            f:rotationArray[curDirectionIndex]
        }
    };
};

export const turnLeft = (robot) =>{
    let directionInex = rotationArray.findIndex((d)=>(d === robot.f));
    let curDirectionIndex =  rotateLeft(directionInex);
    return {
        type: keys.TURN_LEFT,
        payload:{
            f:rotationArray[curDirectionIndex]
        }
    };
};

export const processMove = (robotState) =>{
    let inverseDict = rotationArray.reduce((carry,d)=>{
            carry[keys.DIRECTIONS[d]] = d
            return carry ;
    },{});
    let robotNewState;
    switch(robotState.f){
        case inverseDict["South"]:{
            if(robotState.y - 1 >= 0)
                robotNewState = {...robotState, y: robotState.y - 1 };
            else
                robotNewState = {...robotState};
            
            break; 
        }
        case inverseDict["North"]:{
            if(robotState.y + 1 < keys.TABLE_AXIS_MAX)
                robotNewState = {...robotState, y: robotState.y + 1 };
            else
                robotNewState = {...robotState};
        
            break; 
    
        }
        case inverseDict["West"]:{
            if(robotState.x -1 >= 0)
            robotNewState = {...robotState, x: robotState.x - 1 };
            else
                robotNewState = {...robotState};
        
            break; 
        }
        case inverseDict["East"]:{
            if(robotState.x + 1 < keys.TABLE_AXIS_MAX)
            robotNewState = {...robotState, x: robotState.x + 1 };
            else
                robotNewState = {...robotState};
        
            break; 
        }
      
        default:
        robotNewState = {...robotState};
    }
    
    return {
        type: keys.MOVE_ROBOT,
        payload:robotNewState
    };
};

function rotateLeft(index){
   
    if(index -1 < 0)
    {
        return rotationArray.length - 1;
    }
    
    return index - 1;
}


function rotateRight(index){
    
    if(index + 1 > rotationArray.length - 1)
    {
        return 0;
    }
    
    return index + 1;
}
