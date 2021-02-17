import React from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dark: false,
    };
    this.changeTheme = this.changeTheme.bind(this);
  }
  changeTheme() {
    const { dark } = this.state;
    const body = document.querySelector("body");
    const main = document.querySelector(".main");
    const hr = document.getElementsByTagName("hr")[0];
    const textarea = document.getElementsByTagName("textarea")[0];
    const button = document.getElementsByTagName("button");
    if (!dark) {
      for (let index = 0; index < button.length; index++) {
        button[index].style.backgroundColor = '#223C5B';
      }
      body.style.backgroundColor = 'rgb(13, 17, 23)';
      textarea.style.backgroundColor = 'rgb(141, 136, 136)';
      textarea.style.color = '#ece8e8'
      body.style.color = '#ece8e8';
      main.style.backgroundColor = '#333';
      hr.style.borderColor = '#BBB5B5'
      this.setState({ dark: true })
    } else {
      for (let index = 0; index < button.length; index++) {
        button[index].style.backgroundColor = '#275fb4';
      }
      body.style.backgroundColor = '#e2e2e2';
      textarea.style.backgroundColor = '#e2e2e2';
      textarea.style.color = '#333'
      body.style.color = '#333';
      main.style.backgroundColor = '#ffffff';
      hr.style.borderColor = '#333'
      this.setState({ dark: false })
    }
  }

  render(){
    return (
      <div className="main">
        <label class="switch" for="switch">
          <input id="switch" type="checkbox" name="theme" onClick={ this.changeTheme } />
          <span class="slider"></span>
        </label>
        <LeftSide />
        <hr/>
        <RightSide />
      </div>
    );
  }
}

export default App;
