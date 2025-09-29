import React, { useState } from "react";

const quizSets_ta = [
  [
    {
      question: "தீயை தடுக்கும் விதமாக, எங்கு தீ அலைத்த மெண் விளக்கு வைக்கக்கூடாது?",
      options: [
        { text: "வலுவான, சமநிலை கொண்ட மேடையில், காற்றில் இருந்து தொலைவில்", isCorrect: false, feedback: "தவறு. இது நல்ல நடைமுறை. மெண் விளக்குகள் நிலைத்த மேடையில் இருக்க வேண்டும்." },
        { text: "மூடைகள் அல்லது பிற எரியக்கூடிய பொருட்களின் அருகில்", isCorrect: true, feedback: "சரி! மெண் விளக்குகள் மற்றும் திறந்த தீ எரிபொருட்களில் இருந்து வைக்க வேண்டும்." },
        { text: "கண்ணாடி ஜாரில் அல்லது ஹோல்டர்-ல்", isCorrect: false, feedback: "தவறு. சரியான ஹோல்டர் பயன்பாடு பாதுகாப்பானது." },
      ],
    },
    {
      question: "பயன்படாத மின்சார சாதனத்திற்கு முக்கிய நடவடிக்கை என்ன?",
      options: [
        { text: "அதை துணியால் மூடு", isCorrect: false, feedback: "தவறு. இது தீ பாதுகாப்பு நடைமுறை அல்ல." },
        { text: "எப்போதும் பிளக்கில் வைக்கவும்", isCorrect: false, feedback: "தவறு. இதனால் மின்சார தீ ஏற்படலாம்." },
        { text: "மின்சார சாக்கெட்டில் இருந்து அகற்று", isCorrect: true, feedback: "சரி! பயன்படுத்தாத போது சாதனங்களை அகற்றுவது தீ அபாயம் குறைக்கிறது." },
      ],
    },
    {
      question: "மின்சார தீ மீது நீர் ஏன் ஊற்றக்கூடாது?",
      options: [
        { text: "இது தீயை பெருக்கும்", isCorrect: true, feedback: "சரி! நீர் மின்சாரம் கொண்டு செல்கிறது மற்றும் தீ பெருகலாம்." },
        { text: "நீர் வீணாகும்", isCorrect: false, feedback: "தவறு. முக்கிய அபாயம் மின்சாரம், நீர் வீணாகாது." },
        { text: "மிகவும் மெதுவாக செய்கிறது", isCorrect: false, feedback: "தவறு. முக்கிய காரணம் பாதுகாப்பு, வேகம் இல்லை." },
      ],
    },
    {
      question: "தீயின் போது கதவை திறப்பதற்கு முன்னர் என்ன செய்ய வேண்டும்?",
      options: [
        { text: "கதை சூடாக இருக்கிறதா என்று தொடு", isCorrect: true, feedback: "சரி! கதவை முதலில் தொடுதல் பாதுகாப்பாக இருக்க உதவும்." },
        { text: "விரைவில் திறக்கவும்", isCorrect: false, feedback: "தவறு. மிக விரைவில் திறக்குவது ஆபத்தானது." },
        { text: "தோண்டி உடைக்கவும்", isCorrect: false, feedback: "தவறு. சோதனை செய்யாமல் கதவை உடைக்க வேண்டாம்." },
      ],
    },
  ],
];



export default function FireQuiz() {
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

