import React, { useState } from "react";

const floodQuizSets_Bengali = [
  [
    {
      question: "বন্যায় আটকা পড়লে সবচেয়ে নিরাপদ পদক্ষেপ কোনটি?",
      options: [
        { text: "উচ্চ স্থানে যান এবং সাহায্যের জন্য কল করুন", isCorrect: true, feedback: "সঠিক! উচ্চ স্থানে যাওয়া এবং সাহায্য চাওয়া নিরাপদ।" },
        { text: "পানিতে সাঁতার কাটা", isCorrect: false, feedback: "ভুল। পানিতে সাঁতার কাটা বিপজ্জনক।" },
        { text: "নিঃসন্দেহে হাঁটা", isCorrect: false, feedback: "ভুল। এটি নিরাপদ নয়।" },
      ],
    },
    {
      question: "বন্যার মৌসুমে কী প্রস্তুত রাখা উচিত?",
      options: [
        { text: "জরুরি টর্চ এবং ব্যাটারি", isCorrect: true, feedback: "সঠিক! জরুরি টর্চ এবং ব্যাটারি প্রয়োজন।" },
        { text: "খেলার সামগ্রী", isCorrect: false, feedback: "ভুল। এটি সাহায্য করে না।" },
        { text: "টিভি রিমোট", isCorrect: false, feedback: "ভুল। এটি সাহায্য করে না।" },
      ],
    },
    {
      question: "বন্যার পানিতে হেঁটে যাওয়া কেন এড়ানো উচিত?",
      options: [
        { text: "এটি দূষিত হতে পারে এবং ধারালো জিনিস লুকিয়ে রাখতে পারে", isCorrect: true, feedback: "সঠিক! বন্যার পানি নিরাপদ নয়।" },
        { text: "এটি ঠান্ডা মনে হয়", isCorrect: false, feedback: "ভুল। এটি কারণ নয়।" },
        { text: "এটি ব্যায়ামের জন্য সহায়ক", isCorrect: false, feedback: "ভুল। কারণ নয়।" },
      ],
    },
    {
      question: "যদি আপনার বাড়ি বন্যায় প্লাবিত হয়, প্রথমে কী করা উচিত?",
      options: [
        { text: "বিদ্যুৎ এবং গ্যাস বন্ধ করুন", isCorrect: true, feedback: "সঠিক! প্রথমে নিরাপত্তা নিশ্চিত করুন।" },
        { text: "অপ্রয়োজনীয় কাপড় প্যাক করুন", isCorrect: false, feedback: "ভুল। নিরাপত্তা প্রথম।" },
        { text: "টিভি দেখুন", isCorrect: false, feedback: "ভুল। সাহায্য পাওয়া প্রথম।" },
      ],
    },
    {
      question: "বন্যার সময় সবচেয়ে নিরাপদ পরিবহন কোনটি?",
      options: [
        { text: "নৌকা বা উঁচু প্ল্যাটফর্ম", isCorrect: true, feedback: "সঠিক! সবচেয়ে নিরাপদ।" },
        { text: "মোটরসাইকেল", isCorrect: false, feedback: "ভুল। নিরাপদ নয়।" },
        { text: "সাইকেল", isCorrect: false, feedback: "ভুল। নিরাপদ নয়।" },
      ],
    },
    {
      question: "ভারি বন্যার সময় কোথায় আশ্রয় নেওয়া উচিত নয়?",
      options: [
        { text: "নদী বা নিচু এলাকায়", isCorrect: true, feedback: "সঠিক! বিপজ্জনক স্থান এড়ান।" },
        { text: "পাহাড়ে", isCorrect: false, feedback: "ভুল। নিরাপদ।" },
        { text: "উচ্চ ভবনে", isCorrect: false, feedback: "ভুল। নিরাপদ।" },
      ],
    },
    {
      question: "বন্যার সময় কী পান করা এড়ানো উচিত?",
      options: [
        { text: "প্রক্রিয়াজাত না করা বন্যার পানি", isCorrect: true, feedback: "সঠিক! এটি বিপজ্জনক।" },
        { text: "বোতলজাত পানি", isCorrect: false, feedback: "ভুল। নিরাপদ।" },
        { text: "সিদ্ধ পানি", isCorrect: false, feedback: "ভুল। নিরাপদ।" },
      ],
    },
    {
      question: "বন্যার সময় নিরাপদ যোগাযোগ কোনটি?",
      options: [
        { text: "মোবাইল ফোন বা জরুরি রেডিও", isCorrect: true, feedback: "সঠিক! নিরাপদ।" },
        { text: "রাস্তার ওপরে চিৎকার করা", isCorrect: false, feedback: "ভুল। নিরাপদ নয়।" },
        { text: "পাবলিক লাউডস্পিকার ব্যবহার করা", isCorrect: false, feedback: "ভুল। নিরাপদ নয়।" },
      ],
    },
  ],
];


export default function FloodQuiz() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const currentSet = quizSets[currentSetIndex];
  const currentQuestion = currentSet[currentQuestionIndex];

  const handleAnswer = (option, idx) => {
    setSelectedOption(idx);
    setFeedback(option.feedback);
    if (option.isCorrect) {
      setScore((prev) => prev + 10);
    }
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    const option = currentQuestion.options[selectedOption];
    if (option.isCorrect) {
      if (currentQuestionIndex < currentSet.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else if (currentSetIndex < quizSets.length - 1) {
        setCurrentSetIndex((prev) => prev + 1);
        setCurrentQuestionIndex(0);
      } else {
        setFinished(true);
      }
      setSelectedOption(null);
      setFeedback("");
    } else {
      setSelectedOption(null);
      setFeedback("");
    }
  };

  const restartQuiz = () => {
    setStarted(false);
    setFinished(false);
    setCurrentSetIndex(0);
    setCurrentQuestionIndex(0);
    setScore(0);
    setFeedback("");
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 font-inter">
      <div className="quiz-container w-full max-w-lg bg-gray-800 rounded-2xl shadow-xl p-6 border-4 border-blue-500">
        <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">
          Flood Preparedness Quiz
        </h1>

        {!started && !finished && (
          <div className="text-center">
            <img
              src="https://placehold.co/400x200/3b82f6/ffffff?text=FLOOD+QUIZ"
              alt="Flood Quiz"
              className="mx-auto rounded-lg mb-4"
            />
            <p className="text-lg font-medium">
              Test your knowledge and learn how to stay safe during a flood!
            </p>
            <button
              onClick={() => setStarted(true)}
              className="mt-6 bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-600"
            >
              Start Quiz
            </button>
          </div>
        )}

        {started && !finished && (
          <div className="flex flex-col gap-4">
            <div className="bg-gray-700 rounded-xl p-4 shadow-md">
              <h2 className="text-xl font-bold mb-4">
                {currentQuestion.question}
              </h2>
              <div className="flex flex-col space-y-3">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option, idx)}
                    disabled={selectedOption !== null}
                    className={`py-3 px-6 rounded-xl shadow-md font-semibold transition duration-200 ease-in-out
                      ${
                        selectedOption === idx
                          ? option.isCorrect
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      }`}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>

            {feedback && (
              <div className="text-center text-lg font-bold animate-bounce">
                {feedback}
              </div>
            )}

            {selectedOption !== null && (
              <button
                onClick={handleNext}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl shadow-lg"
              >
                {currentQuestion.options[selectedOption].isCorrect
                  ? currentQuestionIndex < currentSet.length - 1
                    ? "Next Question"
                    : currentSetIndex < quizSets.length - 1
                    ? "Continue to Next Set"
                    : "Finish Quiz"
                  : "Try Again"}
              </button>
            )}
          </div>
        )}

        {finished && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-400 mb-4">
              Quiz Complete!
            </h2>
            <p className="text-lg font-medium mb-6">
              You completed the quiz with a total score of {score} points!
            </p>
            <button
              onClick={restartQuiz}
              className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-600"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
