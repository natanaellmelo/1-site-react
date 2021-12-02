import React, { Component }  from 'react'
import Styles from './FraseModule.css'


function Frase(){
    return (
        <div className={Styles.fraseContainer} >
            <p>Este é um componente com frase!</p>
        </div>
    )
}

export default Frase