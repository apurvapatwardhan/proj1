import React, { useState } from "react";
import "./Tool.css"

function Tool(props) {
  const [count, setCount] = useState(0);
  const minusHandler = (e) => {
    props.setCount(props.count - 1);
  }
  const plusHandler = (e) => {
    props.setCount(props.count + 1);
  }
  return (
    <div className="tool">
      <div className="minus">
       <button onClick={minusHandler}>-</button>
      </div>
      <div className="num">{props.count}</div>
      <div className="plus">
        <button onClick={plusHandler}>+</button>
      </div>
    </div>
  );
}

export default Tool;
