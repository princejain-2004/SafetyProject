import React, { useState } from "react";

const quizSets = [
  // Quiz Set 1: Fire Prevention
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
  ],
  // Quiz Set 2: During a Fire
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
  // Quiz Set 3: Fire Extinguisher Use
  [
    {
      question: "What does the 'A' in the acronym PASS for using a fire extinguisher stand for?",
      options: [
        {
          text: "Aim at the base of the fire.",
          isCorrect: true,
          feedback:
            "Correct! You must aim the nozzle at the base of the fire to put it out effectively.",
        },
        {
          text: "Act quickly and calmly.",
          isCorrect: false,
          feedback:
            "Incorrect. While acting quickly is important, 'A' stands for aiming at the base of the fire. Try again.",
        },
        {
          text: "Always have a clear escape route.",
          isCorrect: false,
          feedback:
            "Incorrect. This is an important safety rule, but not what the 'A' in PASS stands for. Try again.",
        },
      ],
    },
    {
      question:
        "What should you do if the fire is too large to fight with an extinguisher?",
      options: [
        {
          text: "Continue to fight the fire until help arrives.",
          isCorrect: false,
          feedback:
            "Incorrect. Fighting a large fire is extremely dangerous. You should never risk your safety. Try again.",
        },
        {
          text: "Close the door to the room and evacuate immediately.",
          isCorrect: true,
          feedback:
            "Correct! Closing the door can help contain the fire and slow its spread, giving you more time to get out safely.",
        },
        {
          text: "Go back into the room to grab valuables.",
          isCorrect: false,
          feedback:
            "Incorrect. Your life is more valuable than any possession. Never re-enter a burning building. Try again.",
        },
      ],
    },
  ],
  // Quiz Set 4: The Fire Plan
  [
    {
      question: "How often should you test your smoke alarms?",
      options: [
        {
          text: "Once a year.",
          isCorrect: false,
          feedback:
            "Incorrect. While once a year is a good start, you should test them more frequently. Try again.",
        },
        {
          text: "Once a month.",
          isCorrect: true,
          feedback:
            "Correct! You should test your smoke alarms at least once a month to ensure they are working properly.",
        },
        {
          text: "Only when the battery beeps.",
          isCorrect: false,
          feedback:
            "Incorrect. You should never wait for the battery to die. This can be too late in an emergency. Try again.",
        },
      ],
    },
    {
      question:
        "What is the purpose of having a designated 'meeting place' in your family fire plan?",
      options: [
        {
          text: "To meet up with friends after you escape.",
          isCorrect: false,
          feedback: "Incorrect. The meeting place is for your family. Try again.",
        },
        {
          text: "To find out if everyone has made it out safely.",
          isCorrect: true,
          feedback:
            "Correct! A designated meeting place ensures everyone knows where to go and helps you quickly account for all family members.",
        },
        {
          text: "To store extra clothes and supplies.",
          isCorrect: false,
          feedback:
            "Incorrect. The main purpose is to account for family members. Supplies can be stored elsewhere. Try again.",
        },
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

