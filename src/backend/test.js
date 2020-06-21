const pizzasJSON = require('../data/pizzas.json')

let ingridients = ['origano',
    'aglio',
    'basilico',
    'tonno',
    'cipolla',
    'gamberetti',
    'funghi',
    'prosciutto'
]


let messagge = 'i funghi e cipolla'

// dalla messaggio dell'utente estraggo le keywords corrispondenti
let messaggeWordsArray = messagge.split(' ')
let matchedKeywords = []
messaggeWordsArray.forEach(messaggeWord => {
    let matchKeyword = ingridients.filter(keyword => keyword === messaggeWord) // modificare poi ingridients
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
/*
for (let pizza in pizzasJSON) {
    matchedKeywords.forEach(keyword => {
        let bo = pizzasJSON[pizza].ingridients.filter(ingridient => ingridient == keyword)
        console.log(pizzasJSON[pizza].name)
    })


}
*/




