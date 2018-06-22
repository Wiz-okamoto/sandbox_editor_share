import React from "react";

const PiyoChild = props => (
  <li>
    {props.name}：
    <a href={props.url} target="_blank">
      {props.url}
    </a>
  </li>
);

export default PiyoChild;
