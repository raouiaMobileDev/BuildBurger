import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from "./Burger.module.css";

const burger = props => {
  
        let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => { // [Array(1), Array(1), Array(2), Array(2)] .map( column, ligne)
                return <BurgerIngredient key={igKey + i} type={igKey} />; 
            })
        })
        .reduce((arr,el)=>{
            return arr.concat(el) //to get one array []
        })

        console.log(transformedIngredients );

        if(transformedIngredients.length===0)
        transformedIngredients= <p> Please adding ingredients</p>

  /*
        let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )]
        })
        console.log(transformedIngredients)
*/

  

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
        {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    {/*
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="salad" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="bread-bottom" />
      */}
    </div>
  );
};

export default burger;
