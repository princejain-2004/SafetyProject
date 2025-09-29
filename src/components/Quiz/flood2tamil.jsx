import React, { useState } from "react";

const floodQuizSets_Tamil = [
  [
    {
      question: "மழைநீரில் முட்டி நிலையில் சிக்கினால் எந்த செயல் பாதுகாப்பானது?",
      options: [
        { text: "உயர்ந்த இடத்திற்கு செல்லவும் உதவிக்கு அழைக்கவும்", isCorrect: true, feedback: "சரி! உயர்ந்த இடத்திற்கு செல்வது மற்றும் உதவிக்காக அழைப்பது பாதுகாப்பானது." },
        { text: "நீரில் شناக்கவும்", isCorrect: false, feedback: "தவறு. நீரில் شنا செய்தல் ஆபத்தானது." },
        { text: "நகர் காலணியில் நடக்கவும்", isCorrect: false, feedback: "தவறு. நிர்வாகமில்லாத நடவு அபாயகரம்." },
      ],
    },
    {
      question: "பெரிய மழை காலத்தில் எதை தயார் செய்ய வேண்டும்?",
      options: [
        { text: "அவசர உபகரண விளக்கு மற்றும் பேட்டரிகள்", isCorrect: true, feedback: "சரி! அவசர விளக்கு மற்றும் பேட்டரிகள் மிகவும் அவசியம்." },
        { text: "விளையாட்டு கருவிகள்", isCorrect: false, feedback: "தவறு. அவசர சூழ்நிலையில் உதவாது." },
        { text: "டிவி ரிமோட்", isCorrect: false, feedback: "தவறு. ரிமோட் பயன்பாடில்லை." },
      ],
    },
    {
      question: "மழைநீரில் நடக்க வேண்டாமா?",
      options: [
        { text: "அது மாசுபட்டிருக்கும் மற்றும் கூர்மையான பொருட்களை மறைக்கலாம்", isCorrect: true, feedback: "சரி! மழைநீர் பாதுகாப்பற்றது." },
        { text: "அது குளிர்ச்சியளிக்கும்", isCorrect: false, feedback: "தவறு. பாதுகாப்பற்றது." },
        { text: "உடற்பயிற்சிக்கு உதவும்", isCorrect: false, feedback: "தவறு. பயிற்சி காரணம் அல்ல." },
      ],
    },
    {
      question: "உங்கள் வீடு வெள்ளத்தில் இருந்தால் முதலில் என்ன செய்ய வேண்டும்?",
      options: [
        { text: "மின் மற்றும் வாயு முறைகளை அணைக்கவும்", isCorrect: true, feedback: "சரி! முதலில் பாதுகாப்பு முக்கியம்." },
        { text: "அவசியமில்லாத துணிகளை சூடு செய்யவும்", isCorrect: false, feedback: "தவறு. பாதுகாப்பு முதலில்." },
        { text: "டிவி பார்க்கவும்", isCorrect: false, feedback: "தவறு. உதவி பெற முடியாது." },
      ],
    },
    {
      question: "மழை காலத்தில் பாதுகாப்பான போக்குவரத்து எந்தது?",
      options: [
        { text: "கப்பல்கள் அல்லது உயர்ந்த தளம்", isCorrect: true, feedback: "சரி! கப்பல்கள் அல்லது உயர்ந்த தளம் பாதுகாப்பானது." },
        { text: "மோட்டார் சைக்கிள்", isCorrect: false, feedback: "தவறு. மோட்டார் சைக்கிள் பாதுகாப்பற்றது." },
        { text: "சைக்கிள்", isCorrect: false, feedback: "தவறு. சைக்கிள் பாதுகாப்பற்றது." },
      ],
    },
    {
      question: "வெள்ளத்தில் எங்கே அகலாமென பராமரிக்க வேண்டும்?",
      options: [
        { text: "நதிகளுக்கு அருகில் அல்லது குறைந்த நிலைகளில்", isCorrect: true, feedback: "சரி! ஆபத்தான இடங்களை தவிர்க்கவும்." },
        { text: "மலைப்பாங்கில்", isCorrect: false, feedback: "தவறு. மலைப்பாங்கு பாதுகாப்பானது." },
        { text: "உயர்ந்த கட்டிடத்தில்", isCorrect: false, feedback: "தவறு. பாதுகாப்பானது." },
      ],
    },
    {
      question: "மழைநீரில் எதை பானம் செய்யக்கூடாது?",
      options: [
        { text: "சுத்தப்படாத வெள்ள நீர்", isCorrect: true, feedback: "சரி! சுத்தப்படாத நீர் பாதிப்பானது." },
        { text: "பாட்டிலில் தணிந்த நீர்", isCorrect: false, feedback: "தவறு. பாதுகாப்பானது." },
        { text: "கட்டாயமாக கொதித்த நீர்", isCorrect: false, feedback: "தவறு. பாதுகாப்பானது." },
      ],
    },
    {
      question: "மழை காலத்தில் பாதுகாப்பான தகவல் தொடர்பு எந்தது?",
      options: [
        { text: "மொபைல் போன் அல்லது அவசர ரேடியோ", isCorrect: true, feedback: "சரி! பாதுகாப்பானது." },
        { text: "சாலையில் சத்தமிடுதல்", isCorrect: false, feedback: "தவறு. பாதுகாப்பற்றது." },
        { text: "பொது லவுட்ஸ்பீக்கர் பயன்படுத்துதல்", isCorrect: false, feedback: "தவறு. பாதுகாப்பற்றது." },
      ],
    },
  ],
];

export default function FloodQuiz2tamil() {
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
