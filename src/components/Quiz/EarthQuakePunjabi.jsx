import React, { useState } from "react";

const quizSets_pa = [
  [
    {
      question: "ਭੂਚਾਲ ਦੌਰਾਨ ਆਪਣੇ ਘਰ ਵਿੱਚ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਚੀਜ਼ ਕਿਹੜੀ ਸੁਰੱਖਿਅਤ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ?",
      options: [
        { text: "ਛੋਟੀ, ਹਲਕੀ ਚੀਜ਼ਾਂ", isCorrect: false, feedback: "ਗਲਤ। ਸਭ ਚੀਜ਼ਾਂ ਸੁਰੱਖਿਅਤ ਹੋਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ, ਪਰ ਭਾਰੀ ਚੀਜ਼ਾਂ ਸਭ ਤੋਂ ਜ਼ਿਆਦਾ ਖਤਰਨਾਕ ਹੁੰਦੀਆਂ ਹਨ।" },
        { text: "ਭਾਰੀ ਫਰਨੀਚਰ ਜਿਵੇਂ ਬੁੱਕਕੇਸ ਅਤੇ ਕੈਬਿਨੇਟ", isCorrect: true, feedback: "ਸਹੀ! ਭਾਰੀ ਫਰਨੀਚਰ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਣ ਨਾਲ ਡਿੱਗਣ ਅਤੇ ਚੋਟ ਲੱਗਣ ਦਾ ਖਤਰਾ ਘੱਟ ਹੁੰਦਾ ਹੈ।" },
        { text: "ਦੀਵਾਰ 'ਤੇ ਲੱਗੇ ਫ੍ਰੇਮ", isCorrect: false, feedback: "ਗਲਤ। ਫ੍ਰੇਮ ਘੱਟ ਖਤਰੇ ਵਾਲੇ ਹਨ। ਪਹਿਲਾਂ ਭਾਰੀ ਫਰਨੀਚਰ ਸੁਰੱਖਿਅਤ ਕਰੋ।" },
      ],
    },
    {
      question: "ਭੂਚਾਲ ਦੀ ਐਮਰਜੈਂਸੀ ਲਈ ਤੁਸੀਂ ਪਹਿਲਾਂ ਤੋਂ ਕੀ ਤਿਆਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        { text: "ਨਾਨ-ਪਰੇਸ਼ੇਬਲ ਖਾਣਾ, ਪਾਣੀ ਅਤੇ ਟਾਰਚ ਵਾਲਾ ਐਮਰਜੈਂਸੀ ਕਿਟ", isCorrect: true, feedback: "ਸਹੀ! ਐਮਰਜੈਂਸੀ ਕਿਟ ਜੀਵਨ ਰੱਖਣ ਲਈ ਜਰੂਰੀ ਹੈ।" },
        { text: "ਸਾਰੇ ਮਾਲਾਂ ਦਾ ਨਕਸ਼ਾ", isCorrect: false, feedback: "ਗਲਤ। ਸੁਰੱਖਿਆ ਖੇਤਰ ਅਤੇ ਬਚਾਅ ਰਸਤੇ ਮਹੱਤਵਪੂਰਨ ਹਨ।" },
        { text: "ਨਵੇਂ ਕਪੜੇ ਅਤੇ ਜੁੱਤੇ", isCorrect: false, feedback: "ਗਲਤ। ਮੁੱਖ ਧਿਆਨ ਜੀਵਨ-ਰੱਖਣ ਵਾਲੀ ਚੀਜ਼ਾਂ 'ਤੇ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।" },
      ],
    },
    {
      question: "ਭੂਚਾਲ ਦੌਰਾਨ ਕਿਹੜੀਆਂ ਇਮਾਰਤਾਂ ਸੁਰੱਖਿਅਤ ਹੁੰਦੀਆਂ ਹਨ?",
      options: [
        { text: "ਬਿਨਾ ਇੰਜੀਨੀਅਰਿੰਗ ਵਾਲੀਆਂ ਉੱਚੀਆਂ ਇਮਾਰਤਾਂ", isCorrect: false, feedback: "ਗਲਤ। ਇਹਨਾਂ ਇਮਾਰਤਾਂ ਖਤਰਨਾਕ ਹੁੰਦੀਆਂ ਹਨ।" },
        { text: "ਭੂਚਾਲ-ਰੋਧੀ ਇਮਾਰਤਾਂ", isCorrect: true, feedback: "ਸਹੀ! ਇਹ ਝਟਕਿਆਂ ਨੂੰ ਸਹਿਣ ਲਈ ਬਣਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ।" },
        { text: "ਪੁਰਾਣੇ ਸਮਾਰਕ", isCorrect: false, feedback: "ਗਲਤ। ਪੁਰਾਣੇ ਸਮਾਰਕ ਅਕਸਰ ਸੁਰੱਖਿਅਤ ਨਹੀਂ ਹੁੰਦੇ।" },
      ],
    },
    {
      question: "ਭੂਚਾਲ ਦੌਰਾਨ ਇਮਾਰਤ ਤੋਂ ਬਾਹਰ ਨਿਕਲਣ ਦੇ ਬਾਅਦ ਕਿੱਥੇ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        { text: "ਖੁੱਲ੍ਹੇ ਮੈਦਾਨ ਵਿੱਚ", isCorrect: true, feedback: "ਸਹੀ! ਖੁੱਲ੍ਹੇ ਮੈਦਾਨ ਵਿੱਚ ਡਿੱਗਦੀਆਂ ਚੀਜ਼ਾਂ ਦਾ ਖਤਰਾ ਨਹੀਂ ਹੁੰਦਾ।" },
        { text: "ਬੇਸਮੈਂਟ ਵਿੱਚ", isCorrect: false, feedback: "ਗਲਤ। ਜੇ ਇਮਾਰਤ ਡਿੱਗ ਜਾਏ ਤਾਂ ਬੇਸਮੈਂਟ ਖਤਰਨਾਕ ਹੈ।" },
        { text: "ਬਿਜਲੀ ਦੇ ਖੰਭਿਆਂ ਕੋਲ", isCorrect: false, feedback: "ਗਲਤ। ਬਿਜਲੀ ਦੇ ਖੰਭੇ ਡਿੱਗ ਸਕਦੇ ਹਨ।" },
      ],
    },
  ],
];


export default function EarthQuakeQuizpunjabi() {
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
