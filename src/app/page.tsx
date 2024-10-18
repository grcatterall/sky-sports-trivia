'use client'
import { useState, useLayoutEffect } from "react";
import { Quiz } from "@/components/quiz";
import { Request } from "@/components/api";

const fetchQuizData = async (category: string) => {
  const url = `https://uat-editorial.digitalcontent.sky/lab-week-quiz/week/42/${category}.json`

  const response = await Request(url);

  return response;
}

const getAvailableCategories = async () => {
  const url = `https://uat-editorial.digitalcontent.sky/lab-week-quiz/available-quizzes.json`

  const response = await Request(url);

  return response;
}

const renderQuiz = (data: Quiz | null) => {
  if (data) {
    return <Quiz quiz={data} shuffle={true} enableProgressBar={true} allowNavigation={true} showInstantFeedback={false}/>
  }

  return <p>No quiz found</p>
}

export default function Home() {
  const [quizData, setQuizData] = useState<Quiz | null>(null);
  const [quizCategories, setQuizCategories] = useState<any>([]);
  const [currentCategory, setCurrentCategory] = useState('quiz-test');

  useLayoutEffect(() => {
    async function fetchData() {
      try {
        const categories = await getAvailableCategories();
        setQuizCategories(categories);
        const data = await fetchQuizData(currentCategory);
        setQuizData(data);
      } catch (err) {
        console.error(err);
      } finally {
        console.log('done');
      }
    }
    fetchData()
  }, [currentCategory]);

  return (
    <div className="items-center align-top justify-items-center min-h-[85vh] p-8 py-0 pb-20 gap-16 sm:p-4 sm:pt-2 font-[family-name:var(--font-geist-sans)] bg-[#d7d5dd]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-white max-w-[1024px] mx-auto p-8 shadow-md">
        <div className="flex justify-between">
          <p>Select Quiz Category: </p>
          <select className="border-[1px] border-slate-400 rounded-sm ml-2 p-1 pr-4" onChangeCapture={(e) => {setCurrentCategory((e.target as HTMLInputElement).value)}}>
            {quizCategories.map((category: {key: string, value: string}) => {
              return (
                <option key={category.key} value={category.value}>{category.key}</option> 
              )
            })}
          </select>
        </div>
        {renderQuiz(quizData)}
      </main>
    </div>
  );
}
