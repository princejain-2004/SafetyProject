import React, { useState } from "react";

const quizSets_bn = [
  [
    {
      question: "আগুন প্রতিরোধ করার জন্য, কোন জায়গায় প্রদীপ রাখা উচিত নয়?",
      options: [
        { text: "মজবুত, সমতল স্থানে এবং বাতাস থেকে দূরে", isCorrect: false, feedback: "ভুল। এটি ভাল অভ্যাস। প্রদীপ স্থির স্থানে রাখা উচিত।" },
        { text: "পর্দা বা অন্যান্য দাহ্য সামগ্রীর কাছে", isCorrect: true, feedback: "ঠিক! প্রদীপ এবং খোলা আগুন থেকে সহজে দাহ্য কোনো জিনিস দূরে রাখুন।" },
        { text: "কাচের জারে বা হোল্ডারে", isCorrect: false, feedback: "ভুল। সঠিক হোল্ডার ব্যবহার করা নিরাপদ।" },
      ],
    },
    {
      question: "অব্যবহৃত বৈদ্যুতিক যন্ত্রের জন্য সবচেয়ে গুরুত্বপূর্ণ কাজ কী?",
      options: [
        { text: "একটি কাপড় দিয়ে ঢেকে রাখুন", isCorrect: false, feedback: "ভুল। এটি আগুনের নিরাপত্তার পদ্ধতি নয়।" },
        { text: "এটি সব সময় প্লাগে রাখুন", isCorrect: false, feedback: "ভুল। এতে বৈদ্যুতিক আগুন হতে পারে।" },
        { text: "ওয়াল সকেট থেকে আনপ্লাগ করুন", isCorrect: true, feedback: "ঠিক! ব্যবহার না হলে আনপ্লাগ করা আগুনের ঝুঁকি কমায়।" },
      ],
    },
    {
      question: "বৈদ্যুতিক আগুনে পানি কেন ফেলবেন না?",
      options: [
        { text: "আগুন বড় হয়ে যায়", isCorrect: true, feedback: "ঠিক! পানি বিদ্যুৎ পরিবাহিত করে এবং আগুন আরও বাড়ায়।" },
        { text: "পানি নষ্ট হয়", isCorrect: false, feedback: "ভুল। প্রধান ঝুঁকি বিদ্যুৎ পরিবাহন, পানি নষ্ট হওয়া নয়।" },
        { text: "এটি ধীরে", isCorrect: false, feedback: "ভুল। প্রধান কারণ নিরাপত্তা, গতি নয়।" },
      ],
    },
    {
      question: "আগুনের সময় দরজা খোলার আগে কী করা উচিত?",
      options: [
        { text: "দরজার তাপমাত্রা স্পর্শ করে পরীক্ষা করুন", isCorrect: true, feedback: "ঠিক! দরজা প্রথমে পরীক্ষা করলে নিরাপদে থাকতে সাহায্য করে।" },
        { text: "দ্রুত খুলুন", isCorrect: false, feedback: "ভুল। খুব দ্রুত খোলা বিপজ্জনক হতে পারে।" },
        { text: "ভাঙুন", isCorrect: false, feedback: "ভুল। পরীক্ষা ছাড়া দরজা ভাঙবেন না।" },
      ],
    },
  ],
];



export default function FireQuiz() {
  const [started, setStarted] = useState(false);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentSet = quizSets[currentSetIndex];
  const currentQuestion = currentSet?.[currentQuestionIndex];

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setFeedback(option.feedback);

    if (option.isCorrect) {
      setScore((prev) => prev + 10);
    }
  };

  const handleNext = () => {
    if (selectedOption?.isCorrect) {
      if (currentQuestionIndex + 1 < currentSet.length) {
        setCurrentQuestionIndex((i) => i + 1);
      } else if (currentSetIndex + 1 < quizSets.length) {
        setCurrentSetIndex((i) => i + 1);
        setCurrentQuestionIndex(0);
      } else {
        setQuizComplete(true);
      }
    } else {
      setFeedback("");
      setSelectedOption(null);
    }
  };

  const restartQuiz = () => {
    setStarted(false);
    setCurrentSetIndex(0);
    setCurrentQuestionIndex(0);
    setScore(0);
    setFeedback("");
    setSelectedOption(null);
    setQuizComplete(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="quiz-container w-11/12 max-w-lg bg-gray-800 border-4 border-red-500 rounded-2xl p-6 shadow-xl">
        <h1 className="text-3xl font-bold text-red-400 mb-4">
          Fire Preparedness Quiz
        </h1>

        {!started && !quizComplete && (
          <div className="text-center">
            <img
              src="https://placehold.co/400x200/ef4444/ffffff?text=FIRE+QUIZ"
              alt="Fire Quiz"
              className="mx-auto rounded-lg mb-4"
            />
            <p className="text-lg font-medium">
              Test your knowledge and learn how to stay safe during a fire!
            </p>
            <button
              onClick={() => setStarted(true)}
              className="mt-8 bg-red-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-red-600"
            >
              Start Quiz
            </button>
          </div>
        )}

        {started && !quizComplete && currentQuestion && (
          <div>
            <div className="bg-gray-700 rounded-xl p-4 mb-4 shadow">
              <h2 className="text-xl font-bold mb-4">
                {currentQuestion.question}
              </h2>
              <div className="flex flex-col gap-3">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    disabled={!!selectedOption}
                    className={`py-3 px-6 rounded-xl font-semibold shadow transition ${
                      selectedOption
                        ? option === selectedOption
                          ? option.isCorrect
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                          : "bg-red-500/30 text-gray-300"
                        : "bg-red-500 hover:bg-red-600 text-white"
                    }`}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>

            {feedback && (
              <div className="text-xl font-bold text-center my-3">
                {feedback}
              </div>
            )}

            {selectedOption && (
              <button
                onClick={handleNext}
                className="mt-4 bg-green-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-green-600"
              >
                {selectedOption.isCorrect
                  ? currentQuestionIndex + 1 < currentSet.length
                    ? "Next Question"
                    : currentSetIndex + 1 < quizSets.length
                    ? "Continue to Next Set"
                    : "Finish Quiz"
                  : "Try Again"}
              </button>
            )}
          </div>
        )}

        {quizComplete && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-400">
              Quiz Complete!
            </h2>
            <p className="text-lg mt-4">
              You completed the quiz with a total score of {score} points!
            </p>
            <button
              onClick={restartQuiz}
              className="mt-6 bg-red-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-red-600"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

