import React from 'react'
import './ResultPizzas.css'
import { keywords } from '../data/keywords';
import pizzasJSON from '../data/pizzas.json'
import ResultPizza from './ResultPizza';


const ResultPizzas = (props) => {

    const { streamAudioData } = props;

    //console.log('ResultPizzas: ', streamAudioData)
    //console.log('ResultPizzas: ', keywords)

    // dal messaggio dell'utente estraggo le keywords corrispondenti
    let userMessageWordsArray = streamAudioData.split(' ')
    let matchedKeywords = []
    userMessageWordsArray.forEach(messageWord => {
        let matchKeyword = keywords.filter(keyword => keyword === messageWord)
        if (matchKeyword[0] !== undefined) matchedKeywords.push(matchKeyword[0])
        return matchedKeywords
    })

    // per ogni keyword verifico in quale pizza si trovi
    let matchedPizzas = []
    matchedKeywords.forEach(keyword => {
        for (let pizza in pizzasJSON) {
            if (pizzasJSON[pizza].ingridients.includes(keyword)) {
                // se l'array delle pizze contiene già la pizza non la inserisco
                if (!matchedPizzas.includes(pizzasJSON[pizza])) {
                    matchedPizzas.push(pizzasJSON[pizza])
                }
            }
        }

    })


    return (
        <div className="container-pizzas">
            {matchedPizzas.map((pizza, id) => {
                return <ResultPizza name={pizza.name}
                    ingridients={pizza.ingridients}
                    price={pizza.price}
                />
            })}
        </div>

    )
}


export default ResultPizzas


/*
    const matchedPizzas2 = [
        {
            name: 'margherita',
            ingridients: ['pomodoro', 'mozzarella'],
            price: 3
        },
        {
            name: 'marinara',
            ingridients: ['pomodoro', 'mozzarella', 'aglio', 'basilico'],
            price: 6.50
        },
        {
            name: 'marinara',
            ingridients: ['pomodoro', 'mozzarella', 'aglio', 'basilico'],
            price: 6.50
        },
        {
            name: 'marinara',
            ingridients: ['pomodoro', 'mozzarella', 'aglio', 'basilico'],
            price: 6.50
        },
        {
            name: 'marinara',
            ingridients: ['pomodoro', 'mozzarella', 'aglio', 'basilico'],
            price: 6.50
        },
        {
            name: 'marinara',
            ingridients: ['pomodoro', 'mozzarella', 'aglio', 'basilico'],
            price: 6.50
        },
        {
            name: 'marinara',
            ingridients: ['pomodoro', 'mozzarella', 'aglio', 'basilico'],
            price: 6.50
        }
    ]
*/