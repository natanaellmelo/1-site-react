import React, { Component }  from 'react'
import Item from './Iten'



function List(){
return(
    <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari"/>
            <Item marca="fiat"/>
            <Item marca= "Honda"/>
        </ul>
    </>
    )
}

export default List