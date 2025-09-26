import React, { useState } from "react";

const quizSets = [
  [
    {
      question:
        "भूकंप के दौरान चोट से बचने के लिए घर में सबसे महत्वपूर्ण चीज़ कौन सी है जिसे मज़बूत करना चाहिए?",
      options: [
        {
          text: "छोटी और हल्की चीज़ें।",
          isCorrect: false,
          feedback:
            "गलत। हालांकि सभी चीज़ों को सुरक्षित करना ज़रूरी है, लेकिन भारी चीज़ें सबसे बड़ा खतरा बनती हैं। दोबारा कोशिश करें।",
        },
        {
          text: "भारी फर्नीचर जैसे आलमारी और बुककेस।",
          isCorrect: true,
          feedback:
            "सही! भारी फर्नीचर को मज़बूत करने से यह गिरने से बचता है और चोटों से सुरक्षा मिलती है।",
        },
        {
          text: "दीवार पर लगे फ़्रेम।",
          isCorrect: false,
          feedback:
            "गलत। फ़्रेम छोटा खतरा हैं। पहले भारी फर्नीचर पर ध्यान दें। दोबारा कोशिश करें।",
        },
      ],
    },
    {
      question: "भूकंप आपातकाल के लिए आपको पहले से क्या तैयार रखना चाहिए?",
      options: [
        {
          text: "आपातकालीन किट जिसमें सूखा खाना, पानी और टॉर्च हो।",
          isCorrect: true,
          feedback:
            "सही! आपातकालीन किट बहुत ज़रूरी है ताकि मदद आने तक जीवित रहने में सहायता मिल सके।",
        },
        {
          text: "अपने शहर के सभी मॉल का नक्शा।",
          isCorrect: false,
          feedback:
            "गलत। सुरक्षा क्षेत्रों और निकासी मार्गों का नक्शा ज़्यादा महत्वपूर्ण है। दोबारा कोशिश करें।",
        },
        {
          text: "परिवार के लिए नए कपड़े और जूते।",
          isCorrect: false,
          feedback:
            "गलत। कपड़े ज़रूरी हैं, लेकिन सबसे पहले जीवन बचाने वाली चीज़ें महत्वपूर्ण हैं। दोबारा कोशिश करें।",
        },
      ],
    },
  ],
];

export default function EarthQuakeQuizHindi() {
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
