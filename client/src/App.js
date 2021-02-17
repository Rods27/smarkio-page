import React from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className="main">
      <LeftSide />
      <hr/>
      <RightSide />
    </div>
  );
}

export default App;
