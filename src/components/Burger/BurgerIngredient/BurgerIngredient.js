import React, {Component}  from 'react';

import style from "./BurgerIngredient.module.css";
import PropTypes from 'prop-types'

class BurgerIngredient extends Component{

    static propTypes = {
        type: PropTypes.string.isRequired
      }

  render(){

  let ingredient = null;

  switch (this.props.type) {
    case "bread-bottom":
      ingredient = <div className={style.BreadBottom} />;
      break;

    case "bread-top":
      ingredient = (
        <div className={style.BreadTop}>
          <div className={style.Seeds1}> </div>
          <div className={style.Seeds2}> </div>
        </div>
      );
      break;
    case "cheese":
      ingredient = <div className={style.Cheese} />;
      break;

    case "salad":
      ingredient = <div className={style.Salad} />;
      break;

    case "bacon":
      ingredient = <div className={style.Bacon} />;
      break;

      case "meat":
            ingredient = <div className={style.Meat} />;
            break;  


    default:
      ingredient = null;

  }
  return ingredient;
  

}
};


export default  BurgerIngredient;
