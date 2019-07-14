import React from 'react';
import style from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems =()=>(
    <ul className={style.NavigationItems}>
    {/* <li> <a href="/"> A link</a></li> 
    <NavigationItem link="/" active={true}> Burger Builder</NavigationItem> just for boolean*/}
    <NavigationItem link="/" active> Burger Builder</NavigationItem>
    <NavigationItem link="/"> Checkout</NavigationItem>
      
    </ul>

)
export default navigationItems;
