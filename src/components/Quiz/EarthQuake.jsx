import React, { useState } from "react";

const quizSets = [
  [
    {
      question:
        "What is the most important item to secure in your home to prevent injury during an earthquake?",
      options: [
        {
          text: "Small, lightweight objects.",
          isCorrect: false,
          feedback:
            "Incorrect. While you should secure everything, large, heavy items pose the greatest risk. Try again.",
        },
        {
          text: "Heavy furniture like bookcases and cabinets.",
          isCorrect: true,
          feedback:
            "Correct! Securing heavy furniture prevents it from toppling over and causing serious injury.",
        },
        {
          text: "Picture frames on the wall.",
          isCorrect: false,
          feedback:
            "Incorrect. Picture frames are a low-priority risk. Focus on heavy furniture. Try again.",
        },
      ],
    },
    {
      question: "What should you prepare in advance for an earthquake emergency?",
      options: [
        {
          text: "An emergency kit with non-perishable food, water, and a flashlight.",
          isCorrect: true,
          feedback:
            "Correct! An emergency kit is crucial for survival until help arrives.",
        },
        {
          text: "A detailed map of all the shopping malls in your city.",
          isCorrect: false,
          feedback:
            "Incorrect. A map of safety zones and evacuation routes is more important. Try again.",
        },
        {
          text: "New clothes and shoes for your family.",
          isCorrect: false,
          feedback:
            "Incorrect. While you need clothes, your main focus should be on survival supplies. Try again.",
        },
      ],
    },
    // ✅ New Question 1
    {
      question: "Which buildings are safer during earthquakes?",
      options: [
        {
          text: "Non-engineered tall buildings",
          isCorrect: false,
          feedback: "Incorrect. Tall non-engineered buildings are dangerous during earthquakes.",
        },
        {
          text: "Earthquake-resistant structures",
          isCorrect: true,
          feedback: "Correct! Earthquake-resistant buildings are designed to withstand shocks.",
        },
        {
          text: "Old monuments",
          isCorrect: false,
          feedback: "Incorrect. Old monuments are usually unsafe during earthquakes.",
        },
      ],
    },
    // ✅ New Question 2
    {
      question: "Where should you go after evacuating a building during an earthquake?",
      options: [
        {
          text: "Open ground",
          isCorrect: true,
          feedback: "Correct! Open grounds are safe from falling debris.",
        },
        {
          text: "Basement",
          isCorrect: false,
          feedback: "Incorrect. Basements can be dangerous if the building collapses.",
        },
        {
          text: "Near electric poles",
          isCorrect: false,
          feedback: "Incorrect. Electric poles may fall during strong tremors.",
        },
      ],
    },
  ],
];


export default function EarthquakeQuiz() {
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
        // === Start Card on Main Page ===
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border-4 border-gray-500 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-400 mb-4">
            Earthquake Preparedness Quiz
          </h1>
          <img
            src="https://placehold.co/400x200/4a5568/ffffff?text=EARTHQUAKE+QUIZ"
            alt="Earthquake Quiz"
            className="mx-auto rounded-lg mb-4"
          />
          <p className="text-lg mb-4">
            Test your knowledge and learn how to stay safe during an earthquake!
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        // === Full Screen Quiz ===
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 p-6 gap-8">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="/quiz-illustration.png" // replace with your image path
            alt="Quiz Illustration"
            className="w-72 h-auto rounded-xl shadow-lg object-contain"
          />
        </div>
      
        {/* Quiz Section */}
        <div className="flex-1 flex items-center justify-center">
          {!finished ? (
            <div className="flex flex-col gap-4 w-full max-w-2xl">
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
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
                <div className="text-center text-lg font-bold animate-bounce">{feedback}</div>
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
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-400 mb-4">Quiz Complete!</h2>
              <p className="text-lg mb-6">You scored {score} points!</p>
              <button
                onClick={restartQuiz}
                className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-700"
              >
                Restart Quiz
              </button>
            </div>
          )}
        </div>
      </div>
      
      )}
    </div>
  );
}
