import  React, { useState, useEffect } from 'react';

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

  function getAnswer() {
    setAnswer(answers[Math.floor(Math.random()*answers.length)]);
  }

  useEffect(() => {
    document.title = 'Dallin\'s RSVP';
  },[])
  
  return (
    <div>
      <h1>Will he come to the wedding?</h1>
      {answer ? <div><p>✨{answer}✨</p> <button onClick={getAnswer}>Get another answer!</button> </div>:
       <button onClick={getAnswer}>Click to find out!</button> }
    </div>
  );
}