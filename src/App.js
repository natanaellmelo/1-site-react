import React, { Component }  from 'react'
import './App.css'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoas'
import Frase  from './components/Frase.js'
import List from './components/List'
 
function App() {

  //variavel constante
  const nome = 'Bruno'


  return (
    
    <div className="App">
      <h1>Testando css</h1>
      <Frase />
      <Frase />
      <SayMyName nome= "Natanael"/>
      <SayMyName nome= {nome}/>
      <SayMyName nome= "Melo"/>
      <Pessoa nome="Natanael bruno de melo"
      idade="26"
      profissao="Programador"
      foto="https://via.placeholder.com/150"/>
      <List/>

    </div>
  )
}

export default App
