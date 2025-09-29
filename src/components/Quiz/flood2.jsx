import React, { useState } from "react";

const floodQuizSets = [
  [
    {
      question: "What is the safest action if trapped in a flooded area?",
      options: [
        {
          text: "Move to higher ground and call for help",
          isCorrect: true,
          feedback:
            "Correct! Moving to higher ground and calling for help is the safest action.",
        },
        { text: "Swim in the water", isCorrect: false, feedback: "Incorrect. Swimming in floodwater is extremely dangerous." },
        { text: "Walk barefoot", isCorrect: false, feedback: "Incorrect. Walking barefoot exposes you to sharp objects and contamination." },
      ],
    },
    {
      question: "Which of these should be kept ready during flood season?",
      options: [
        { text: "Emergency torch & batteries", isCorrect: true, feedback: "Correct! A torch and batteries are essential during floods." },
        { text: "Sports kit", isCorrect: false, feedback: "Incorrect. Sports kit is not useful in emergencies." },
        { text: "TV remote", isCorrect: false, feedback: "Incorrect. This is not needed for flood safety." },
      ],
    },
    {
      question: "Why should you avoid walking through floodwater?",
      options: [
        { text: "It can be contaminated and hide sharp objects", isCorrect: true, feedback: "Correct! Floodwater can be dangerous due to contamination and hidden debris." },
        { text: "It’s refreshing", isCorrect: false, feedback: "Incorrect. Floodwater is unsafe, not refreshing." },
        { text: "It helps you exercise", isCorrect: false, feedback: "Incorrect. Floodwater is dangerous, not for exercise." },
      ],
    },
    {
      question: "If your home is flooding, what should you do first?",
      options: [
        { text: "Turn off electricity and gas", isCorrect: true, feedback: "Correct! Safety first: electricity and gas should be turned off." },
        { text: "Pack unnecessary clothes", isCorrect: false, feedback: "Incorrect. Focus on safety, not packing clothes." },
        { text: "Watch TV", isCorrect: false, feedback: "Incorrect. Watching TV does not help in emergencies." },
      ],
    },
    {
      question: "Which transport is safest during floods?",
      options: [
        { text: "Boats or raised platforms", isCorrect: true, feedback: "Correct! Boats or raised platforms are safest during floods." },
        { text: "Motorbikes", isCorrect: false, feedback: "Incorrect. Motorbikes are unsafe in flooded areas." },
        { text: "Bicycle", isCorrect: false, feedback: "Incorrect. Bicycles are unsafe in floodwaters." },
      ],
    },
    {
      question: "Where should you not take shelter during heavy flooding?",
      options: [
        { text: "Near rivers or low-lying areas", isCorrect: true, feedback: "Correct! Avoid rivers and low-lying areas during floods." },
        { text: "On a hill", isCorrect: false, feedback: "Incorrect. Hills are safer during floods." },
        { text: "In an elevated building", isCorrect: false, feedback: "Incorrect. Elevated buildings are safer than low areas." },
      ],
    },
    {
      question: "What should you avoid drinking during floods?",
      options: [
        { text: "Untreated water from floodwater", isCorrect: true, feedback: "Correct! Untreated water can be contaminated." },
        { text: "Bottled water", isCorrect: false, feedback: "Incorrect. Bottled water is safe." },
        { text: "Boiled water", isCorrect: false, feedback: "Incorrect. Boiled water is safe." },
      ],
    },
    {
      question: "Which communication method is safest during floods?",
      options: [
        { text: "Mobile phones or emergency radios", isCorrect: true, feedback: "Correct! Mobile phones or radios are the safest ways to communicate." },
        { text: "Shouting across streets", isCorrect: false, feedback: "Incorrect. Shouting may not reach anyone and is unsafe." },
        { text: "Using public loudspeakers", isCorrect: false, feedback: "Incorrect. Public loudspeakers are not reliable for emergency communication." },
      ],
    },
  ],
];

export default function FloodQuiz2() {
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
