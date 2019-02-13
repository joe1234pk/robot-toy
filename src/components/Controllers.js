import React from 'react';
import PlaceControllerLink from '../containers/PlaceControllerLink';
import ReportControllerLink from '../containers/ReportControllerLink';
import TurnControllerLink from '../containers/TurnControllerLink';
import MoveControllerLink from '../containers/MoveControllerLink';

export default ()=>  {
    return (
      <div className="">
        <h4>Control Panel</h4>
        <PlaceControllerLink/>
          <div className="">
          <div className="d-flex" role="group">
          <TurnControllerLink text="Left" classes="btn-success" type="l"/>
          <TurnControllerLink text="Right" classes="btn-primary" type="r"/>
          <MoveControllerLink/>
          <ReportControllerLink/>
          </div>
         
        </div>
    
      </div>
    )
}




// export default Controllers;
