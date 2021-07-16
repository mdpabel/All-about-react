import React, { Component } from "react";

class MyInput extends Component {
  _inputRef = React.createRef();
  focusInput = () => this._inputRef.current.focus();
  render() {
    return <input ref={this._inputRef} />;
  }
}

class App extends Component {
  _myInputRef = React.createRef();
  handleClick = () => this._myInputRef.current.focusInput();
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Focus on the input</button>
        <MyInput ref={this._myInputRef} />
      </div>
    );
  }
}

export default App;
