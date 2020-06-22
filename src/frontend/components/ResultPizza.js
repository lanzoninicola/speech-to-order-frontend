import React from 'react'
import './ResultPizza.css'


const ResultPizza = (props) => {


    const { name, ingridients, price } = props

    const ingridientList = ingridients.join(', ')

    return (
        <div className="item-pizza">
            <h3 id="pizzaName">{name.toUpperCase()}</h3>
            <p id="pizzaIngridients">{ingridientList}</p>
            <p id="pizzaPrice">Prezzo: {price}€</p>
        </div>
    )
}

export default ResultPizza