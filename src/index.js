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
    this.state = {
      piyo: [
        {
          id: 1,
          name: "piyo太郎",
          url: "https://google.com"
        },
        {
          id: 2,
          name: "piyo子",
          url: "https://yahoo.co.jp"
        }
      ]
    };
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
        <Piyo piyoData={this.state.piyo} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
