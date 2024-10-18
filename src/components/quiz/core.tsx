import React, {
  useState, useEffect, useCallback, Fragment,
} from 'react';
import { nanoid } from 'nanoid';
import ProgressBar from './core-components/ProgressBar';
import QuizResultFilter from './core-components/QuizResultFilter';
import { checkAnswer, selectAnswer, rawMarkup } from './core-components/helpers';
import InstantFeedback from './core-components/InstantFeedback';
import Explanation from './core-components/Explanation';
import { AnswerButton } from './core-components/answer-btn';
import { Request } from '../api';
import { Question } from '.';

function Core({
  questions, appLocale, showDefaultResult, onComplete, customResultPage,
  showInstantFeedback, continueTillCorrect, revealAnswerOnSubmit, allowNavigation,
  onQuestionSubmit, timer, allowPauseTimer, enableProgressBar, progressBarColor, questionOneArticle
}: any) {
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [buttons, setButtons] = useState({});
  const [correct, setCorrect] = useState<any>([]);
  const [incorrect, setIncorrect] = useState<any>([]);
  const [unanswered, setUnanswered] = useState<any>([]);
  const [userInput, setUserInput] = useState<any>([]);
  const [filteredValue, setFilteredValue] = useState('all');
  const [userAttempt, setUserAttempt] = useState(1);
  const [showDefaultResultState, setShowDefaultResult] = useState(true);
  // const [answerSelectionTypeState, setAnswerSelectionType] = useState(undefined);

  const [totalPoints, setTotalPoints] = useState(0);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(questions[currentQuestionIndex]);
  const [questionSummary, setQuestionSummary] = useState<any>(undefined);
  const [timeRemaining, setTimeRemaining] = useState(timer);
  const [isRunning, setIsRunning] = useState(true);
  const [questionArticle, setQuestionArticle] = useState<any>(questionOneArticle)

  useEffect(() => {
    setShowDefaultResult(showDefaultResult !== undefined ? showDefaultResult : true);
  }, [showDefaultResult]);

  useEffect(() => {
    setActiveQuestion(questions[currentQuestionIndex]);
    
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    async function fetchArticleData(articleId: string) {
      const url = `https://${process.env.BUCKET_URL}/articles/${articleId}.json`
      const article = await Request(url);
      setQuestionArticle(article);
    }

    if (activeQuestion.article_id) {
      fetchArticleData(activeQuestion.article_id);
    }
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    if (endQuiz) {
      setIsRunning(false);
      let totalPointsTemp = 0;
      let correctPointsTemp = 0;
      for (let i = 0; i < questions.length; i += 1) {
        let point = questions[i].point || 0;
        if (typeof point === 'string') {
          point = parseInt(point, 10);
        }

        totalPointsTemp += point;

        if (correct.includes(i)) {
          correctPointsTemp += point;
        }
      }
      setTotalPoints(totalPointsTemp);
      setCorrectPoints(correctPointsTemp);
    }
  }, [endQuiz]);

  useEffect(() => {
    setQuestionSummary({
      numberOfQuestions: questions.length,
      numberOfCorrectAnswers: correct.length,
      numberOfIncorrectAnswers: incorrect.length,
      questions,
      userInput,
      totalPoints,
      correctPoints,
      timeTaken: timer - timeRemaining,
    });
  }, [totalPoints, correctPoints]);

  useEffect(() => {
    if (endQuiz && onComplete !== undefined && questionSummary !== undefined) {
      onComplete(questionSummary);
    }
  }, [questionSummary]);

  const nextQuestion = (currentQuestionIdx: any) => {
    setIncorrectAnswer(false);
    setIsCorrect(false);
    setShowNextQuestionButton(activeQuestion.questionIndex > (currentQuestionIdx + 2) ? true : false);
    setButtons({});

    if (currentQuestionIdx + 1 === questions.length) {
      if (userInput.length !== questions.length) {
        alert('Quiz is incomplete');
      } else {
        setEndQuiz(true);
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIdx + 1);
    }
  };

  const handleChange = (event: any) => {
    setFilteredValue(event.target.value);
  };

  const renderAnswerInResult = (question: any, userInputIndex: any) => {
    const { answers, correctAnswer, questionType } = question;
    let { answerSelectionType } = question;
    let answerBtnCorrectClassName;
    let answerBtnIncorrectClassName;

    // Default single to avoid code breaking due to automatic version upgrade
    answerSelectionType = answerSelectionType || 'single';

    return answers.map((answer: any, index: any) => {
      if (answerSelectionType === 'single') {
        // correctAnswer - is string
        answerBtnCorrectClassName = `${index + 1}` === correctAnswer ? 'correct' : '';
        answerBtnIncorrectClassName = `${userInputIndex}` !== correctAnswer
          && `${index + 1}` === `${userInputIndex}` ? 'incorrect' : '';

        if (userInputIndex === undefined && `${index + 1}` !== correctAnswer) {
          answerBtnIncorrectClassName = 'unanswered';
        }
      } else {
        // correctAnswer - is array of numbers
        answerBtnCorrectClassName = correctAnswer.includes(index + 1)
          ? ' bg-a6e0ba'
          : '';
        answerBtnIncorrectClassName = !correctAnswer.includes(index + 1)
          && userInputIndex?.includes(index + 1) ? 'incorrect' : '';

        if (userInputIndex === undefined && !correctAnswer.includes(index + 1)) {
          answerBtnIncorrectClassName = 'unanswered';
        }
      }

      return (
        <div key={nanoid()}>
          <button
            type="button"
            disabled
            className={`answerBtn btn transition bg-slate-100 border-[1px] border-black ${answerBtnCorrectClassName}${answerBtnIncorrectClassName}`}
          >
            {questionType === 'text' && <span>{answer}</span>}
            {questionType === 'photo' && <img src={answer} alt="answer" />}
          </button>
        </div>
      );
    });
  };

  const renderQuizResultQuestions = useCallback(() => {
    let filteredQuestions;
    let filteredUserInput: any;

    if (filteredValue !== 'all') {
      let targetQuestions = unanswered;
      if (filteredValue === 'correct') {
        targetQuestions = correct;
      } else if (filteredValue === 'incorrect') {
        targetQuestions = incorrect;
      }
      filteredQuestions = questions.filter(
        (_: any, index: any) => targetQuestions.indexOf(index) !== -1,
      );
      filteredUserInput = userInput.filter(
        (_: any, index: any) => targetQuestions.indexOf(index) !== -1,
      );
    }

    return (filteredQuestions || questions).map((question: any, index: any) => {
      const userInputIndex = filteredUserInput
        ? filteredUserInput[index]
        : userInput[index];

      return (
        <div className="result-answer-wrapper" key={nanoid()}>
          <h3
            dangerouslySetInnerHTML={rawMarkup(
              `Q${question.questionIndex}: ${question.question
              } ${appLocale.marksOfQuestion.replace('<marks>', question.point)}`,
            )}
          />
          <div className="result-answer grid grid-cols-2 gap-x-4 gap-y-4 mb-4 mt-4">
            {renderAnswerInResult(question, userInputIndex)}
          </div>
          {question.questionPic && (
            <img src={question.questionPic} alt="question" />
          )}
          <Explanation question={question} isResultPage />
        </div>
      );
    });
  }, [endQuiz, filteredValue]);

  const renderAnswers = (question: any, answerButtons: any) => {
    const {
      answers, correctAnswer, questionType, questionIndex,
    } = question;
    let { answerSelectionType } = question;
    const onClickAnswer = (index: any) => checkAnswer(index + 1, correctAnswer, answerSelectionType, answers, {
      userInput,
      userAttempt,
      currentQuestionIndex,
      continueTillCorrect,
      showNextQuestionButton,
      incorrect,
      correct,
      setButtons,
      setIsCorrect,
      setIncorrectAnswer,
      setCorrect,
      setIncorrect,
      setShowNextQuestionButton,
      setUserInput,
      setUserAttempt,
    });

    const onSelectAnswer = (index: any) => selectAnswer(index + 1, correctAnswer, answerSelectionType, answers, {
      userInput,
      currentQuestionIndex,
      setButtons,
      setShowNextQuestionButton,
      incorrect,
      correct,
      setCorrect,
      setIncorrect,
      setUserInput,
    });

    const checkSelectedAnswer = (index: any) => {
      if (userInput[questionIndex - 1] === undefined) {
        return false;
      }
      if (answerSelectionType === 'single') {
        return userInput[questionIndex - 1] === index;
      }
      return Array.isArray(userInput[questionIndex - 1]) && userInput[questionIndex - 1].includes(index);
    };

    // Default single to avoid code breaking due to automatic version upgrade
    answerSelectionType = answerSelectionType || 'single';

    return answers.map((answer: any, index: any) => (
      <AnswerButton key={nanoid()} onSelectAnswer={onSelectAnswer} answerButtons={answerButtons} answer={answer} nanoid={nanoid} index={index} questionType={questionType} onClickAnswer={onClickAnswer} checkSelectedAnswer={checkSelectedAnswer} revealAnswerOnSubmit={revealAnswerOnSubmit} allowNavigation={allowNavigation} questionArticle={questionArticle}/>
    ));
  };

  const getUnansweredQuestions = () => {
    questions.forEach((question: any, index: any) => {
      if (userInput[index] === undefined) {
        setUnanswered((oldArray: any) => [...oldArray, index]);
      }
    });
  };

  const renderResult = () => (
    <div className="card-body">
      <h2>
        {appLocale.resultPageHeaderText
          .replace('<correctIndexLength>', correct.length)
          .replace('<questionLength>', questions.length)}
      </h2>
      <h2>
        {appLocale.resultPagePoint
          .replace('<correctPoints>', correctPoints)
          .replace('<totalPoints>', totalPoints)}
      </h2>
      <br />
      <QuizResultFilter
        filteredValue={filteredValue}
        handleChange={handleChange}
        appLocale={appLocale}
      />
      {renderQuizResultQuestions()}
    </div>
  );

  useEffect(() => {
    let countdown: any;

    if (timer && isRunning && timeRemaining > 0) {
      countdown = setInterval(() => {
        setTimeRemaining((prevTime: any) => prevTime - 1);
      }, 1000);
    }
    return () => timer && clearInterval(countdown);
  }, [isRunning, timeRemaining, timer]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (time: any) => (time < 10 ? '0' : '');
  const displayTime = (time: any) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${formatTime(hours)}${hours}:${formatTime(minutes)}${minutes}:${formatTime(seconds)
      }${seconds}`;
  };

  const handleTimeUp = () => {
    setIsRunning(false);
    setEndQuiz(true);
    getUnansweredQuestions();
  };


  const renderArticleImage = () => {
    if (questionArticle) {
      if (questionArticle.images) {
        const imageUrl = `https://e0.365dm.com/24/10/384x216/${questionArticle.images[0].filename}`
        return (
            <img  className="w-full mb-2" src={imageUrl} alt={questionArticle.shortTitle} />
        )
      }
    }
}

  return (
    <div className="questionWrapper w-full">
      {enableProgressBar && (
        <>
          <div style={{ display: 'flex', width: '100%' }}>
            <ProgressBar
              progress={currentQuestionIndex + 1}
              quizLength={questions.length}
              isEndQuiz={endQuiz}
              progressBarColor={progressBarColor}
            />
          </div>
          <br />
        </>
      )}
      {timer && !isRunning && (
        <div>
          {appLocale.timerTimeTaken}
          :
          {' '}
          <b>{displayTime(timer - timeRemaining)}</b>
        </div>
      )}

      {timer && isRunning && (
        <div>
          {appLocale.timerTimeRemaining}
          :
          {' '}
          <b>
            {displayTime(timeRemaining)}
          </b>
        </div>
      )}
      {timer && timeRemaining === 0 && isRunning && handleTimeUp()}

      {!endQuiz && (
        <div className="questionWrapperBody">
          <div>
            {`${appLocale.question} ${currentQuestionIndex + 1} / ${questions.length
              }:`}
            <br />
            {timer && allowPauseTimer && (
              <button type="button" className="timerBtn" onClick={toggleTimer}>
                {isRunning ? appLocale.pauseScreenPause : appLocale.pauseScreenResume}
              </button>
            )}
          </div>
          {isRunning ? (
            <>
              <h3
                dangerouslySetInnerHTML={rawMarkup(
                  `${activeQuestion && activeQuestion.question
                  } ${appLocale.marksOfQuestion.replace(
                    '<marks>',
                    activeQuestion.point,
                  )}`,
                )}
              />
              {activeQuestion && activeQuestion.questionPic && (
                <img src={activeQuestion.questionPic} alt="question" />
              )}
              {/* {activeQuestion
                  && renderTags(
                    answerSelectionTypeState,
                    activeQuestion.correctAnswer.length,
                    activeQuestion.segment,
                  )} */}
              <div className="questionModal">
                <InstantFeedback
                  question={activeQuestion}
                  showInstantFeedback={showInstantFeedback}
                  correctAnswer={isCorrect}
                  incorrectAnswer={incorrectAnswer}
                  onQuestionSubmit={onQuestionSubmit}
                  userAnswer={[...userInput].pop()}
                />
              </div>
              <div className='grid grid-cols-2 gap-x-4 gap-y-4 mb-4 mt-4'>
                {activeQuestion && renderAnswers(activeQuestion, buttons)}
              </div>
              <div>
                {renderArticleImage()}
              </div>
              {/* {(showNextQuestionButton || allowNavigation) && ( */}
              <div className="flex justify-center w-full">
                {allowNavigation && currentQuestionIndex > 0 && (
                  <button
                    onClick={() => nextQuestion(currentQuestionIndex - 2)}
                    className={` prevQuestionBtn btn px-4 py-3 rounded w-[20%] bg-[var(--bg-blue)] text-white ease-in-out transition font-bold text-lg/[12px]`}
                    type="button"
                  >
                    {appLocale.prevQuestionBtn}
                  </button>
                )}

                {allowNavigation && currentQuestionIndex == 0 && (
                  <button
                    onClick={() => nextQuestion(currentQuestionIndex - 2)}
                    className={` prevQuestionBtn btn px-4 py-3 w-[20%] rounded hover:bg-[var(--bg-blue)] text-white ease-in-out transition font-bold text-lg/[12px] ${currentQuestionIndex == 0 ? 'bg-[#566b96] hover:bg-[#566b96] hover:pointer-events-none hover:cursor-default' : ''}`}
                    type="button"
                    disabled={true}
                  >
                    {appLocale.prevQuestionBtn}
                  </button>
                )}

                <button
                  onClick={() => nextQuestion(currentQuestionIndex)}
                  className={`nextQuestionBtn btn ppx-2 ml-4 w-[20%] rounded text-center hover:bg-[var(--bg-blue)] bg-[var(--bg-blue)]  text-white px-4 py-3  ease-in-out transition font-bold text-lg/[12px] ${!showNextQuestionButton ? 'text-slate-300 bg-[#566b96] hover:bg-[#566b96]' : ''}`}
                  type="button"
                  disabled={!showNextQuestionButton}
                >
                  {appLocale.nextQuestionBtn}
                </button>
              </div>
              {/* )} */}
            </>
          ) : (
            <span className="timerPauseScreen dark:text-white text-black">
              <br />
              <br />
              {appLocale.pauseScreenDisplay}
            </span>
          )}
        </div>
      )}
      {endQuiz && showDefaultResultState && customResultPage === undefined
        && renderResult()}
      {endQuiz && !showDefaultResultState && customResultPage !== undefined
        && customResultPage(questionSummary)}
    </div>
  );
}

export default Core;