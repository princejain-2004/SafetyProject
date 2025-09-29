import React, { useState } from "react";

const quizSets_hi = [
  [
    {
      question: "भूकंप के दौरान अपने घर में किस वस्तु को सुरक्षित रखना सबसे महत्वपूर्ण है?",
      options: [
        {
          text: "छोटी, हल्की वस्तुएँ",
          isCorrect: false,
          feedback: "गलत। सभी वस्तुएँ सुरक्षित करनी चाहिए, लेकिन भारी वस्तुएँ सबसे अधिक खतरे की होती हैं।",
        },
        {
          text: "भारी फर्नीचर जैसे बुककेस और अलमारियाँ",
          isCorrect: true,
          feedback: "सही! भारी फर्नीचर को सुरक्षित रखने से गिरने और चोट लगने का खतरा कम होता है।",
        },
        {
          text: "दीवार पर लगे चित्र फ़्रेम",
          isCorrect: false,
          feedback: "गलत। चित्र फ़्रेम कम खतरे वाली वस्तु हैं। पहले भारी फर्नीचर सुरक्षित करें।",
        },
      ],
    },
    {
      question: "भूकंप की आपात स्थिति के लिए आपको पहले से क्या तैयार करना चाहिए?",
      options: [
        {
          text: "नॉन-परेशेबल भोजन, पानी और टॉर्च वाला इमरजेंसी किट",
          isCorrect: true,
          feedback: "सही! इमरजेंसी किट आपातकाल में जीवन रक्षक है।",
        },
        {
          text: "अपने शहर के सभी शॉपिंग मॉल का विस्तृत नक्शा",
          isCorrect: false,
          feedback: "गलत। सुरक्षा क्षेत्र और निकासी मार्ग का नक्शा अधिक महत्वपूर्ण है।",
        },
        {
          text: "अपने परिवार के लिए नए कपड़े और जूते",
          isCorrect: false,
          feedback: "गलत। मुख्य फोकस जीवन रक्षा आपूर्ति पर होना चाहिए।",
        },
      ],
    },
    {
      question: "भूकंप के दौरान कौन सी इमारतें सुरक्षित होती हैं?",
      options: [
        { text: "बिना इंजीनियरिंग वाली ऊँची इमारतें", isCorrect: false, feedback: "गलत। ऐसी इमारतें खतरे में होती हैं।" },
        { text: "भूकंप-रोधी संरचनाएँ", isCorrect: true, feedback: "सही! ये झटकों को सहन कर सकती हैं।" },
        { text: "पुराने स्मारक", isCorrect: false, feedback: "गलत। पुराने स्मारक आमतौर पर असुरक्षित होते हैं।" },
      ],
    },
    {
      question: "भूकंप के दौरान इमारत से बाहर निकलने के बाद कहाँ जाना चाहिए?",
      options: [
        { text: "खुले मैदान में", isCorrect: true, feedback: "सही! खुले मैदान में गिरने वाली वस्तुओं का खतरा नहीं होता।" },
        { text: "तहखाने में", isCorrect: false, feedback: "गलत। अगर इमारत गिर जाए तो तहखाना खतरनाक होता है।" },
        { text: "बिजली के खंभों के पास", isCorrect: false, feedback: "गलत। बिजली के खंभे गिर सकते हैं।" },
      ],
    },
  ],
];


export default function EarthQuakeQuizhindi() {
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
            भूकंप सुरक्षा क्विज़
          </h1>
          <img
            src="https://placehold.co/400x200/4a5568/ffffff?text=%E0%A4%AD%E0%A5%82%E0%A4%95%E0%A4%82%E0%A4%AA+QUIZ"
            alt="भूकंप सुरक्षा क्विज़"
            className="mx-auto rounded-lg mb-4"
          />
          <p className="text-lg mb-4">
            अपनी जानकारी जाँचें और सीखें कि भूकंप के दौरान कैसे सुरक्षित रहना है!
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
          >
            क्विज़ शुरू करें
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
                      ? "अगला प्रश्न"
                      : currentSetIndex < quizSets.length - 1
                      ? "अगले सेट पर जाएं"
                      : "क्विज़ समाप्त करें"
                    : "दोबारा कोशिश करें"}
                </button>
              )}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-400 mb-4">क्विज़ समाप्त!</h2>
              <p className="text-lg mb-6">आपका स्कोर है {score} अंक!</p>
              <button
                onClick={restartQuiz}
                className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-700"
              >
                क्विज़ फिर से शुरू करें
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
