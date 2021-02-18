import React from 'react';
import { LeftSide, RightSide, ChangeTheme } from './components'

class App extends React.Component {
  render(){
    return (
      <div className="main">
        <ChangeTheme />
        <LeftSide />
        <hr/>
        <RightSide />
      </div>
    );
  }
}

export default App;
