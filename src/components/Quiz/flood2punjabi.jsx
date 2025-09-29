import React, { useState } from "react";

const floodQuizSets_Punjabi = [
  [
    {
      question: "ਬਾਰਸ਼ੀਲੇ ਇਲਾਕੇ ਵਿੱਚ ਫਸੇ ਹੋਏ ਹੋਣ 'ਤੇ ਸਭ ਤੋਂ ਸੁਰੱਖਿਅਤ ਕਾਰਵਾਈ ਕੀ ਹੈ?",
      options: [
        { text: "ਉੱਚੇ ਸਥਾਨ ਤੇ ਜਾਓ ਅਤੇ ਮਦਦ ਲਈ ਕਾਲ ਕਰੋ", isCorrect: true, feedback: "ਸਹੀ! ਉੱਚੇ ਸਥਾਨ ਤੇ ਜਾਣਾ ਅਤੇ ਮਦਦ ਲਈ ਕਾਲ ਕਰਨਾ ਸਭ ਤੋਂ ਸੁਰੱਖਿਅਤ ਹੈ।" },
        { text: "ਪਾਣੀ ਵਿੱਚ ਤੈਰੋ", isCorrect: false, feedback: "ਗਲਤ। ਪਾਣੀ ਵਿੱਚ ਤੈਰਨਾ ਖਤਰਨਾਕ ਹੈ।" },
        { text: "ਨੰਗੇ ਪੈਰ ਚੱਲੋ", isCorrect: false, feedback: "ਗਲਤ। ਨੰਗੇ ਪੈਰ ਚੱਲਣਾ ਜ਼ਖਮ ਜਾਂ ਇਨਫੈਕਸ਼ਨ ਦਾ ਕਾਰਨ ਬਣ ਸਕਦਾ ਹੈ।" },
      ],
    },
    {
      question: "ਬਾਰਸ਼ੀਲੇ ਮੌਸਮ ਵਿੱਚ ਕਿਹੜੀ ਚੀਜ਼ ਤਿਆਰ ਰੱਖਣੀ ਚਾਹੀਦੀ ਹੈ?",
      options: [
        { text: "ਐਮਰਜੈਂਸੀ ਟਾਰਚ ਅਤੇ ਬੈਟਰੀ", isCorrect: true, feedback: "ਸਹੀ! ਟਾਰਚ ਅਤੇ ਬੈਟਰੀ ਬਾਰਸ਼ ਦੌਰਾਨ ਜ਼ਰੂਰੀ ਹਨ।" },
        { text: "ਖੇਡ ਸਾਮਾਨ", isCorrect: false, feedback: "ਗਲਤ। ਖੇਡ ਸਾਮਾਨ ਐਮਰਜੈਂਸੀ ਲਈ ਨਹੀਂ।" },
        { text: "ਟੀਵੀ ਰਿਮੋਟ", isCorrect: false, feedback: "ਗਲਤ। ਟੀਵੀ ਰਿਮੋਟ ਸੁਰੱਖਿਆ ਲਈ ਜ਼ਰੂਰੀ ਨਹੀਂ।" },
      ],
    },
    {
      question: "ਬਾਰਸ਼ੀਲੇ ਪਾਣੀ ਵਿੱਚ ਚੱਲਣ ਤੋਂ ਕਿਉਂ ਬਚਣਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        { text: "ਇਹ ਪ੍ਰਦੂਸ਼ਿਤ ਹੋ ਸਕਦਾ ਹੈ ਅਤੇ ਤੇਜ਼ ਵਸਤੂਆਂ ਲੁਕਾ ਸਕਦਾ ਹੈ", isCorrect: true, feedback: "ਸਹੀ! ਬਾਰਸ਼ ਦਾ ਪਾਣੀ ਖਤਰਨਾਕ ਹੋ ਸਕਦਾ ਹੈ।" },
        { text: "ਇਹ ਤਾਜਗੀ ਦਿੰਦਾ ਹੈ", isCorrect: false, feedback: "ਗਲਤ। ਬਾਰਸ਼ ਦਾ ਪਾਣੀ ਸੁਰੱਖਿਅਤ ਨਹੀਂ।" },
        { text: "ਇਹ ਕਸਰਤ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ", isCorrect: false, feedback: "ਗਲਤ। ਬਾਰਸ਼ ਦਾ ਪਾਣੀ ਕਸਰਤ ਲਈ ਨਹੀਂ।" },
      ],
    },
    {
      question: "ਜੇ ਤੁਹਾਡਾ ਘਰ ਬਾਰਸ਼ੀਲ ਪਾਣੀ ਵਿੱਚ ਹੈ, ਤਾਂ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        { text: "ਬਿਜਲੀ ਅਤੇ ਗੈਸ ਬੰਦ ਕਰੋ", isCorrect: true, feedback: "ਸਹੀ! ਸੁਰੱਖਿਆ ਪਹਿਲਾਂ: ਬਿਜਲੀ ਅਤੇ ਗੈਸ ਬੰਦ ਕਰੋ।" },
        { text: "ਅਣਜਰੂਰੀ ਕੱਪੜੇ ਪੈਕ ਕਰੋ", isCorrect: false, feedback: "ਗਲਤ। ਸੁਰੱਖਿਆ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਹੈ।" },
        { text: "ਟੀਵੀ ਦੇਖੋ", isCorrect: false, feedback: "ਗਲਤ। ਟੀਵੀ ਦੇਖਣ ਨਾਲ ਮਦਦ ਨਹੀਂ ਮਿਲੇਗੀ।" },
      ],
    },
    {
      question: "ਬਾਰਸ਼ ਦੌਰਾਨ ਸਭ ਤੋਂ ਸੁਰੱਖਿਅਤ ਸਫਰ ਦਾ ਸਾਧਨ ਕੀ ਹੈ?",
      options: [
        { text: "ਨਾਵਾਂ ਜਾਂ ਉੱਚੇ ਪਲੇਟਫਾਰਮ", isCorrect: true, feedback: "ਸਹੀ! ਨਾਵਾਂ ਜਾਂ ਉੱਚੇ ਪਲੇਟਫਾਰਮ ਸਭ ਤੋਂ ਸੁਰੱਖਿਅਤ ਹਨ।" },
        { text: "ਮੋਟਰਸਾਈਕਲ", isCorrect: false, feedback: "ਗਲਤ। ਮੋਟਰਸਾਈਕਲ ਬਾਰਸ਼ ਦੌਰਾਨ ਅਸੁਰੱਖਿਅਤ ਹੈ।" },
        { text: "ਸਾਈਕਲ", isCorrect: false, feedback: "ਗਲਤ। ਸਾਈਕਲ ਬਾਰਸ਼ ਦੌਰਾਨ ਅਸੁਰੱਖਿਅਤ ਹੈ।" },
      ],
    },
    {
      question: "ਭਾਰੀ ਬਾਰਸ਼ ਦੌਰਾਨ ਕਿੱਥੇ ਆਸ਼ਰੇ ਨਹੀਂ ਲੈਣੇ ਚਾਹੀਦੇ?",
      options: [
        { text: "ਨਦੀਆਂ ਜਾਂ ਹੇਠਲੇ ਇਲਾਕੇ ਦੇ ਨੇੜੇ", isCorrect: true, feedback: "ਸਹੀ! ਨਦੀਆਂ ਅਤੇ ਹੇਠਲੇ ਇਲਾਕਿਆਂ ਤੋਂ ਦੂਰ ਰਹੋ।" },
        { text: "ਪਹਾੜੀ 'ਤੇ", isCorrect: false, feedback: "ਗਲਤ। ਪਹਾੜੀ ਸਥਾਨ ਸੁਰੱਖਿਅਤ ਹੈ।" },
        { text: "ਉੱਚੀ ਇਮਾਰਤ ਵਿੱਚ", isCorrect: false, feedback: "ਗਲਤ। ਉੱਚੀ ਇਮਾਰਤ ਸੁਰੱਖਿਅਤ ਹੈ।" },
      ],
    },
    {
      question: "ਬਾਰਸ਼ ਦੌਰਾਨ ਕੀ ਪੀਣ ਤੋਂ ਬਚਣਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        { text: "ਬਿਨਾ ਇਲਾਜ਼ ਵਾਲਾ ਬਾਰਸ਼ ਦਾ ਪਾਣੀ", isCorrect: true, feedback: "ਸਹੀ! ਬਿਨਾ ਇਲਾਜ਼ ਵਾਲਾ ਪਾਣੀ ਖਤਰਨਾਕ ਹੋ ਸਕਦਾ ਹੈ।" },
        { text: "ਬੋਤਲਬੰਦ ਪਾਣੀ", isCorrect: false, feedback: "ਗਲਤ। ਬੋਤਲਬੰਦ ਪਾਣੀ ਸੁਰੱਖਿਅਤ ਹੈ।" },
        { text: "ਉਬਲਾ ਪਾਣੀ", isCorrect: false, feedback: "ਗਲਤ। ਉਬਲਾ ਪਾਣੀ ਸੁਰੱਖਿਅਤ ਹੈ।" },
      ],
    },
    {
      question: "ਬਾਰਸ਼ ਦੌਰਾਨ ਸਭ ਤੋਂ ਸੁਰੱਖਿਅਤ ਸੰਚਾਰ ਕਿਹੜਾ ਹੈ?",
      options: [
        { text: "ਮੋਬਾਈਲ ਫੋਨ ਜਾਂ ਐਮਰਜੈਂਸੀ ਰੇਡੀਓ", isCorrect: true, feedback: "ਸਹੀ! ਮੋਬਾਈਲ ਫੋਨ ਜਾਂ ਐਮਰਜੈਂਸੀ ਰੇਡੀਓ ਸਭ ਤੋਂ ਸੁਰੱਖਿਅਤ ਹਨ।" },
        { text: "ਸੜਕ 'ਤੇ ਚੀਕਣਾ", isCorrect: false, feedback: "ਗਲਤ। ਇਹ ਸੁਰੱਖਿਅਤ ਅਤੇ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਨਹੀਂ ਹੈ।" },
        { text: "ਪਬਲਿਕ ਲਾਊਡਸਪੀਕਰ", isCorrect: false, feedback: "ਗਲਤ। ਇਹ ਭਰੋਸੇਮੰਦ ਨਹੀਂ ਹੈ।" },
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
