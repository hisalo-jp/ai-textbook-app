'use client';

import React, { useState, useEffect } from 'react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizSectionProps {
  chapterSlug: string;
  questions: QuizQuestion[];
  onComplete: () => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ chapterSlug, questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // LocalStorageから完了状態を確認
  useEffect(() => {
    const completed = localStorage.getItem(`quiz-completed-${chapterSlug}`) === 'true';
    setIsCompleted(completed);
  }, [chapterSlug]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const handleQuizComplete = () => {
    const score = calculateScore();
    if (score === questions.length) {
      // 全問正解の場合
      localStorage.setItem(`quiz-completed-${chapterSlug}`, 'true');
      setIsCompleted(true);
      onComplete();
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setShowResults(false);
  };

  const score = calculateScore();
  const isPerfectScore = score === questions.length;

  if (isCompleted) {
    return (
      <section className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
        <div className="text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            この章は完了済みです！
          </h2>
          <p className="text-green-600 mb-4">
            クイズに全問正解し、章の内容をマスターしました。
          </p>
          <button
            onClick={() => {
              localStorage.removeItem(`quiz-completed-${chapterSlug}`);
              setIsCompleted(false);
              resetQuiz();
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            もう一度チャレンジする
          </button>
        </div>
      </section>
    );
  }

  if (showResults) {
    return (
      <section className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          クイズ結果
        </h2>
        
        <div className="text-center mb-6">
          <div className={`text-6xl mb-4 ${isPerfectScore ? 'text-green-500' : 'text-orange-500'}`}>
            {isPerfectScore ? '🎉' : '📚'}
          </div>
          <div className="text-3xl font-bold mb-2">
            {score} / {questions.length}
          </div>
          <div className={`text-lg ${isPerfectScore ? 'text-green-600' : 'text-orange-600'}`}>
            {isPerfectScore ? '完璧です！' : 'もう少しです！'}
          </div>
        </div>

        {/* 各問題の詳細結果 */}
        <div className="space-y-4 mb-6">
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                isCorrect ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'
              }`}>
                <div className="flex items-start mb-2">
                  <span className={`text-lg mr-2 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                    {isCorrect ? '✅' : '❌'}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 mb-2">
                      問{index + 1}: {question.question}
                    </h3>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">あなたの回答:</span> {question.options[userAnswer]}
                    </div>
                    {!isCorrect && (
                      <div className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">正解:</span> {question.options[question.correctAnswer]}
                      </div>
                    )}
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">解説:</span> {question.explanation}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center space-x-4">
          {isPerfectScore ? (
            <button
              onClick={handleQuizComplete}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              章を完了する 🎉
            </button>
          ) : (
            <button
              onClick={resetQuiz}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              もう一度チャレンジ
            </button>
          )}
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== -1;

  return (
    <section className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          📝 確認クイズ
        </h2>
        <p className="text-blue-600">
          この章の内容を理解できているか確認しましょう（全{questions.length}問）
        </p>
      </div>

      {/* 進捗バー */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>問 {currentQuestion + 1} / {questions.length}</span>
          <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* 質問 */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {question.question}
        </h3>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={index}
                checked={selectedAnswers[currentQuestion] === index}
                onChange={() => handleAnswerSelect(index)}
                className="mr-3"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ナビゲーションボタン */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentQuestion === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          ← 前の問題
        </button>
        
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className={`px-4 py-2 rounded-lg transition-colors ${
            !isAnswered
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : currentQuestion === questions.length - 1
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {currentQuestion === questions.length - 1 ? '結果を見る' : '次の問題 →'}
        </button>
      </div>
    </section>
  );
};

export default QuizSection;