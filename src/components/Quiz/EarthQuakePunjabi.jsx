import React, { useState } from "react";

const quizSets = [
  [
    {
      question:
        "ਭੂਚਾਲ ਦੌਰਾਨ ਚੋਟ ਤੋਂ ਬਚਣ ਲਈ ਘਰ ਵਿੱਚ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਣ ਚੀਜ਼ ਕਿਹੜੀ ਹੈ ਜਿਸਨੂੰ ਮਜ਼ਬੂਤ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        {
          text: "ਛੋਟੀਆਂ, ਹਲਕੀਆਂ ਚੀਜ਼ਾਂ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਹਾਲਾਂਕਿ ਸਾਰੀਆਂ ਚੀਜ਼ਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ, ਪਰ ਭਾਰੀ ਚੀਜ਼ਾਂ ਸਭ ਤੋਂ ਵੱਡਾ ਖਤਰਾ ਬਣਦੀਆਂ ਹਨ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਭਾਰੀ ਫਰਨੀਚਰ ਜਿਵੇਂ ਕਿ ਅਲਮਾਰੀ ਅਤੇ ਬੁੱਕਕੇਸ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਭਾਰੀ ਫਰਨੀਚਰ ਨੂੰ ਮਜ਼ਬੂਤ ਕਰਨ ਨਾਲ ਇਹ ਡਿੱਗਣ ਤੋਂ ਬਚਦਾ ਹੈ ਅਤੇ ਚੋਟਾਂ ਤੋਂ ਸੁਰੱਖਿਅਤ ਰੱਖਦਾ ਹੈ।",
        },
        {
          text: "ਦੀਵਾਰ ‘ਤੇ ਲੱਗੇ ਫ੍ਰੇਮ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਫ੍ਰੇਮ ਛੋਟਾ ਖਤਰਾ ਹਨ। ਪਹਿਲਾਂ ਭਾਰੀ ਫਰਨੀਚਰ ‘ਤੇ ਧਿਆਨ ਦਿਓ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
    {
      question: "ਭੂਚਾਲ ਐਮਰਜੈਂਸੀ ਲਈ ਤੁਹਾਨੂੰ ਪਹਿਲਾਂ ਤੋਂ ਕੀ ਤਿਆਰ ਰੱਖਣਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        {
          text: "ਐਮਰਜੈਂਸੀ ਕਿਟ ਜਿਸ ਵਿੱਚ ਸੁੱਕਾ ਖਾਣਾ, ਪਾਣੀ ਅਤੇ ਟਾਰਚ ਹੋਵੇ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਐਮਰਜੈਂਸੀ ਕਿਟ ਬਹੁਤ ਜ਼ਰੂਰੀ ਹੈ ਤਾਂ ਜੋ ਮਦਦ ਆਉਣ ਤੱਕ ਜ਼ਿੰਦਾ ਰਹਿਣ ਵਿੱਚ ਸਹਾਇਤਾ ਮਿਲੇ।",
        },
        {
          text: "ਆਪਣੇ ਸ਼ਹਿਰ ਦੇ ਸਾਰੇ ਮਾਲ ਦਾ ਨਕਸ਼ਾ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਸੁਰੱਖਿਆ ਖੇਤਰਾਂ ਅਤੇ ਖਾਲੀ ਕਰਨ ਵਾਲੇ ਰਸਤੇ ਦਾ ਨਕਸ਼ਾ ਹੋਰ ਜ਼ਿਆਦਾ ਮਹੱਤਵਪੂਰਨ ਹੈ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਪਰਿਵਾਰ ਲਈ ਨਵੇਂ ਕੱਪੜੇ ਅਤੇ ਜੁੱਤੇ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਕੱਪੜੇ ਲੋੜੀਂਦੇ ਹਨ, ਪਰ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਜੀਵਨ ਬਚਾਉਣ ਵਾਲੀਆਂ ਚੀਜ਼ਾਂ ਮਹੱਤਵਪੂਰਨ ਹਨ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
  ],
];

export default function EarthQuakeQuizPunjabi() {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 font-sans">
      {!started ? (
        // === Start Card on Main Page ===
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border-4 border-gray-500 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-400 mb-4">
            ਭੂਚਾਲ ਸੁਰੱਖਿਆ ਕਵਿਜ਼
          </h1>
          <img
            src="https://placehold.co/400x200/4a5568/ffffff?text=%E0%A8%AD%E0%A9%82%E0%A8%9A%E0%A8%BE%E0%A8%B2+QUIZ"
            alt="ਭੂਚਾਲ ਸੁਰੱਖਿਆ ਕਵਿਜ਼"
            className="mx-auto rounded-lg mb-4"
          />
          <p className="text-lg mb-4">
            ਆਪਣੀ ਜਾਣਕਾਰੀ ਜਾਂਚੋ ਅਤੇ ਸਿੱਖੋ ਕਿ ਭੂਚਾਲ ਦੌਰਾਨ ਕਿਵੇਂ ਸੁਰੱਖਿਅਤ ਰਹਿਣਾ ਹੈ!
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
          >
            ਕਵਿਜ਼ ਸ਼ੁਰੂ ਕਰੋ
          </button>
        </div>
      ) : (
        // === Full Screen Quiz ===
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 p-4">
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
                      ? "ਅਗਲਾ ਪ੍ਰਸ਼ਨ"
                      : currentSetIndex < quizSets.length - 1
                      ? "ਅਗਲੇ ਸੈੱਟ ਤੇ ਜਾਓ"
                      : "ਕਵਿਜ਼ ਖਤਮ ਕਰੋ"
                    : "ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ"}
                </button>
              )}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-400 mb-4">ਕਵਿਜ਼ ਸਮਾਪਤ!</h2>
              <p className="text-lg mb-6">ਤੁਹਾਡਾ ਸਕੋਰ ਹੈ {score} ਅੰਕ!</p>
              <button
                onClick={restartQuiz}
                className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-700"
              >
                ਕਵਿਜ਼ ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
