import React, { useState } from "react";

const quizSets_mr = [
  [
    {
      question: "भूकंपाच्या वेळी आपल्या घरातील कोणती वस्तू सुरक्षित ठेवणे सर्वात महत्त्वाचे आहे?",
      options: [
        { text: "लहान, हलक्या वस्तू", isCorrect: false, feedback: "चूक. सर्व वस्तू सुरक्षित कराव्यात, परंतु जड वस्तू सर्वात जास्त धोका निर्माण करतात." },
        { text: "जड फर्निचर जसे की बुककेस आणि कपाट", isCorrect: true, feedback: "बरोबर! जड फर्निचर सुरक्षित ठेवल्यास पडून दुखापत होण्याचा धोका कमी होतो." },
        { text: "भिंतीवर लावलेली चित्रे", isCorrect: false, feedback: "चूक. चित्रे कमी धोके आहेत. आधी जड फर्निचर सुरक्षित करा." },
      ],
    },
    {
      question: "भूकंपाच्या आपत्कालीन परिस्थितीसाठी आपल्याला पूर्वतयारीत काय ठेवावे?",
      options: [
        { text: "न नाश होणारे अन्न, पाणी आणि टॉर्चसह आपत्कालीन किट", isCorrect: true, feedback: "बरोबर! आपत्कालीन किट आपल्याला मदत येईपर्यंत जीवन रक्षक आहे." },
        { text: "शहरातील सर्व शॉपिंग मॉल्सचा तपशीलवार नकाशा", isCorrect: false, feedback: "चूक. सुरक्षा क्षेत्र आणि बाहेर पडण्याचे मार्ग अधिक महत्त्वाचे आहेत." },
        { text: "कुटुंबासाठी नवीन कपडे आणि बूट", isCorrect: false, feedback: "चूक. मुख्य लक्ष जीवनरक्षक वस्तूंवर असावे." },
      ],
    },
    {
      question: "भूकंपाच्या वेळी कोणती इमारती सुरक्षित असतात?",
      options: [
        { text: "अभियांत्रिकी नसलेल्या उंच इमारती", isCorrect: false, feedback: "चूक. अशा इमारती धोकादायक असतात." },
        { text: "भूकंप-प्रतिरोधक इमारती", isCorrect: true, feedback: "बरोबर! या इमारती हलचाली सहन करू शकतात." },
        { text: "जुनी स्मारके", isCorrect: false, feedback: "चूक. जुनी स्मारके सुरक्षित नसतात." },
      ],
    },
    {
      question: "भूकंपाच्या वेळी इमारतीतून बाहेर पडल्यावर कुठे जावे?",
      options: [
        { text: "संपूर्ण मोकळ्या मैदानात", isCorrect: true, feedback: "बरोबर! मोकळ्या मैदानात पडणाऱ्या वस्तूंचा धोका नाही." },
        { text: "तळघरात", isCorrect: false, feedback: "चूक. इमारत कोसळल्यास तळघर धोकादायक असते." },
        { text: "वीज खांबाजवळ", isCorrect: false, feedback: "चूक. वीज खांब कोसळू शकतात." },
      ],
    },
  ],
];


export default function EarthquakeQuiz2marathi() {
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
