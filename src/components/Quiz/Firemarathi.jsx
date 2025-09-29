import React, { useState } from "react";

const quizSets_mr = [
  [
    {
      question: "आगीपासून बचाव करण्यासाठी, जाळलेल्या मेणबत्ती कुठे ठेवू नये?",
      options: [
        { text: "सुदृढ, सपाट पृष्ठभागावर, हवेपासून दूर", isCorrect: false, feedback: "चूक. हे चांगले सराव आहे. मेणबत्त्या स्थिर पृष्ठभागावर असाव्यात." },
        { text: "पडद्याजवळ किंवा इतर जळण्याजोग्या वस्तूंच्या जवळ", isCorrect: true, feedback: "बरोबर! मेणबत्त्या आणि ज्वालांची वस्तूपासून दूर ठेवा." },
        { text: "काचच्या जार किंवा होल्डरमध्ये", isCorrect: false, feedback: "चूक. योग्य होल्डर वापरणे सुरक्षा उपाय आहे." },
      ],
    },
    {
      question: "विजेच्या उपकरणाचा उपयोग नसताना काय करणे आवश्यक आहे?",
      options: [
        { text: "ते धुवायला कपड्याने झाका", isCorrect: false, feedback: "चूक. हे आग प्रतिबंधक सराव नाही." },
        { text: "ते नेहमी प्लगमध्ये सोडा", isCorrect: false, feedback: "चूक. यामुळे विजेची आग लागू शकते." },
        { text: "वाल सॉकेटमधून अनप्लग करा", isCorrect: true, feedback: "बरोबर! वापरात नसताना उपकरण अनप्लग करणे शॉर्ट सर्किट टाळते." },
      ],
    },
    {
      question: "विजेच्या आगीनंतर पाणी का टाकू नये?",
      options: [
        { text: "यामुळे आग वाढते", isCorrect: true, feedback: "बरोबर! पाणी विद्युत प्रवाहित करते आणि आग वाढू शकते." },
        { text: "पाणी वाया जाते", isCorrect: false, feedback: "चूक. मुख्य धोका विद्युत प्रवाह आहे, पाण्याचा वाया जाणे नाही." },
        { text: "हे खूप हळू आहे", isCorrect: false, feedback: "चूक. मुख्य कारण सुरक्षा आहे, गती नाही." },
      ],
    },
    {
      question: "आगीदरम्यान दरवाजा उघडण्यापूर्वी काय करावे?",
      options: [
        { text: "गरम आहे की नाही ते स्पर्श करून तपासा", isCorrect: true, feedback: "बरोबर! दरवाजा आधी तपासल्यास सुरक्षित राहता येईल." },
        { text: "लवकर उघडा", isCorrect: false, feedback: "चूक. फार लवकर उघडल्यास धोका निर्माण होऊ शकतो." },
        { text: "तोडा", isCorrect: false, feedback: "चूक. तपासल्याशिवाय दरवाजा तोडू नका." },
      ],
    },
  ],
];



export default function FireQuizmarathi() {
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

