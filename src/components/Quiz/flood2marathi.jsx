import React, { useState } from "react";

const floodQuizSets_Marathi = [
  [
    {
      question: "पूरामुळे अडकल्यास सुरक्षित पद्धत काय आहे?",
      options: [
        { text: "उंच जागीकडे चला आणि मदतीसाठी कॉल करा", isCorrect: true, feedback: "बरोबर! उंच जागा आणि मदतीसाठी कॉल करणे सुरक्षित आहे." },
        { text: "पाण्यात पोहणे", isCorrect: false, feedback: "चुकीचे. पाण्यात पोहणे धोकादायक आहे." },
        { text: "पाय भिजवून चालणे", isCorrect: false, feedback: "चुकीचे. हे सुरक्षित नाही." },
      ],
    },
    {
      question: "पूराळा सिझनमध्ये काय तयार ठेवावे?",
      options: [
        { text: "आपत्कालीन टॉर्च आणि बॅटरीज", isCorrect: true, feedback: "बरोबर! आपत्कालीन टॉर्च आणि बॅटरीज आवश्यक आहेत." },
        { text: "खेळाची सामग्री", isCorrect: false, feedback: "चुकीचे. उपयुक्त नाही." },
        { text: "टीव्ही रिमोट", isCorrect: false, feedback: "चुकीचे. उपयुक्त नाही." },
      ],
    },
    {
      question: "पूरात चालणे का टाळावे?",
      options: [
        { text: "पाणी दूषित असू शकते आणि धारदार वस्तू दडलेली असू शकतात", isCorrect: true, feedback: "बरोबर! पूराचे पाणी सुरक्षित नाही." },
        { text: "ते थंड वाटते", isCorrect: false, feedback: "चुकीचे. हे कारण नाही." },
        { text: "व्यायामासाठी मदत होते", isCorrect: false, feedback: "चुकीचे. कारण नाही." },
      ],
    },
    {
      question: "तुमचे घर पुरामुळे भरल्यास प्रथम काय करावे?",
      options: [
        { text: "वीज आणि गॅस बंद करा", isCorrect: true, feedback: "बरोबर! सुरक्षेला प्राधान्य द्या." },
        { text: "अनावश्यक कपडे पॅक करा", isCorrect: false, feedback: "चुकीचे. सुरक्षेला प्राधान्य." },
        { text: "टीव्ही पहा", isCorrect: false, feedback: "चुकीचे. मदत मिळवणे आधी." },
      ],
    },
    {
      question: "पूरात सुरक्षित वाहतूक कोणती?",
      options: [
        { text: "बोटी किंवा उंच प्लॅटफॉर्म", isCorrect: true, feedback: "बरोबर! सुरक्षित आहे." },
        { text: "मोटरसायकल", isCorrect: false, feedback: "चुकीचे. सुरक्षित नाही." },
        { text: "सायकल", isCorrect: false, feedback: "चुकीचे. सुरक्षित नाही." },
      ],
    },
    {
      question: "कुठे आश्रय घेऊ नये?",
      options: [
        { text: "नद्याजवळ किंवा खालच्या भागात", isCorrect: true, feedback: "बरोबर! धोकादायक ठिकाणे टाळा." },
        { text: "डोंगरावर", isCorrect: false, feedback: "चुकीचे. सुरक्षित आहे." },
        { text: "उंच इमारतीत", isCorrect: false, feedback: "चुकीचे. सुरक्षित आहे." },
      ],
    },
    {
      question: "पूरात काय पिणे टाळावे?",
      options: [
        { text: "उपचारित न केलेले पूराचे पाणी", isCorrect: true, feedback: "बरोबर! हे धोकादायक आहे." },
        { text: "बोतल पाणी", isCorrect: false, feedback: "चुकीचे. सुरक्षित आहे." },
        { text: "उकळलेले पाणी", isCorrect: false, feedback: "चुकीचे. सुरक्षित आहे." },
      ],
    },
    {
      question: "पूरात सुरक्षित संवाद कोणता?",
      options: [
        { text: "मोबाईल फोन किंवा आपत्कालीन रेडिओ", isCorrect: true, feedback: "बरोबर! सुरक्षित आहे." },
        { text: "रस्त्यावर ओरडणे", isCorrect: false, feedback: "चुकीचे. सुरक्षित नाही." },
        { text: "सार्वजनिक लाउडस्पीकर वापरणे", isCorrect: false, feedback: "चुकीचे. सुरक्षित नाही." },
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
