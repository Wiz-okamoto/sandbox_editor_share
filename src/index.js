import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// component
import Hoge from "./components/Hoge";
import Fuga from "./components/Fuga";
import Piyo from "./components/Piyo";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(e) {
    alert("buttonClick!");
  }

  render() {
    return (
      <div className="App">
        <Hoge text="hogehoge" />
        <Fuga onClickHandler={this.onClickHandler} />
        <Piyo />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
