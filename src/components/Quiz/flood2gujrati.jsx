import React, { useState } from "react";

const floodQuizSets_Gujarati = [
  [
    {
      question: "પાણીના પૂરમાં ફસાય તો સુરક્ષિત પગલું કયું છે?",
      options: [
        { text: "ઊંચા સ્થળે જાઓ અને મદદ માટે કોલ કરો", isCorrect: true, feedback: "સાચું! ઊંચા સ્થળે જવું અને મદદ માંગવું સુરક્ષિત છે." },
        { text: "પાણીમાં તરવું", isCorrect: false, feedback: "ખોટું. પાણીમાં તરવું જોખમી છે." },
        { text: "ખાલી પગ વડે ચાલવું", isCorrect: false, feedback: "ખોટું. આ સુરક્ષિત નથી." },
      ],
    },
    {
      question: "પૂરના સીઝનમાં શું તૈયાર રાખવું જોઈએ?",
      options: [
        { text: "આપાતકાલીન ટોર્ચ અને બેટરી", isCorrect: true, feedback: "સાચું! ટોર્ચ અને બેટરી જરૂરી છે." },
        { text: "ખેલ સામગ્રી", isCorrect: false, feedback: "ખોટું. ઉપયોગી નથી." },
        { text: "ટીવી રિમોટ", isCorrect: false, feedback: "ખોટું. ઉપયોગી નથી." },
      ],
    },
    {
      question: "પૂરના પાણીમાં ચાલવું કેમ ટાળવું?",
      options: [
        { text: "તે પ્રદૂષિત હોઈ શકે છે અને ખતરનાક વસ્તુઓ છુપાવી શકે છે", isCorrect: true, feedback: "સાચું! પૂરની જળ સુરક્ષિત નથી." },
        { text: "તે ઠંડું લાગતું છે", isCorrect: false, feedback: "ખોટું. આ કારણ નથી." },
        { text: "આ વ્યાયામ માટે મદદરૂપ છે", isCorrect: false, feedback: "ખોટું. આ કારણ નથી." },
      ],
    },
    {
      question: "તમારું ઘર પૂરથી ભરાય તો પહેલા શું કરવું?",
      options: [
        { text: "વિદ્યુત અને ગેસ બંધ કરો", isCorrect: true, feedback: "સાચું! પ્રથમ સુરક્ષા મહત્વપૂર્ણ છે." },
        { text: "અનાવશ્યક કપડા પેક કરો", isCorrect: false, feedback: "ખોટું. સુરક્ષા પહેલા." },
        { text: "ટીવી જુઓ", isCorrect: false, feedback: "ખોટું. મદદ મેળવવી પ્રથમ." },
      ],
    },
    {
      question: "પૂરના સમયે સુરક્ષિત પરિવહન કયું છે?",
      options: [
        { text: "નાવ અથવા ઊંચી પ્લેટફોર્મ", isCorrect: true, feedback: "સાચું! સૌથી સુરક્ષિત રીત." },
        { text: "મોટરસાયકલ", isCorrect: false, feedback: "ખોટું. સુરક્ષિત નથી." },
        { text: "સાયકલ", isCorrect: false, feedback: "ખોટું. સુરક્ષિત નથી." },
      ],
    },
    {
      question: "ક્યાં આશ્રય ન લેવો?",
      options: [
        { text: "નદીઓના કિનારે અથવા નીચલા પ્રદેશમાં", isCorrect: true, feedback: "સાચું! જોખમી જગ્યાઓ ટાળો." },
        { text: "ટ્રિ હિલ પર", isCorrect: false, feedback: "ખોટું. સુરક્ષિત." },
        { text: "ઊંચી ઈમારતમાં", isCorrect: false, feedback: "ખોટું. સુરક્ષિત." },
      ],
    },
    {
      question: "પૂરના સમયે શું પીવું ટાળો?",
      options: [
        { text: "અપ્રક્રિયિત પૂરના પાણી", isCorrect: true, feedback: "સાચું! ખતરનાક છે." },
        { text: "બોટલનું પાણી", isCorrect: false, feedback: "ખોટું. સુરક્ષિત છે." },
        { text: "ઉકાળેલું પાણી", isCorrect: false, feedback: "ખોટું. સુરક્ષિત છે." },
      ],
    },
    {
      question: "પૂરના સમયે સુરક્ષિત સંચાર કયો છે?",
      options: [
        { text: "મોબાઇલ ફોન અથવા આપાતકાલીન રેડિયો", isCorrect: true, feedback: "સાચું! સુરક્ષિત છે." },
        { text: "રસ્તામાં કૉલિંગ", isCorrect: false, feedback: "ખોટું. સુરક્ષિત નથી." },
        { text: "પબ્લિક લાઉડસ્પીકર ઉપયોગ કરવો", isCorrect: false, feedback: "ખોટું. સુરક્ષિત નથી." },
      ],
    },
  ],
];


export default function FloodQuiz2gujrati() {
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
