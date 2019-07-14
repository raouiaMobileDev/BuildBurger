import React from "react";
import style from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  //{ label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={style.BuildControls}>
  <p> <string> Current price: {props.price.toFixed(2)}</string></p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={()=>props.ingredientAdded(control.type)}
        removed={()=>props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button className={style.OrderButton}
     onClick={props.ordered} 
     disabled={!props.purchasable}> ORDER NOW </button>
    {/*
    <p> build control 1 </p>
    <p> build control 2</p>
    <p> build control 3</p>
*/}
  </div>
);

export default buildControls;
