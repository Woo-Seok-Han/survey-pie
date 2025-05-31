import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../components/ProgressIndicatior';
import QuestionBox from '../../components/QuestionBox';

function SurveyPage() {
  let params = useParams();

  const questions = [
    {
      title: '질문1 입니다',
      description: '내용1 입니다',
      type: 'text',
      required: false,
      options: {
        placeholder: 'placeholder 입니다',
      },
    },
    {
      title: '질문2 입니다',
      description: '내용2 입니다',
      type: 'textarea',
      required: false,
      options: {
        placeholder: '',
      },
    },
    {
      title: '질문3 입니다',
      description: '내용3 입니다',
      type: 'select',
      required: false,
      options: {
        placeholder: '',
      },
    },
  ];

  const step = parseInt(params.step) || 0;
  const [answers, setAnswers] = useState([]);

  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;

      return newAnswers;
    });
  };

  return (
    <>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={setAnswer}
      />
    </>
  );
}

export default SurveyPage;
