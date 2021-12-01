import React, { Component }  from 'react';
import './App.css';
import HelloWord from './components/HelloWord'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoas';
 
function App() {

  //variavel constante
  const nome = 'Bruno'


  return (
    <div className="App">

      <HelloWord/>
      <SayMyName nome= "Natanael"/>
      <SayMyName nome= {nome}/>
      <SayMyName nome= "Melo"/>
      <Pessoa nome="Natanael bruno de melo" idade="26" profissao="Programador" foto="https://via.placeholder.com/150"/>

    </div>
  )
}

export default App
