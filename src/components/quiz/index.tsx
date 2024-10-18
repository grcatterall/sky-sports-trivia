import React, { useState, useEffect, useCallback } from 'react';
import Core from './core';
import defaultLocale from './Locale';
import './styles.css';
import { Request } from '../api';


interface QuizProps {
    quiz: Quiz;
    shuffle?: boolean;
    showInstantFeedback?: boolean;
    continueTillCorrect?: boolean;
    onComplete?: (obj: any) => void;
    timer?: any;
    disableSynopsis?: any;
    allowPauseTimer?: any;
    customResultPage?: any;
    revealAnswerOnSubmit?: any;
    allowNavigation?: any;
    onQuestionSubmit?: any;
    shuffleAnswer?: any;
    showDefaultResult?: any;
    enableProgressBar?: any;
}

export type Quiz = {
    quizTitle: string;
    quizSynopsis?: string;
    nrOfQuestions?: number;
    appLocale?: any;
    questions: Question[];
    progressBarColor?: any;
}

export type Question = {
    question: string;
    questionType: 'text' | 'photo';
    questionPic?: string; // Optional property for images in questions
    answerSelectionType: 'single' | 'multiple';
    answers: string[];
    correctAnswer: string | string[]; // Can be a single string or an array for multiple correct answers
    messageForCorrectAnswer: string;
    messageForIncorrectAnswer: string;
    explanation: string;
    point: string;
    article_id?: string;
}

export const Quiz = ({
    quiz,
    shuffle,
    showDefaultResult,
    onComplete,
    customResultPage,
    showInstantFeedback,
    continueTillCorrect,
    revealAnswerOnSubmit,
    allowNavigation,
    onQuestionSubmit,
    disableSynopsis,
    timer,
    allowPauseTimer,
    enableProgressBar
}: QuizProps) => {
    const [start, setStart] = useState(false);
    const [questions, setQuestions] = useState(quiz.questions);
    const [questionArticle, setQuestionArticle] = useState<any>({});
    const nrOfQuestions = quiz.nrOfQuestions && quiz.nrOfQuestions < quiz.questions.length
        ? quiz.nrOfQuestions
        : quiz.questions.length;

    // Shuffle answers funtion here
    const shuffleAnswerSequence = (oldQuestions: Question[]): any => {
        const newQuestions = oldQuestions.map((question) => {
            const answerWithIndex = question.answers?.map((ans, i) => [ans, i]);
            const shuffledAnswersWithIndex = answerWithIndex.sort(
                () => Math.random() - 0.5,
            );
            const shuffledAnswers = shuffledAnswersWithIndex.map((ans) => ans[0]);
            if (question.answerSelectionType === 'single') {
                const oldCorrectAnswer = question.correctAnswer;
                const newCorrectAnswer = shuffledAnswersWithIndex.findIndex(
                    (ans) => `${parseInt(String(ans[1])) + 1}` === `${oldCorrectAnswer}`,
                ) + 1;
                return {
                    ...question,
                    correctAnswer: `${newCorrectAnswer}`,
                    answers: shuffledAnswers,
                };
            }
            if (question.answerSelectionType === 'multiple') {
                const oldCorrectAnswer = [question.correctAnswer];
                const newCorrectAnswer = oldCorrectAnswer.map(
                    (cans) => shuffledAnswersWithIndex.findIndex(
                        (ans) => `${parseInt(String(ans[1])) + 1}` === `${cans}`,
                    ) + 1,
                );
                return {
                    ...question,
                    correctAnswer: newCorrectAnswer,
                    answers: shuffledAnswers,
                };
            }
            return question;
        });
        return newQuestions;
    };
    const shuffleQuestions = useCallback((q: any) => {
        for (let i = q.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [q[i], q[j]] = [q[j], q[i]];
        }
        return q;
    }, []);

    useEffect(() => {
        if (disableSynopsis) setStart(true);
    }, []);

    useEffect(() => {
        let newQuestions = quiz.questions;

        if (shuffle) {
            newQuestions = shuffleQuestions(newQuestions);
        }

        if (shuffle) {
            newQuestions = shuffleAnswerSequence(newQuestions);
        }

        async function fetchArticleData(articleId: string) {
          const url = `https://${process.env.NEXT_PUBLIC_BUCKET_URL}/articles/${articleId}.json`
          const article = await Request(url);
          setQuestionArticle(article);
        }
    
        if (newQuestions[0].article_id) {
          fetchArticleData(newQuestions[0].article_id);
        }

        newQuestions.length = nrOfQuestions;
        newQuestions = newQuestions.map((question, index) => ({
            ...question,
            questionIndex: index + 1,
        }));
        setQuestions(newQuestions);
    }, [start]);

    const validateProgressBarColor = (inputColor: string) => {
        const hexaPattern = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
        return hexaPattern.test(inputColor);
    };

    const validateQuiz = (q: any) => {
        if (!q) {
            console.error('Quiz object is required.');
            return false;
        }

        if ((timer && typeof timer !== 'number') || (timer < 1)) {
            console.error(timer && typeof timer !== 'number' ? 'timer must be a number' : 'timer must be a number greater than 0');
            return false;
        }

        if (allowPauseTimer && typeof allowPauseTimer !== 'boolean') {
            console.error('allowPauseTimer must be a Boolean');
            return false;
        }

        if (enableProgressBar && typeof enableProgressBar !== 'boolean') {
            console.error('enableProgressBar must be a Boolean');
            return false;
        }

        if ('progressBarColor' in quiz) {
            if (typeof quiz.progressBarColor !== 'string') {
                console.error('progressBarColor must be a String');
                return false;
            }

            if (!validateProgressBarColor(quiz.progressBarColor)) {
                console.error('progressBarColor must be a valid hex colour');
                return false;
            }
        }

        for (let i = 0; i < questions.length; i += 1) {
            const {
                question,
                questionType,
                answerSelectionType,
                answers,
                correctAnswer,
            } = questions[i];
            if (!question) {
                console.error("Field 'question' is required.");
                return false;
            }

            if (!questionType) {
                console.error("Field 'questionType' is required.");
                return false;
            }
            if (questionType !== 'text' && questionType !== 'photo') {
                console.error(
                    "The value of 'questionType' is either 'text' or 'photo'.",
                );
                return false;
            }

            if (!answers) {
                console.error("Field 'answers' is required.");
                return false;
            }
            if (!Array.isArray(answers)) {
                console.error("Field 'answers' has to be an Array");
                return false;
            }

            if (!correctAnswer) {
                console.error("Field 'correctAnswer' is required.");
                return false;
            }

            let selectType = answerSelectionType;

            if (!answerSelectionType) {
                // Default single to avoid code breaking due to automatic version upgrade
                console.warn(
                    'Field answerSelectionType should be defined since v0.3.0. Use single by default.',
                );
                selectType = answerSelectionType || 'single';
            }

            if (
                selectType === 'single'
                && !(typeof selectType === 'string')
            ) {
                console.error(
                    'answerSelectionType is single but expecting String in the field correctAnswer',
                );
                return false;
            }

            if (selectType === 'multiple' && !Array.isArray(correctAnswer)) {
                console.error(
                    'answerSelectionType is multiple but expecting Array in the field correctAnswer',
                );
                return false;
            }
        }

        return true;
    };

    if (!validateQuiz(quiz)) {
        return null;
    }

    const appLocale = {
        ...defaultLocale,
        ...quiz.appLocale,
    };

    return (
        <div className="react-quiz-container mx-auto md:w-[50%] xl:min-w-full w-[95%] mb-5">
            <h1 className='md:text-3xl sm:text-2xl text-xl mb-1'>Weekly Sports News Quiz - {quiz.quizTitle}</h1>
            <p className='md:text-lg text-sm'>{quiz.quizSynopsis}</p>
            <div className='flex flex-col mt-2 text-sm'>
                <span>Friday 18 October 2024 15:00 UK</span>
                <span>*AI Disclaimer</span>
            </div>
            <div className='border-2 p-4 mt-4'>
                {!start && (
                    <div>
                        <div>
                            {appLocale.landingHeaderText.replace(
                                '<questionLength>',
                                nrOfQuestions,
                            )}
                        </div>
                        {quiz.quizSynopsis && (
                            <div className="quiz-synopsis">{quiz.quizSynopsis}</div>
                        )}
                        <div className="startQuizWrapper">
                            <button type="button" onClick={() => setStart(true)}
                                className="p-2 border-2 rounded hover:bg-[var(--bg-blue)] hover:text-white ease-in-out transition font-bold">
                                {appLocale.startQuizBtn}
                            </button>
                        </div>
                    </div>
                )}

                {start && (
                    <Core
                        questions={questions}
                        showDefaultResult={showDefaultResult}
                        onComplete={onComplete}
                        customResultPage={customResultPage}
                        showInstantFeedback={showInstantFeedback}
                        continueTillCorrect={continueTillCorrect}
                        revealAnswerOnSubmit={revealAnswerOnSubmit}
                        allowNavigation={allowNavigation}
                        appLocale={appLocale}
                        onQuestionSubmit={onQuestionSubmit}
                        timer={timer}
                        allowPauseTimer={allowPauseTimer}
                        enableProgressBar={enableProgressBar}
                        progressBarColor={quiz.progressBarColor}
                        questionOneArticle={questionArticle}
                    />
                )}
            </div>
        </div>
    );

}