import React from 'react'
import './BodyContent.css'


const TextH2 = (props) => {

    const { page } = props;

    let bodyPage = ''

    const bodyPage1 = <p className="BodyContent">
        Attraverso la tua voce questa applicazione ti {"\n"}
        <span style={{ color: '#f9bc60' }}>suggerirà delle pizze</span> {"\n"}
        in base al condimento che preferisci.
    </p>

    const bodyPage2 = <p className="BodyContent">Facciamo un test del microfono.<br />Premi il pulsante qui sotto...</p>

    const bodyPage3 = <p className="BodyContent">
        Prova a dire{"\n"}
        <span style={{ color: '#f9bc60' }}>funghi</span> o {"\n"}
        <span style={{ color: '#f9bc60' }}>basilico</span> o {"\n"}
        <span style={{ color: '#f9bc60' }}>cipolla</span> o {"\n"}
        <span style={{ color: '#f9bc60' }}>gamberetti</span>...{"\n"}
        O qualsiasi altro gusto che interessa...
    </p>


    switch (page) {
        case 1:
            bodyPage = bodyPage1
            break;
        case 2:
            bodyPage = bodyPage2
            break;
        case 3:
            bodyPage = bodyPage3
            break;
        default:
            break;
    }


    return bodyPage
}

export default TextH2;