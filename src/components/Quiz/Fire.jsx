import React, { useState } from "react";

const quizSets = [
  // Quiz Set 1: Fire Prevention (existing)
  [
    {
      question: "To prevent a fire, where should you NOT leave a lit candle?",
      options: [
        {
          text: "On a sturdy, flat surface away from drafts.",
          isCorrect: false,
          feedback:
            "Incorrect. This is a good practice. Candles should be on a stable surface. Try again.",
        },
        {
          text: "Near curtains or other flammable materials.",
          isCorrect: true,
          feedback:
            "Correct! Keep candles and open flames away from anything that can easily catch fire.",
        },
        {
          text: "Inside a glass jar or holder.",
          isCorrect: false,
          feedback:
            "Incorrect. Using a proper holder is a good safety measure. Try again.",
        },
      ],
    },
    {
      question:
        "What is the most important thing to do to an electrical appliance that is not in use?",
      options: [
        {
          text: "Cover it with a cloth to keep it clean.",
          isCorrect: false,
          feedback: "Incorrect. This is not a fire safety practice. Try again.",
        },
        {
          text: "Leave it plugged in at all times.",
          isCorrect: false,
          feedback: "Incorrect. This can lead to electrical fires. Try again.",
        },
        {
          text: "Unplug it from the wall socket.",
          isCorrect: true,
          feedback:
            "Correct! Unplugging appliances when not in use helps prevent a potential fire from a short circuit.",
        },
      ],
    },
    // --- New Question 1 ---
    {
      question: "Why should you not throw water on an electrical fire?",
      options: [
        {
          text: "It makes the fire bigger",
          isCorrect: true,
          feedback:
            "Correct! Water conducts electricity and can make the fire worse or cause electrocution.",
        },
        {
          text: "It wastes water",
          isCorrect: false,
          feedback: "Incorrect. The main danger is electrical conduction, not water waste. Try again.",
        },
        {
          text: "It is too slow",
          isCorrect: false,
          feedback: "Incorrect. The main reason is safety, not speed. Try again.",
        },
      ],
    },
    // --- New Question 2 ---
    {
      question: "What should you do before opening a door during a fire?",
      options: [
        {
          text: "Touch it to check if it’s hot",
          isCorrect: true,
          feedback:
            "Correct! Feeling the door first helps you avoid walking into a room filled with fire or smoke.",
        },
        {
          text: "Open quickly",
          isCorrect: false,
          feedback: "Incorrect. Opening too quickly can be dangerous. Try again.",
        },
        {
          text: "Break it",
          isCorrect: false,
          feedback: "Incorrect. Breaking the door without checking can put you at risk. Try again.",
        },
      ],
    },
  ],

  // Quiz Set 2, 3, 4 (existing sets)...
  [
    {
      question:
        "If your clothes catch fire, what is the correct action to take?",
      options: [
        {
          text: "Run to find water to put it out.",
          isCorrect: false,
          feedback:
            "Incorrect. Running will fan the flames and make the fire worse. Try again.",
        },
        {
          text: "Yell for help as loudly as possible.",
          isCorrect: false,
          feedback:
            "Incorrect. While you should call for help, your first priority is to put out the fire. Try again.",
        },
        {
          text: "Stop, Drop, and Roll.",
          isCorrect: true,
          feedback:
            "Correct! This action helps to suffocate the fire and is the best way to put out flames on your clothes.",
        },
      ],
    },
    {
      question: "When exiting a smoky room, how should you move?",
      options: [
        {
          text: "Standing up straight to see over the smoke.",
          isCorrect: false,
          feedback:
            "Incorrect. Smoke rises. You should stay low to the ground to breathe cleaner air. Try again.",
        },
        {
          text: "Crawling on your hands and knees.",
          isCorrect: true,
          feedback:
            "Correct! By crawling, you stay below the thick, toxic smoke and are more likely to find your way to safety.",
        },
        {
          text: "Walking backward to avoid inhaling smoke.",
          isCorrect: false,
          feedback:
            "Incorrect. This can lead to you getting lost or running into an obstacle. Try again.",
        },
      ],
    },
  ],

  // Keep Quiz Set 3 and 4 unchanged
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

