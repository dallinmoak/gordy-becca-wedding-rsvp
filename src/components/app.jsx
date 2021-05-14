import  React, { useState, useEffect } from 'react';
import gordyBecca from '../../static/gordy-becca.png';

export default function App(){
  const [ answer, setAnswer ] = useState('');
  const answers = [
    'h*ck yeah!',
    'you bet!',
    'oooooooooh yeeeeeeeeaaaaaaah',
    'probably...... jk yeah',
    'eh, fine',
    'sure, i guess'
  ]

  const answered =  (
    <div className="answer-wrapper app-item">
      <p className="app-item-content answer app-answer">✨{answer}✨</p>
      <button className=" app-item-content answer answer-button" onClick={getAnswer}>
        Get another one!
      </button>
    </div>   
  )
  const notAnswered = (
    <div className="answer-wrapper app-item">
      <button className=" app-item-content answer answer-button" onClick={getAnswer}>
        Click to find out!
      </button>
    </div>    
  )

  function getAnswer() {
    setAnswer(answers[Math.floor(Math.random()*answers.length)]);
  }

  useEffect(() => {
    document.title = 'Dallin\'s RSVP';
  },[])
  
  return (
    <div className="app-wrapper">
      <h1 className="app-header">Dallin: Will he come to the wedding?</h1>
      {answer ? answered : notAnswered }
      <div className="app-item img-item">
        <img className="app-item-content app-img" src={gordyBecca} alt="wedding invite" />
      </div>
    </div>
  );
}