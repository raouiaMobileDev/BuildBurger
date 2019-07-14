import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/UI/Modal/OrderSummary/OrderSummary';
const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meet:1.3,
    //egg:0.7
}

class BurgerBuilder extends Component
{
    state={
        ingredients:{
            salad:0,
          //  Egg:0,
            cheese:0,
            meat:0
        },
        totalPrice:0,
        purchasable:false,
        purchasing:false
        
    };


    updatePurchaseState = (ingredients) =>{
      
        //exp map()
        //var array1 = [1, 4, 9, 16];
        //const map1 = array1.map(x => x * 2);
        // map1=[2, 8, 18, 32]
        
        const sum=Object.keys(ingredients)
        .map(key =>{
            return ingredients[key] //[1, 0, 0, 0]
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0)
        
        this.setState({purchasable:sum>0})
    }

addIngredientHandler = (type)=>
{
const updateCount = this.state.ingredients[type] +1;
const updateIngredient= {
 ...this.state.ingredients
}
updateIngredient[type]=updateCount
const newPrice= this.state.totalPrice+INGREDIENT_PRICES[type];

this.setState({ingredients:updateIngredient, totalPrice:newPrice})

this.updatePurchaseState(updateIngredient) 
}

removeIngredientHandler =(type) =>
{
    const oldCount = this.state.ingredients[type]
    if(oldCount <=0)
        return;
    const updateCount = oldCount - 1;
    const updateIngredient= {
     ...this.state.ingredients
    }
    updateIngredient[type]=updateCount
    const newPrice= this.state.totalPrice-INGREDIENT_PRICES[type];
    
    this.setState({ingredients:updateIngredient, totalPrice:newPrice})
    
    this.updatePurchaseState(updateIngredient) 
}

purchaseHandler = () => {
 this.setState({purchasing: true})
}

purchaseCancelHandler = ()=>{
    this.setState({purchasing: false})
}

purchaseContinueHandler = () =>{
    alert('You continue!')
}

    render(){
        const disabledInfo={ 
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <=0;
        }
        //this.updatePurchaseState()
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
                    <OrderSummary ingredients={this.state.ingredients} 
                                 price={this.state.totalPrice}
                                 purchaseCancelled={this.purchaseCancelHandler}
                                 purchaseContinued={this.purchaseContinueHandler}
                                 />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>  {/* <div> Burger</div>*/}
                <BuildControls  
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                    /> {/* <div> Builder controls</div> */}
            </Aux>
        )
    }
}

export default  BurgerBuilder;