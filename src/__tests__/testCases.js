import robotReducers from '../reducers/robotReducers';
import * as actions from '../actions';
import * as keys from '../actions/types';

const initState = {x:0,y:0,f:'e'}; 

describe('Test examples ',()=>{
    // ##Example a

    //     PLACE 0,0,NORTH
    //     MOVE
    //     REPORT

    // Expected output:
    //     0,1,NORTH

    it('Test cases A',()=>{
        let actionPlace = actions.placeRobot(0,0,'n');
        console.log(actions.placeRobot(0,0,'n'));

        let outputOne = actionPlace.payload;
    
        let actionMove = actions.processMove(outputOne);
        let result =  {x:0,y:1,f:'n'};
         expect(robotReducers(outputOne, actionMove)).toEqual(result);
        }) ;

    // ### Example b

    //     PLACE 0,0,NORTH
    //     LEFT
    //     REPORT

    // Expected output:
    //     0,0,WEST    

    it('Test cases B',()=>{
        let actionPlace = actions.placeRobot(0,0,'n');
        let outputOne = actionPlace.payload;
    
        let result =  {x:0,y:0,f:'w'};
        expect(robotReducers(outputOne, actions.turnLeft(outputOne))).toEqual(result);
        }) ;
    
    //  ### Example c
    //     PLACE 1,2,EAST
    //     MOVE
    //     MOVE
    //     LEFT
    //     MOVE
    //     REPORT
    
    // Expected output
    //     3,3,NORTH   
     
    it('Test cases C',()=>{
        let init = {...initState};
        let outputOne = {...init, ...actions.placeRobot(1,2,'e').payload };
        let outputTwo = {...outputOne, ...actions.processMove(outputOne).payload};
        let outputThree = {...outputTwo, ...actions.processMove(outputTwo).payload};
        let outputFour = {...outputThree, ...actions.turnLeft(outputThree).payload};

        let result =  {x:3,y:3,f:'n'};
        expect(robotReducers(outputFour, actions.processMove(outputFour))).toEqual(result);
        }) ;
        

});

