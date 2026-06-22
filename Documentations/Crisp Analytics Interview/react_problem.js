import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  options: {
    marginBottom: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

function QuizApp() {
  // do not modify the questions or answers below
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];

  const [currentQuestionIndex , setCurrentQuestionIndex ] = useState(0);
  const [selectedOption , setSelectedOption ] = useState('');
  const [feedback , setFeedback ] = useState('');
  const [score , setScore ] = useState(0) ;
  const [isQuizCompleted , setIsQuizCompleted ] = useState(false); 

  const currentQuestion = questions[currentQuestionIndex];

  const handleSubmit = () => {
    if ( !selectedOption ) return ; 
    
    let isCorrect = selectedOption === currentQuestion.correct ; 

    if( isCorrect ) {
      setScore( score + 1 ); 
      setFeedback( 'Correct!' ); 
    } else {
      setFeedback ( 'InCorrect!' ); 
    }

    const nextQuestion = currentQuestionIndex + 1; 

    if( nextQuestion < questions.length ){
      setCurrentQuestionIndex(nextQuestion);
      setSelectedOption('');
    } else {
      setIsQuizCompleted(true);
    }
  };


 
  return (
    <div style={style.container}>
      { !isQuizCompleted ? 
      ( 
        <> 
          <div id="question" style={style.question}>
            {currentQuestion.question}
          </div>

          <div style={style.options}>
            {currentQuestion.options.map((option , index) => {
              return (
              <div key={index}>
                <input 
                  type = "radio"
                  id = {`option${index+1}`}
                  name = "quiz"
                  value = {option}
                  checked = {selectedOption == option}
                  onChange = { (e) => setSelectedOption(e.target.value) }
                />
                <label htmlFor={`option${index+1}`} >
                  {option}
                </label>
              </div>
              )
            })}
          
          </div>
          
          
          <button style={style.button} id="submitBtn" onClick = {handleSubmit}>
            Submit
          </button>
          
          <div id="feedback" style={style.feedback}>
            {feedback}
          </div>
        
        </> 
      
      ) : (
        <div id="feedback" style={style.feedback}>
            Quiz Completed! You scored {score} out of {questions.length}!
        </div>
      )}

    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<QuizApp />);