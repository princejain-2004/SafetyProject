import React, { useState } from "react";

const quizSets = [
  [
    {
      question:
        "Before a flood, what is the most important item to pack in your emergency kit?",
      options: [
        {
          text: "Non-perishable food and water",
          isCorrect: true,
          feedback:
            "Correct! You need at least three days' supply of food and water for each person.",
        },
        {
          text: "Your favorite video game console",
          isCorrect: false,
          feedback:
            "Incorrect. While entertainment is nice, survival essentials are the priority. Try again.",
        },
        {
          text: "Your most comfortable pillow",
          isCorrect: false,
          feedback:
            "Incorrect. Comfort is secondary to safety. Non-perishable supplies are more important. Try again.",
        },
      ],
    },
    {
      question:
        "If a flood warning is issued, where should you move your valuable documents and electronics?",
      options: [
        {
          text: "To the basement or lowest floor of your home.",
          isCorrect: false,
          feedback:
            "Incorrect. The lowest levels are the first to flood. You'll lose your valuables. Try again.",
        },
        {
          text: "To the highest floor or a high shelf.",
          isCorrect: true,
          feedback:
            "Correct! Getting your valuables to higher ground is the best way to protect them from rising water.",
        },
        {
          text: "To a neighbor's house that is on lower ground.",
          isCorrect: false,
          feedback:
            "Incorrect. Your neighbor's house might flood too. You need to secure your items on high ground. Try again.",
        },
      ],
    },
  ],
  [
    {
      question: "During a flood, what is the best way to travel through flooded areas?",
      options: [
        {
          text: "Walking or swimming through floodwaters.",
          isCorrect: false,
          feedback:
            "Incorrect. Floodwaters can hide dangerous objects, electrical wires, or strong currents. You should never walk through them. Try again.",
        },
        {
          text: "Driving a car through the water.",
          isCorrect: false,
          feedback:
            "Incorrect. As little as 15 cm of moving water can knock you off your feet, and 60 cm can sweep away a vehicle. Try again.",
        },
        {
          text: "Finding an elevated, safe route and staying out of the water.",
          isCorrect: true,
          feedback:
            "Correct! The safest option is to find higher ground and avoid contact with floodwaters at all costs.",
        },
      ],
    },
    {
      question: "What should you do if a 'flash flood' warning is issued for your area?",
      options: [
        {
          text: "Wait for more information before acting.",
          isCorrect: false,
          feedback:
            "Incorrect. Flash floods happen very quickly. Waiting could be dangerous. Try again.",
        },
        {
          text: "Immediately move to higher ground.",
          isCorrect: true,
          feedback:
            "Correct! Flash floods can occur with little to no warning, so moving to safety immediately is crucial.",
        },
        {
          text: "Stay in your home and wait it out.",
          isCorrect: false,
          feedback:
            "Incorrect. Your home might not be safe. You should always seek higher ground. Try again.",
        },
      ],
    },
  ],
  [
    {
      question: "After a flood, when is it safe to return to your home?",
      options: [
        {
          text: "When the water has completely receded.",
          isCorrect: false,
          feedback:
            "Incorrect. The water may have receded, but there could still be hidden dangers. Try again.",
        },
        {
          text: "As soon as authorities say it is safe.",
          isCorrect: true,
          feedback:
            "Correct! Only return home after local authorities have declared the area safe to enter.",
        },
        {
          text: "When you receive a text message from a friend saying it's okay.",
          isCorrect: false,
          feedback:
            "Incorrect. You should only trust official sources. Try again.",
        },
      ],
    },
    {
      question:
        "When you return to your home after a flood, what is the first thing you should check for?",
      options: [
        {
          text: "Any structural damage and gas leaks.",
          isCorrect: true,
          feedback:
            "Correct! There could be structural damage or hidden gas leaks. These must be checked before you proceed with cleanup.",
        },
        {
          text: "If your television and other electronics still work.",
          isCorrect: false,
          feedback:
            "Incorrect. You should never touch or use electrical equipment that has been wet. Try again.",
        },
        {
          text: "To see if your furniture can be saved.",
          isCorrect: false,
          feedback:
            "Incorrect. Your personal belongings are not as important as your safety. Try again.",
        },
      ],
    },
  ],
  [
    {
      question: "What is the primary danger of floodwater that you cannot see?",
      options: [
        {
          text: "Hidden sharp objects and submerged electrical wires.",
          isCorrect: true,
          feedback:
            "Correct! Floodwaters are often contaminated and can hide dangerous hazards like sharp debris or downed power lines.",
        },
        {
          text: "It is always safe to walk in floodwaters.",
          isCorrect: false,
          feedback:
            "Incorrect. This is never true. Floodwaters can be extremely dangerous. Try again.",
        },
        {
          text: "Only cars can be carried away by it.",
          isCorrect: false,
          feedback:
            "Incorrect. As little as 15 cm of moving water can knock a person off their feet. Try again.",
        },
      ],
    },
    {
      question: "What is the universal advice for flood safety?",
      options: [
        {
          text: "'Drop, Cover, and Hold On'",
          isCorrect: false,
          feedback:
            "Incorrect. That is for an earthquake. 'Turn Around, Don't Drown!' is the slogan for floods. Try again.",
        },
        {
          text: "'Look, Listen, and Live!'",
          isCorrect: false,
          feedback:
            "Incorrect. That is a rail safety campaign. 'Turn Around, Don't Drown!' is the slogan for floods. Try again.",
        },
        {
          text: "'Turn Around, Don't Drown!'",
          isCorrect: true,
          feedback:
            "Correct! This is the most important advice. Never attempt to walk or drive through floodwaters.",
        },
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
