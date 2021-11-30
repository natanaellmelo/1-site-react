import React, { Component }  from 'react';
import './App.css';

function App() {
  //variaveis
const name = 'Natanael'
  //processando uma variavel
  const newName = name.toUpperCase()

  function sum (a, b){
    return a + b
  }

  const url = 'https://d2r9epyceweg5n.cloudfront.net/stores/001/137/101/themes/style/slide-1626429290310-6872747904-f61e3ff86951b4b4122e0dceb18c3b671626429294-1920-1920.jpg?871424445'


  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <p>Olá, {newName}</p>
      <p>Soma:{ sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem"/>
    </div>
  );
}

export default App;
