import React from 'react'
import './ResultPizzas.css'
import { keywords } from '../../data/keywords';
import pizzasJSON from '../../data/pizzas.json'


const ResultPizzas = (props) => {

    const { streamAudioData } = props;

    //console.log('ResultPizzas: ', streamAudioData)
    //console.log('ResultPizzas: ', keywords)

    // dalla messaggio dell'utente estraggo le keywords corrispondenti
    let messaggeWordsArray = streamAudioData.split(' ')
    let matchedKeywords = []
    messaggeWordsArray.forEach(messaggeWord => {
        let matchKeyword = keywords.filter(keyword => keyword === messaggeWord) // modificare poi ingridients
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

    console.log(matchedPizzas)

    let pizzaItems = []
    let i = 0
    for (let matchedPizza of matchedPizzas) {
        i++
        pizzaItems.push(<li key={i} style={{ fontFamily: 'Consolas', fontSize: '2rem', color: 'white' }}>{matchedPizza.name}</li>)
    }


    return (
        <div>
            <ul>
                {pizzaItems}
            </ul>
        </div>

    )
}


export default ResultPizzas