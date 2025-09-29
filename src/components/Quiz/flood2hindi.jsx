import React, { useState } from "react";

const floodQuizSets_Hindi = [
  [
    {
      question: "बाढ़ वाले इलाके में फंसे होने पर सबसे सुरक्षित कार्रवाई क्या है?",
      options: [
        { text: "ऊँची जगह पर जाएँ और मदद के लिए कॉल करें", isCorrect: true, feedback: "सही! ऊँची जगह पर जाना और मदद के लिए कॉल करना सबसे सुरक्षित है।" },
        { text: "पानी में तैरें", isCorrect: false, feedback: "गलत। पानी में तैरना बेहद खतरनाक है।" },
        { text: "नंगे पैर चलें", isCorrect: false, feedback: "गलत। नंगे पैर चलना चोट और संक्रमण का कारण बन सकता है।" },
      ],
    },
    {
      question: "बाढ़ के मौसम में कौन-सी चीज़ तैयार रखनी चाहिए?",
      options: [
        { text: "आपातकालीन टॉर्च और बैटरी", isCorrect: true, feedback: "सही! टॉर्च और बैटरी बाढ़ के दौरान आवश्यक हैं।" },
        { text: "खेल का सामान", isCorrect: false, feedback: "गलत। खेल का सामान आपात स्थिति में उपयोगी नहीं है।" },
        { text: "टीवी रिमोट", isCorrect: false, feedback: "गलत। यह बाढ़ सुरक्षा के लिए आवश्यक नहीं है।" },
      ],
    },
    {
      question: "बाढ़ वाले पानी में चलने से क्यों बचना चाहिए?",
      options: [
        { text: "यह दूषित हो सकता है और तेज वस्तुएँ छिपा सकता है", isCorrect: true, feedback: "सही! बाढ़ का पानी खतरनाक हो सकता है।" },
        { text: "यह ताज़गी देता है", isCorrect: false, feedback: "गलत। बाढ़ का पानी सुरक्षित नहीं है।" },
        { text: "यह व्यायाम में मदद करता है", isCorrect: false, feedback: "गलत। बाढ़ का पानी व्यायाम के लिए नहीं है।" },
      ],
    },
    {
      question: "अगर आपका घर बाढ़ में है, तो पहले क्या करना चाहिए?",
      options: [
        { text: "बिजली और गैस बंद करें", isCorrect: true, feedback: "सही! सुरक्षा पहले: बिजली और गैस को बंद करें।" },
        { text: "अप्रिय कपड़े पैक करें", isCorrect: false, feedback: "गलत। सुरक्षा पर ध्यान दें, कपड़े पैक करना नहीं।" },
        { text: "टीवी देखें", isCorrect: false, feedback: "गलत। टीवी देखने से मदद नहीं मिलेगी।" },
      ],
    },
    {
      question: "बाढ़ के दौरान सबसे सुरक्षित परिवहन क्या है?",
      options: [
        { text: "नाव या ऊँचे प्लेटफ़ॉर्म", isCorrect: true, feedback: "सही! नाव या ऊँचे प्लेटफ़ॉर्म सबसे सुरक्षित हैं।" },
        { text: "मोटरसाइकिल", isCorrect: false, feedback: "गलत। मोटरसाइकिल बाढ़ में असुरक्षित है।" },
        { text: "साइकिल", isCorrect: false, feedback: "गलत। साइकिल बाढ़ में असुरक्षित है।" },
      ],
    },
    {
      question: "भारी बाढ़ के दौरान कहाँ आश्रय नहीं लेना चाहिए?",
      options: [
        { text: "नदियों या नीचले इलाकों के पास", isCorrect: true, feedback: "सही! नदियों और नीचले क्षेत्रों से दूर रहें।" },
        { text: "पहाड़ी पर", isCorrect: false, feedback: "गलत। पहाड़ी क्षेत्र सुरक्षित है।" },
        { text: "ऊँची इमारत में", isCorrect: false, feedback: "गलत। ऊँची इमारतें नीचले क्षेत्रों से सुरक्षित हैं।" },
      ],
    },
    {
      question: "बाढ़ के दौरान क्या पीने से बचना चाहिए?",
      options: [
        { text: "बिना उपचार वाला बाढ़ का पानी", isCorrect: true, feedback: "सही! बिना उपचार वाला पानी दूषित हो सकता है।" },
        { text: "बोतलबंद पानी", isCorrect: false, feedback: "गलत। बोतलबंद पानी सुरक्षित है।" },
        { text: "उबला हुआ पानी", isCorrect: false, feedback: "गलत। उबला हुआ पानी सुरक्षित है।" },
      ],
    },
    {
      question: "बाढ़ के दौरान सबसे सुरक्षित संचार का तरीका कौन सा है?",
      options: [
        { text: "मोबाइल फोन या आपातकालीन रेडियो", isCorrect: true, feedback: "सही! मोबाइल फोन या रेडियो सबसे सुरक्षित संचार हैं।" },
        { text: "सड़क पार चिल्लाना", isCorrect: false, feedback: "गलत। यह असुरक्षित और अप्रभावी है।" },
        { text: "सार्वजनिक लाउडस्पीकर का उपयोग", isCorrect: false, feedback: "गलत। यह भरोसेमंद तरीका नहीं है।" },
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
