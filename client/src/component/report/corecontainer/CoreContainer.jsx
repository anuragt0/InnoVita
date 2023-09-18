import React from 'react';
import '../css/core.css';

const CoreContainer = () => {
  return (
    <div className="coreContainer">
      <div className="coreHeader">
        <h5>Don't miss a trade</h5>
        <h1 className="coreTitle">Streak Highlights</h1>
        <h5 className="coreSubTitle">
          Streak provides all you need to trade in this modern age in one platform.
          Following are the three key features we would like to highlight, and there
          is a lot more in store.
        </h5>
      </div>
      <div className="coreContent hideScrollbar">
        {/* Add core cards here */}
      </div>
    </div>
  );
};

export default CoreContainer;
