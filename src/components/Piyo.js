import React, { Component } from "react";

// components
import PiyoChild from "./PiyoChild";

class Piyo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      piyoData: [
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
  }
  render() {
    const PiyoChildDom = this.state.piyoData.map(v => (
      <PiyoChild key={v.id} name={v.name} url={v.url} />
    ));
    return <ul>{PiyoChildDom}</ul>;
  }
}

export default Piyo;
