import React, { useState } from "react";

const quizSets_gu = [
  // Set 1: Emergency Preparation
  [
    {
      question: "વાર પહેલા, આપાતકાલીન કિટમાં કઈ વસ્તુ સૌથી મહત્વપૂર્ણ છે?",
      options: [
        { text: "અખાદ્ય ખોરાક અને પાણી", isCorrect: true, feedback: "સાચું! દરેક વ્યક્તિ માટે ઓછામાં ઓછા ત્રણ દિવસ પૂરતો ખોરાક અને પાણી હોવું જરૂરી છે." },
        { text: "તમારી ફેવરિટ વિડિઓ ગેમ કન્સોલ", isCorrect: false, feedback: "ખોટું. મનોરંજન મહત્વપૂર્ણ નથી, જીવનરક્ષક વસ્તુઓ મહત્વપૂર્ણ છે." },
        { text: "તમારી સૌથી આરામદાયક તકો", isCorrect: false, feedback: "ખોટું. સુરક્ષા પ્રથમ, આરામ પછી." },
      ],
    },
    {
      question: "વારની ચેતવણી આવે તો, કિંમતી દસ્તાવેજો અને ઇલેક્ટ્રોનિક્સ ક્યાં રાખવા જોઈએ?",
      options: [
        { text: "બેઝમેન્ટ અથવા નીચલો માળ", isCorrect: false, feedback: "ખોટું. નીચલા માળ પહેલાં પૂર પામે છે. તમારી કિંમતી વસ્તુઓ ખોવાઈ શકે છે." },
        { text: "ઉચ્ચ માળ અથવા ઊંચી શેલ્ફ પર", isCorrect: true, feedback: "સાચું! ઊંચા જગ્યાએ વસ્તુઓ મૂકી તેમને પાણીથી બચાવવું શ્રેષ્ઠ છે." },
        { text: "ગણેશ પાડોશીની નીચલી જમીનવાળી ઘરમાં", isCorrect: false, feedback: "ખોટું. પadosસીના ઘર પણ પૂર આવે શકે છે." },
      ],
    },
  ],

  // Set 2: Flood Movement
  [
    {
      question: "વરસાદ અથવા પૂર સમયે, પાણીવાળી જગ્યાઓમાંથી પસાર થવાનું સૌથી સલામત રીત શું છે?",
      options: [
        { text: "પાણીમાંથી ચાલવું અથવા તરવું", isCorrect: false, feedback: "ખોટું. પૂરનો પાણી જોખમી હોઈ શકે છે, તેમાં છુપાયેલા કટારાઓ અથવા વીજ તાર હોઈ શકે છે." },
        { text: "ગાડી ચલાવવી", isCorrect: false, feedback: "ખોટું. માત્ર 15 સેમી પાણી પણ વ્યક્તિને લટકાવી શકે છે, 60 સેમી પાણી ગાડી લઈ જઈ શકે છે." },
        { text: "ઉંચી અને સલામત રુટ શોધી પાણીથી દૂર રહેવું", isCorrect: true, feedback: "સાચું! ઊંચી જમીન શોધવી અને પાણીના સંપર્કમાંથી દૂર રહેવું સૌથી સલામત છે." },
      ],
    },
    {
      question: "'ફ્લૅશ ફ્લડ' ચેતવણી આવતી વખતે શું કરવું?",
      options: [
        { text: "વધુ માહિતી માટે રાહ જોવી", isCorrect: false, feedback: "ખોટું. ફ્લૅશ ફ્લડ ખૂબ જ ઝડપી થાય છે. રાહ જોવી જોખમી છે." },
        { text: "તાત્કાલિક ઊંચી જમીન પર જવું", isCorrect: true, feedback: "સાચું! તાત્કાલિક સલામત ઊંચી જગ્યાએ જવું જરૂરી છે." },
        { text: "ઘરમાં રહેવું", isCorrect: false, feedback: "ખોટું. તમારું ઘર સુરક્ષિત ન હોઈ શકે, હંમેશા ઊંચી જમીન પર જવું." },
      ],
    },
  ],

  // Set 3: Returning Home
  [
    {
      question: "પોર પછી, ક્યારે તમારું ઘર પર પાછું જવું સલામત છે?",
      options: [
        { text: "જ્યારે પાણી સંપૂર્ણ રીતે recession થયું હોય", isCorrect: false, feedback: "ખોટું. પાણી recession પછી પણ છુપાયેલ જોખમ હોઈ શકે છે." },
        { text: "સરકારી અધિકારીઓ ઘરના સુરક્ષિત હોવાનો જણાવ્યું હોય ત્યારે", isCorrect: true, feedback: "સાચું! સ્થાનિક અધિકારીઓ ઘરમાં પ્રવેશ માટે સલામત જાહેર કર્યા પછી જ પાછું જવું જોઈએ." },
        { text: "મિત્ર પાસેથી ટેક્સ્ટ મેસેજ મળ્યા પછી", isCorrect: false, feedback: "ખોટું. ફક્ત સત્તાવાર સ્ત્રોત પર વિશ્વાસ કરો." },
      ],
    },
    {
      question: "વેરા પછી પહેલી તપાસ શું કરવી જોઈએ?",
      options: [
        { text: "કોઈ પણ માળની નુકશાન અને ગેસ લીક", isCorrect: true, feedback: "સાચું! સંરચનાત્મક નુકશાન અથવા છુપાયેલા ગેસ લીક તપાસવી આવશ્યક છે." },
        { text: "ટેલિવિઝન અને અન્ય ઇલેક્ટ્રોનિક્સ કામ કરે છે કે નહીં", isCorrect: false, feedback: "ખોટું. ભેજવાળા ઇલેક્ટ્રોનિક્સને સ્પર્શ ન કરો." },
        { text: "ફર્નિચર બચાવી શકાય છે કે નહીં", isCorrect: false, feedback: "ખોટું. તમારી સલામતી સૌથી મહત્વપૂર્ણ છે." },
      ],
    },
  ],

  // Set 4: Flood Hazards & Safety Advice
  [
    {
      question: "તમે જે જોઈ શકતા નથી તે પ્રકારની પૂરનું મુખ્ય જોખમ શું છે?",
      options: [
        { text: "છુપાયેલા ધારદાર વસ્તુઓ અને વીજ તાર", isCorrect: true, feedback: "સાચું! પૂરનું પાણી ઘણીવાર જોખમી હોય છે." },
        { text: "પાણીમાં ચાલવું હંમેશા સલામત છે", isCorrect: false, feedback: "ખોટું. પુરનો પાણી ખૂબ જોખમી હોઈ શકે છે." },
        { text: "માત્ર કાર વહન થઈ શકે છે", isCorrect: false, feedback: "ખોટું. થોડું પાણી પણ જોખમકારક છે." },
      ],
    },
    {
      question: "પોર માટે સર્વમાન્ય સલામતી સૂચન શું છે?",
      options: [
        { text: "'ડ્રોપ, કવર અને હોલ્ડ ઓન'", isCorrect: false, feedback: "ખોટું. આ ભૂકંપ માટે છે. પૂર માટે: 'Turn Around, Don't Drown!'" },
        { text: "'લુક, લિસન, એન્ડ લિવ!'", isCorrect: false, feedback: "ખોટું. આ રેલવે સલામતી અભિયાન માટે છે." },
        { text: "'Turn Around, Don't Drown!'", isCorrect: true, feedback: "સાચું! પાણીમાંથી પસાર થવાનું કે ડ્રાઈવિંગ કરવાનું ક્યારેય ન કરવું." },
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
