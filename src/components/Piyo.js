import React, { Component } from "react";

// components
import PiyoChild from "./PiyoChild";

class Piyo extends Component {
  render() {
    const PiyoChildDom = this.props.piyoData.map(v => (
      <PiyoChild key={v.id} name={v.name} url={v.url} />
    ));
    return <ul>{PiyoChildDom}</ul>;
  }
}

export default Piyo;
