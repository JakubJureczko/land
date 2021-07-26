import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <>
      <div className="btn">
        <button type="button" onClick={props.handleClick}>
          <p>{props.title}</p>
        </button>
      </div>
    </>
  );
};
export default Button;
