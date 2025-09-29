import React, { useState } from "react";

const quizSets_gu = [
  [
    {
      question: "ભૂકંપ દરમિયાન તમારા ઘરમાં કઈ વસ્તુને સુરક્ષિત રાખવી સૌથી મહત્વપૂર્ણ છે?",
      options: [
        { text: "નાની, હલકી વસ્તુઓ", isCorrect: false, feedback: "ખોટું. બધી વસ્તુઓ સુરક્ષિત હોવી જોઈએ, પરંતુ ભારે વસ્તુઓ સૌથી વધારે જોખમી હોય છે." },
        { text: "ભારી ફર્નિચર જેવી કેબિનેટ અને બુકકેસ", isCorrect: true, feedback: "સાચું! ભારે ફર્નિચર સુરક્ષિત રાખવાથી પડવાથી ઈજા થવાનો જોખમ ઓછો થાય છે." },
        { text: "ભીતર લગાવવામાં આવેલ ચિત્ર ફ્રેમ", isCorrect: false, feedback: "ખોટું. ચિત્ર ફ્રેમ ઓછા જોખમ ધરાવે છે. પહેલા ભારે ફર્નિચર સુરક્ષિત કરો." },
      ],
    },
    {
      question: "ભૂકંપની આફત માટે તમને શું પૂર્વ તૈયારીમાં રાખવી જોઈએ?",
      options: [
        { text: "નન-પેરિશેબલ ખોરાક, પાણી અને ટોર્ચ સાથેની ઈમર્જન્સી કિટ", isCorrect: true, feedback: "સાચું! ઈમર્જન્સી કિટ મદદ આવતાં સુધી જીવ બચાવે છે." },
        { text: "તમારા શહેરની તમામ શોપિંગ મોલ્સનો વિગતવાર નકશો", isCorrect: false, feedback: "ખોટું. સુરક્ષા ક્ષેત્ર અને બહાર નીકળવાના રસ્તા વધુ મહત્વપૂર્ણ છે." },
        { text: "કુટુંબ માટે નવા કપડા અને શૂઝ", isCorrect: false, feedback: "ખોટું. મુખ્ય ધ્યાન જીવ બચાવવાની ચીજ પર હોવું જોઈએ." },
      ],
    },
    {
      question: "ભૂકંપ દરમિયાન કઈ ઇમારતો સુરક્ષિત હોય છે?",
      options: [
        { text: "ઈજનેરી વગરની ઊંચી ઈમારતો", isCorrect: false, feedback: "ખોટું. આવા બિલ્ડિંગ્સ જોખમી હોય છે." },
        { text: "ભૂકંપ-પ્રતિકારક બિલ્ડિંગ્સ", isCorrect: true, feedback: "સાચું! આ બિલ્ડિંગ્સ ઝટકાને સહન કરી શકે છે." },
        { text: "જૂના સ્મારકો", isCorrect: false, feedback: "ખોટું. જૂના સ્મારકો સામાન્ય રીતે સુરક્ષિત નથી." },
      ],
    },
    {
      question: "ભૂકંપ દરમિયાન ઇમારતમાંથી બહાર નીકળ્યા પછી ક્યાં જવું જોઈએ?",
      options: [
        { text: "ખુલ્લા મેદાનમાં", isCorrect: true, feedback: "સાચું! ખુલ્લા મેદાનમાં પડતી વસ્તુઓનો જોખમ નથી." },
        { text: "બેઝમેન્ટમાં", isCorrect: false, feedback: "ખોટું. ઇમારત ધરાશાયી થઈ જાય તો બેઝમેન્ટ જોખમી હોય છે." },
        { text: "વીજના થાંભલા નજીક", isCorrect: false, feedback: "ખોટું. વીજના થાંભલા પડી શકે છે." },
      ],
    },
  ],
];



export default function EarthquakeQuizHindi() {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 font-inter">
      {!started ? (
        // === प्रारंभिक कार्ड ===
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border-4 border-gray-500 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-400 mb-4">
            भूकंप तैयारी प्रश्नोत्तरी
          </h1>
          <img
            src="https://placehold.co/400x200/4a5568/ffffff?text=EARTHQUAKE+QUIZ"
            alt="Earthquake Quiz"
            className="mx-auto rounded-lg mb-4"
          />
          <p className="text-lg mb-4">
            अपना ज्ञान जाँचें और जानें कि भूकंप के दौरान सुरक्षित कैसे रहें!
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
          >
            प्रश्नोत्तरी शुरू करें
          </button>
        </div>
      ) : (
        // === पूर्ण प्रश्नोत्तरी ===
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 p-4">
          {!finished ? (
            <div className="flex flex-col gap-4 w-full max-w-2xl">
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-xl font-bold mb-4">
                  {currentQuestion.question}
                </h2>
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
                      ? "अगला प्रश्न"
                      : currentSetIndex < quizSets.length - 1
                      ? "अगले सेट पर जाएँ"
                      : "प्रश्नोत्तरी समाप्त करें"
                    : "फिर से प्रयास करें"}
                </button>
              )}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-400 mb-4">
                प्रश्नोत्तरी समाप्त!
              </h2>
              <p className="text-lg mb-6">आपने {score} अंक प्राप्त किए!</p>
              <button
                onClick={restartQuiz}
                className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-700"
              >
                पुनः शुरू करें
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
