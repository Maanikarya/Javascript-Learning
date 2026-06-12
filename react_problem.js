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

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleSubmit = () => {
    if (!selectedOption) return;

    let newScore = score;

    if (selectedOption === questions[currentQuestion].correct) {
      setFeedback('Correct!');
      newScore++;
      setScore(newScore);
    } else {
      setFeedback('Incorrect!');
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    return (
      <div style={style.container}>
        <div id="feedback" style={style.feedback}>
          Quiz completed! Your score: {score} out of {questions.length}
        </div>
      </div>
    );
  }

  return (
    <div style={style.container}>
      <div id="question" style={style.question}>
        {questions[currentQuestion].question}
      </div>

      <div style={style.options}>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index + 1}`}
              name="answer"
              value={option}
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor={`option${index + 1}`}>
              {option}
            </label>
          </div>
        ))}
      </div>

      <button
        style={style.button}
        id="submitBtn"
        onClick={handleSubmit}
      >
        Submit
      </button>

      <div id="feedback" style={style.feedback}>
        {feedback}
      </div>
    </div>
  );
}