import React, { useState } from "react";

const quizSetsTamil = [
  [
    {
      question: "மின்சார தீக்கு நீர் ஏன் ஊற்றக்கூடாது?",
      options: [
        {
          text: "இது தீவை மேலும் பெரியதாக மாற்றுகிறது",
          isCorrect: true,
          feedback: "சரி! நீர் மின்சாரத்தை கடத்துகிறது, தீ மேலும் பரவலாம் அல்லது மின்சாரம் ஏற்படலாம்.",
        },
        {
          text: "நீர் வீணாகிறது",
          isCorrect: false,
          feedback: "தவறு. முக்கியமான ஆபத்து மின்சாரம், நீர் வீணாகல் அல்ல. மீண்டும் முயற்சி செய்.",
        },
        {
          text: "மிகவும் மெதுவாக உள்ளது",
          isCorrect: false,
          feedback: "தவறு. முக்கிய காரணம் பாதுகாப்பு, வேகம் அல்ல. மீண்டும் முயற்சி செய்.",
        },
      ],
    },
    {
      question: "தீக்கு முன் கதவை திறப்பதற்கு முன் என்ன செய்ய வேண்டும்?",
      options: [
        {
          text: "வெப்பமுள்ளதா என்று தொடுக",
          isCorrect: true,
          feedback: "சரி! கதவை தொடுவது தீ அல்லது புகை நிறைந்த அறையில் செல்லாமல் தடுக்கும்.",
        },
        {
          text: "விரைவில் திறக்கவும்",
          isCorrect: false,
          feedback: "தவறு. மிக விரைவில் திறப்பது ஆபத்தானது. மீண்டும் முயற்சி செய்.",
        },
        {
          text: "தகருங்கள்",
          isCorrect: false,
          feedback: "தவறு. பரிசோதனை இல்லாமல் கதவை உடைப்பது ஆபத்தானது. மீண்டும் முயற்சி செய்.",
        },
      ],
    },
  ],
];


export default function FireQuiz2tamil() {
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

