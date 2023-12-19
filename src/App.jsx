import React, { useState, useEffect } from 'react';
import data from './data';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [usedQuestionIndices, setUsedQuestionIndices] = useState([]);
  const perguntas = data;

  const [viewResposta, setViewResposta] = useState(false);
  const [buttonNext, setButtonNext] = useState(false)
  const [buttonResposta, setButtonResposta] = useState(true)

  const handleNextQuestion = () => {
    let nextIndex;

    // Enquanto houver perguntas não utilizadas, selecione aleatoriamente
    do {
      nextIndex = Math.floor(Math.random() * perguntas.length);
    } while (usedQuestionIndices.includes(nextIndex));

    // Adiciona o índice usado ao histórico
    setUsedQuestionIndices((prevIndices) => [...prevIndices, nextIndex]);

    setCurrentQuestionIndex(nextIndex);
    setViewResposta(false);
    setButtonResposta(true)
    setButtonNext(false)
  };

  const visualizaResposta = () => {
    setViewResposta(true);
    setButtonResposta(false)
    setButtonNext(true)
  };

  // Reinicia o histórico de perguntas quando todas foram usadas
  useEffect(() => {
    if (usedQuestionIndices.length === perguntas.length) {
      setUsedQuestionIndices([]);
    }
  }, [usedQuestionIndices, perguntas.length]);

  return (
    <div className='container' data-aos="fade">
      <div className="bloco" key={perguntas[currentQuestionIndex].id}>
        <h1>Gincana do Balão</h1>
        <div className='perguntaId'>Pergunta <span className='id'>#{perguntas[currentQuestionIndex].id}</span></div>
        <div>{perguntas[currentQuestionIndex].perguntas}</div>
        <div>
          {Array.isArray(perguntas[currentQuestionIndex].alternativas) ? (
            perguntas[currentQuestionIndex].alternativas.map((alternativa, index) => (
              <div key={index}>{alternativa}</div>
            ))
          ) : (
            <div>{perguntas[currentQuestionIndex].alternativas}</div>
          )}
        </div>
        {buttonResposta && (
          <button className='botao' onClick={visualizaResposta}>Resposta</button>
        )}
        {viewResposta && (
          <div className='resposta'><strong>Resposta:</strong> {perguntas[currentQuestionIndex].respostas}</div>
        )}
        {buttonNext && (
          <button className='botao botao__next' onClick={handleNextQuestion}>
            <i className='bx bx-right-arrow-alt'></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
