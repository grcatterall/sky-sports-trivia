'use client'
import { useState, useEffect, ChangeEvent } from "react";
import { Quiz } from "@/components/quiz";
import { Request } from "@/components/api";

// Fetch quiz data based on year, week, and category
const fetchQuizData = async (year: string, week: string, category: string) => {
  if (category) {
    const url = `https://uat-${process.env.NEXT_PUBLIC_BUCKET_URL}/lab-week-quiz/${year}/${week}/${category}/trivia.json`
    console.log(url);
    const response = await Request(url);
    return response;
  }
}

// Fetch available categories
const getAvailableCategories = async () => {
  const url = `https://uat-${process.env.NEXT_PUBLIC_BUCKET_URL}/lab-week-quiz/available-quizzes.json`
  const response = await Request(url);
  return response;
}

// Get the current week number
const getCurrentWeekNumber = (): string => {
  const currentDate = new Date();
  const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
  const pastDaysOfYear = (currentDate.getTime() - startOfYear.getTime()) / 86400000;
  return String(Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7));
};

export default function Home() {
  const [quizData, setQuizData] = useState<Quiz | null>(null);
  const [quizCategories, setQuizCategories] = useState<any>([]);
  const [quizWeek, setQuizWeek] = useState<any>(getCurrentWeekNumber());
  const [currentCategory, setCurrentCategory] = useState<string>('');
  const [isLoadingQuiz, setIsLoading] = useState<boolean>(true);
  const [availableQuizzes, setAvailableQuizzes] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getAvailableCategories();
      setAvailableQuizzes(categories); // Ensure '2024' is a valid year in your data
    }

    fetchData();
  }, []);

  // Fetch the data on component mount or when `quizWeek` or `currentCategory` change
  useEffect(() => {
    const fetchData = async () => {
      if (availableQuizzes['2024']) {
        setIsLoading(true);
        try {
          setQuizCategories(availableQuizzes['2024'][String(quizWeek)]);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [quizWeek]);

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
        try {
          // Fetch available categories and quiz data
          const data = await fetchQuizData('2024', quizWeek.toString(), currentCategory);
          setQuizData(data);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
    };
    fetchData();
  }, [currentCategory]); // Update when `quizWeek` or `currentCategory` changes

  // Handle week change
  const handleWeekChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setQuizWeek(event.target.value);
    setQuizCategories([]);
    setCurrentCategory('');
    setQuizData(null);
  };

  // Handle category change
  const handleCategorySet = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentCategory(event.target.value);
    setQuizData(null);
  };

  // Render quiz content
  const renderQuiz = (data: Quiz | null) => {
    if (isLoadingQuiz) {
      return (
        <div role="status" className="w-full">
          <svg aria-hidden="true" className="w-8 h-8 mx-auto text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.59C100 78.21 77.61 100.59 50 100.59S0 78.21 0 50.59C0 22.98 22.39 0.59 50 0.59S100 22.98 100 50.59ZM9.08 50.59C9.08 73.19 27.4 91.51 50 91.51C72.6 91.51 90.92 73.19 90.92 50.59C90.92 27.99 72.6 9.67 50 9.67C27.4 9.67 9.08 27.99 9.08 50.59Z" fill="currentColor" />
            <path d="M93.97 39.04C96.39 38.4 97.86 35.91 97.01 33.55C95.29 28.82 92.87 24.37 89.82 20.35C85.85 15.12 80.88 10.72 75.21 7.41C69.54 4.1 63.28 1.94 56.77 1.05C51.77 0.37 46.7 0.45 41.73 1.28C39.26 1.69 37.81 4.2 38.45 6.62C39.09 9.05 41.57 10.47 44.05 10.11C47.85 9.55 51.72 9.53 55.54 10.05C60.86 10.78 65.99 12.55 70.63 15.26C75.27 17.96 79.33 21.56 82.58 25.84C84.92 28.91 86.8 32.29 88.18 35.88C89.08 38.22 91.54 39.68 93.97 39.04Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    if (data) {
      return <Quiz quiz={data} shuffle={true} enableProgressBar={true} allowNavigation={true} showInstantFeedback={false} />;
    }

    return <p>No quiz found</p>;
  };

  return (
    <div className="items-center align-top justify-items-center min-h-[85vh] p-8 py-0 pb-20 gap-16 sm:p-4 sm:pt-2 font-[family-name:var(--font-geist-sans)] bg-[#d7d5dd]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-white max-w-[1024px] mx-auto p-8 shadow-md">
        <div className="flex flex-col space-y-4">
          <p className="text-lg font-semibold">Select Quiz Category</p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {/* Year Selection */}
            <div className="flex flex-col">
              <label htmlFor="year" className="font-medium text-slate-600 mb-1">Year</label>
              <select
                id="year"
                className="border border-slate-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={'2024'}>2024</option>
              </select>
            </div>

            {/* Week Selection */}
            <div className="flex flex-col">
              <label htmlFor="week" className="font-medium text-slate-600 mb-1">Week</label>
              <select
                id="week"
                value={quizWeek}
                onChange={handleWeekChange}
                className="border border-slate-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Array.from({ length: 52 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>

            {quizWeek && (
              <div className="flex flex-col">
                <label htmlFor="quiz" className="font-medium text-slate-600 mb-1">Quiz</label>
                <select
                  id="quiz"
                  onChangeCapture={handleCategorySet}
                  className="border border-slate-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Select Quiz</option>
                  {quizCategories && quizCategories.map((quiz: any) => (
                    <option key={quiz.key} value={quiz.value}>
                      {quiz.key}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
        {renderQuiz(quizData)}
      </main>
    </div>
  );
}
