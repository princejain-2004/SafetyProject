import React, { useState } from "react";

const quizSets_bn = [
  // Set 1: Emergency Preparation
  [
    {
      question: "বন্যার আগে, জরুরি কিটে কোনটি সবচেয়ে গুরুত্বপূর্ণ?",
      options: [
        { text: "নন-পেরিশেবল খাবার এবং পানি", isCorrect: true, feedback: "সঠিক! প্রতিজন ব্যক্তির জন্য অন্তত তিন দিনের খাবার ও পানি থাকা উচিত।" },
        { text: "আপনার প্রিয় ভিডিও গেম কনসোল", isCorrect: false, feedback: "ভুল। বিনোদন গুরুত্বপূর্ণ নয়, জীবনরক্ষাকারী জিনিসগুলো প্রধান।" },
        { text: "আপনার সবচেয়ে আরামদায়ক বালিশ", isCorrect: false, feedback: "ভুল। আরাম দ্বিতীয়, নিরাপত্তা প্রথম।" },
      ],
    },
    {
      question: "বন্যার সতর্কবার্তা আসলে, মূল্যবান নথি এবং ইলেকট্রনিক্স কোথায় রাখবেন?",
      options: [
        { text: "বেসমেন্ট বা নিচ তলা", isCorrect: false, feedback: "ভুল। নিচ তল প্রথমে প্লাবিত হয়।" },
        { text: "উচ্চ তলা বা উচ্চ তাক", isCorrect: true, feedback: "সঠিক! উচ্চ স্থানে রাখা সবচেয়ে নিরাপদ।" },
        { text: "প্রতিবেশীর নিম্নভূমির বাড়ি", isCorrect: false, feedback: "ভুল। প্রতিবেশীর বাড়িও প্লাবিত হতে পারে।" },
      ],
    },
  ],
  // Set 2: Flood Movement
  [
    {
      question: "বন্যার সময়, প্লাবিত এলাকায় কীভাবে চলাফেরা করা সবচেয়ে নিরাপদ?",
      options: [
        { text: "পানি দিয়ে হাঁটা বা সাঁতার কাটা", isCorrect: false, feedback: "ভুল। বন্যার পানি বিপজ্জনক বস্তু, বৈদ্যুতিক তার বা প্রবাহ লুকাতে পারে।" },
        { text: "গাড়ি দিয়ে পানি পার হওয়া", isCorrect: false, feedback: "ভুল। মাত্র 15 সেমি পানি একজন মানুষকে পড়তে পারে। 60 সেমি গাড়িও বহন করতে পারে।" },
        { text: "উচ্চ নিরাপদ পথ খুঁজে পানির বাইরে থাকা", isCorrect: true, feedback: "সঠিক! নিরাপদ উচ্চতায় যাওয়া এবং পানি থেকে দূরে থাকা সর্বোত্তম।" },
      ],
    },
    {
      question: "আপনার এলাকার জন্য 'ফ্ল্যাশ ফ্লাড' সতর্কবার্তা আসলে, কী করবেন?",
      options: [
        { text: "অধিক তথ্যের জন্য অপেক্ষা করা", isCorrect: false, feedback: "ভুল। ফ্ল্যাশ ফ্লাড খুব দ্রুত ঘটে। অপেক্ষা বিপজ্জনক।" },
        { text: "তৎক্ষণাৎ উচ্চ স্থানে চলে যাওয়া", isCorrect: true, feedback: "সঠিক! ঝুঁকিপূর্ণ পরিস্থিতি হলে নিরাপদ উচ্চতায় তৎক্ষণাৎ যাওয়া গুরুত্বপূর্ণ।" },
        { text: "বাড়িতে থাকুন", isCorrect: false, feedback: "ভুল। বাড়ি নিরাপদ নাও হতে পারে। সর্বদা উচ্চ স্থানে যান।" },
      ],
    },
  ],
  // Set 3: Returning Home
  [
    {
      question: "বন্যার পরে, কখন আপনার বাড়িতে ফিরে যাওয়া নিরাপদ?",
      options: [
        { text: "যখন পানি সম্পূর্ণ শুকিয়ে গেছে", isCorrect: false, feedback: "ভুল। পানি শুকিয়ে গেলেও লুকানো বিপদ থাকতে পারে।" },
        { text: "কেবল সরকারি অনুমতি পাওয়ার পর", isCorrect: true, feedback: "সঠিক! স্থানীয় কর্তৃপক্ষ নিরাপদ ঘোষণা করার আগে বাড়িতে ফিরে যাবেন না।" },
        { text: "বন্ধুর মেসেজ পাওয়ার পর", isCorrect: false, feedback: "ভুল। কেবল সরকারি সূত্র বিশ্বাস করুন।" },
      ],
    },
    {
      question: "বাড়িতে ফিরে প্রথমে কী পরীক্ষা করবেন?",
      options: [
        { text: "গঠনগত ক্ষতি এবং গ্যাস লিক", isCorrect: true, feedback: "সঠিক! গঠনগত ক্ষতি বা লুকানো গ্যাস লিক পরীক্ষা করা উচিত।" },
        { text: "টিভি এবং অন্যান্য ইলেকট্রনিক্স কাজ করছে কি না", isCorrect: false, feedback: "ভুল। ভেজা ইলেকট্রনিক্স কখনো ব্যবহার করবেন না।" },
        { text: "ফার্নিচার রক্ষা করা যাবে কি না", isCorrect: false, feedback: "ভুল। নিরাপত্তা সর্বাগ্রে।" },
      ],
    },
  ],
  // Set 4: Flood Hazards & Safety Advice
  [
    {
      question: "আপনি যা দেখতে পাচ্ছেন না এমন বন্যার প্রধান ঝুঁকি কী?",
      options: [
        { text: "লুকানো ধারালো বস্তু এবং বৈদ্যুতিক তার", isCorrect: true, feedback: "সঠিক! পানি বিপজ্জনক হতে পারে।" },
        { text: "পানিতে হাঁটা সবসময় নিরাপদ", isCorrect: false, feedback: "ভুল। পানি অত্যন্ত বিপজ্জনক।" },
        { text: "শুধু গাড়ি বহন হতে পারে", isCorrect: false, feedback: "ভুল। অল্প পানি থেকেও বিপদ হতে পারে।" },
      ],
    },
    {
      question: "বন্যার জন্য সর্বজনীন পরামর্শ কী?",
      options: [
        { text: "'ড্রপ, কভার এবং হোল্ড অন'", isCorrect: false, feedback: "ভুল। এটি ভূমিকম্পের জন্য। বন্যার জন্য: 'Turn Around, Don't Drown!'" },
        { text: "'লুক, লিসেন, অ্যান্ড লিভ!'", isCorrect: false, feedback: "ভুল। এটি রেল সুরক্ষা প্রচারণার জন্য।" },
        { text: "'Turn Around, Don't Drown!'", isCorrect: true, feedback: "সঠিক! কখনোই পানি পার হওয়ার চেষ্টা করবেন না।" },
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
