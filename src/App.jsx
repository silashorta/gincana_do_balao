import React, { useState } from 'react';
import data from './data';
import './App.css'

import backgroundImage from '../public/img/bg.avif';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const perguntas = data;

  const handleNextQuestion = () => {
    const nextIndex = Math.floor(Math.random() * perguntas.length);
    setCurrentQuestionIndex(nextIndex);
  };

  return (
    <div className='container'>
      <div className="bloco" key={perguntas[currentQuestionIndex].id}>
        <h1>Gincana do Balão</h1>
        <div className='perguntaId'>Pergunta <span className='id'>#{perguntas[currentQuestionIndex].id}</span></div>
        <div>{perguntas[currentQuestionIndex].perguntas}</div>
        <div>{perguntas[currentQuestionIndex].alternativas}</div>
        <div><strong>Resposta:</strong> {perguntas[currentQuestionIndex].respostas}</div>
        <button className='botao' onClick={handleNextQuestion}>Próxima</button>
      </div>
    </div>
  );
}

export default App;


