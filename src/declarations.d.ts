declare module 'react-quiz-component' {
    import { ComponentType } from 'react';
  
    export interface QuizProps {
      quiz: {
        quizTitle: string;
        quizSynopsis?: string;
        nrOfQuestions?: number;
        appLocale?: any;
        questions: Array<{
          question: string;
          questionType: string;
          answerSelectionType: string;
          answers: string[];
          correctAnswer: string | string[];
          messageForCorrectAnswer?: string;
          messageForIncorrectAnswer?: string;
          explanation?: string;
          point?: string;
        }>;
      };
      shuffle?: boolean;
      showInstantFeedback?: boolean;
      continueTillCorrect?: boolean;
      onComplete?: (obj: any) => void;
    }
  
    export const Quiz: ComponentType<QuizProps>;
  }
  
  declare module 'react-quiz-component' {
    import { ComponentType } from 'react';
  
    export const Quiz: ComponentType<any>;
  }