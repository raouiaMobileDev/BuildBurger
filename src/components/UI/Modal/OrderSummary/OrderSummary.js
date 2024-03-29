import React from 'react';
import Aux from '../../../../hoc/Aux';
import Button from '../Button/Button';

const orderSummary = props => {
    const ingredientsSummary=Object.keys(props.ingredients).map(key=>{
    return (<li key ={key}>
        <span style={{textTransform:"capitalize"}}>{key} </span>: {props.ingredients[key]}
        </li>)
        });


return(
<Aux>
<h3> Your Order</h3>
<p> A delicious Burger with the following ingredients: </p>
<ul>
{ingredientsSummary}
</ul>
<p><strong>Total price: {props.price.toFixed(2)}</strong></p>
<p>Continue to check out</p>

<Button btnType="Danger" clicked={props.purchaseCancelled}> CANCEL</Button>
<Button btnType="Success" clicked={props.purchaseContinued}> CONTINUE</Button>
{/*
<button> CANCEL</button>
<button>CONTINUE</button>
*/}
</Aux>
)
}
export default orderSummary;