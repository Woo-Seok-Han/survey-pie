import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageA from './pages/PageA';
import PageB from './pages/PageB';

function App() {
  const questions = [
    {
      title: '질문1 입니다',
      description: '내용1 입니다',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문2 입니다',
      description: '내용2 입니다',
      type: 'select',
      required: false,
      options: {},
    },
    {
      title: '질문3 입니다',
      description: '내용3 입니다',
      type: 'textarea',
      required: false,
      options: {},
    },
  ];

  const step = 0;

  const [answers, setAnswers] = useState([]);

  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;

      return newAnswers;
    });
  };

  return (
    <div className="App">
      {/* <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={setAnswer}
      /> */}
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/2" element={<PageB />} />
      </Routes>
    </div>
  );
}

export default App;
