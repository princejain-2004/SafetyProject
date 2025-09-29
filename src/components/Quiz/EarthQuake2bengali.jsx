import React, { useState } from "react";
const quizSets_bn = [
  [
    {
      question: "ভূমিকম্পের সময় কোন ভবনগুলি নিরাপদ?",
      options: [
        { text: "ইঞ্জিনিয়ারিং ছাড়া উঁচু ভবন", isCorrect: false, feedback: "ভুল। এই ধরণের ভবন ঝুঁকিপূর্ণ।" },
        { text: "ভূমিকম্প-প্রতিরোধী কাঠামো", isCorrect: true, feedback: "সঠিক! এগুলি কম্পন সহ্য করার জন্য ডিজাইন করা হয়।" },
        { text: "পুরনো স্মৃতিস্তম্ভ", isCorrect: false, feedback: "ভুল। পুরনো স্মৃতিস্তম্ভ নিরাপদ নয়।" },
      ],
    },
    {
      question: "ভূমিকম্পের সময় ভবন থেকে বের হওয়ার পর কোথায় যেতে হবে?",
      options: [
        { text: "খোলা মাঠে", isCorrect: true, feedback: "সঠিক! খোলা মাঠে কোনো জিনিস পড়ার ঝুঁকি নেই।" },
        { text: "বেসমেন্টে", isCorrect: false, feedback: "ভুল। ভবন ভেঙে পড়লে বেসমেন্ট বিপজ্জনক হয়।" },
        { text: "বিদ্যুতের খুঁটির কাছে", isCorrect: false, feedback: "ভুল। বিদ্যুতের খুঁটি পড়ে যেতে পারে।" },
      ],
    },
  ],
];

export default function EarthquakeQuiz2bengali() {
  const [started, setStarted] = useState(false);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const currentSet = quizSets[currentSetIndex];
  const currentQuestion = currentSet[currentQuestionIndex];

  const handleAnswer = (option, idx) => {
    setSelectedOption(idx);
    setFeedback(option.feedback);
    if (option.isCorrect) setScore((prev) => prev + 10);
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
    }
    setSelectedOption(null);
    setFeedback("");
  };

  const restartQuiz = () => {
    setStarted(false);
    setFinished(false);
    setCurrentSetIndex(0);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setFeedback("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 font-inter">
      {!started ? (
        // === प्रारंभिक कार्ड ===
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border-4 border-gray-500 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-400 mb-4">
            भूकंप तैयारी प्रश्नोत्तरी
          </h1>
          <img
            src="https://placehold.co/400x200/4a5568/ffffff?text=EARTHQUAKE+QUIZ"
            alt="Earthquake Quiz"
            className="mx-auto rounded-lg mb-4"
          />
          <p className="text-lg mb-4">
            अपना ज्ञान जाँचें और जानें कि भूकंप के दौरान सुरक्षित कैसे रहें!
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
          >
            प्रश्नोत्तरी शुरू करें
          </button>
        </div>
      ) : (
        // === पूर्ण प्रश्नोत्तरी ===
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 p-4">
          {!finished ? (
            <div className="flex flex-col gap-4 w-full max-w-2xl">
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-xl font-bold mb-4">
                  {currentQuestion.question}
                </h2>
                <div className="flex flex-col gap-3">
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
                            : "bg-gray-600 hover:bg-gray-700 text-white"
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
                      ? "अगला प्रश्न"
                      : currentSetIndex < quizSets.length - 1
                      ? "अगले सेट पर जाएँ"
                      : "प्रश्नोत्तरी समाप्त करें"
                    : "फिर से प्रयास करें"}
                </button>
              )}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-400 mb-4">
                प्रश्नोत्तरी समाप्त!
              </h2>
              <p className="text-lg mb-6">आपने {score} अंक प्राप्त किए!</p>
              <button
                onClick={restartQuiz}
                className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-700"
              >
                पुनः शुरू करें
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
