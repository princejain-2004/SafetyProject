import React, { useState } from "react";

const quizSets_te = [
  [
    {
      question: "ఆగిపోకుండా, లైట్ అయిన మోంబత్తీని ఎక్కడ ఉంచకూడదు?",
      options: [
        {
          text: "దృఢమైన, సమతలమైన మెత్తన మీద, గాలి దూరంగా",
          isCorrect: false,
          feedback: "తప్పు. ఇది మంచిది. మోంబత్తీలు స్థిరమైన స్థలంలో ఉండాలి."
        },
        {
          text: "పర్దాలు లేదా ఇతర సులభంగా జ్వలించే పదార్థాల దగ్గర",
          isCorrect: true,
          feedback: "సరైనది! మోంబత్తీలు మరియు తెరిచిన జ్వాలలను ఏవైనా సులభంగా దహనగల వస్తువుల దగ్గర ఉంచకూడదు."
        },
        {
          text: "క్లాస్ జార్ లేదా హోల్డర్ లో",
          isCorrect: false,
          feedback: "తప్పు. సరైన హోల్డర్ ఉపయోగించడం సురక్షితమైన చర్య."
        },
      ],
    },
    {
      question: "విద్యుత్ పరికరాన్ని ఉపయోగంలో లేకపోతే ఏమి చేయాలి?",
      options: [
        {
          text: "దాన్ని శుభ్రంగా ఉంచడానికి కప్పునుంచి మూసివేయండి",
          isCorrect: false,
          feedback: "తప్పు. ఇది అగ్ని భద్రతా చర్య కాదు."
        },
        {
          text: "ఎల్లప్పుడూ ప్లగ్‌లో వదిలేయండి",
          isCorrect: false,
          feedback: "తప్పు. ఇది విద్యుత్ ప్రమాదానికి దారితీస్తుంది."
        },
        {
          text: "వాల్ సాకెట్ నుండి తీయండి",
          isCorrect: true,
          feedback: "సరైనది! ఉపయోగంలో లేని పరికరాలను అనప్లగ్ చేయడం షార్ట్ సర్క్యూట్ ప్రమాదం తగ్గిస్తుంది."
        },
      ],
    },
    {
      question: "విద్యుత్ అగ్నిపై నీరు ఎందుకు పోవకూడదు?",
      options: [
        {
          text: "దీనివల్ల అగ్ని పెరుగుతుంది",
          isCorrect: true,
          feedback: "సరైనది! నీరు విద్యుత్తును ప్రసార చేస్తుంది మరియు అగ్ని మరింత పెరుగుతుంది లేదా విద్యుత్ షాక్‌కు కారణమవుతుంది."
        },
        {
          text: "నీరు వృథా అవుతుంది",
          isCorrect: false,
          feedback: "తప్పు. ప్రధాన ప్రమాదం విద్యుత్ ప్రసారం, నీరు వృథా కావడం కాదు."
        },
        {
          text: "ఇది చాలా నెమ్మదిగా ఉంటుంది",
          isCorrect: false,
          feedback: "తప్పు. ప్రధాన కారణం భద్రత, వేగం కాదు."
        },
      ],
    },
    {
      question: "అగ్నిప్రమాద సమయంలో డోర్ తెరవడానికి ముందు ఏమి చేయాలి?",
      options: [
        {
          text: "అది వేడిగా ఉందా అని స్పర్శ చేసి తనిఖీ చేయండి",
          isCorrect: true,
          feedback: "సరైనది! ముందుగా డోర్ స్పర్శించడం, అగ్ని లేదా పొగ ఉన్న గదిలో ప్రవేశించకుండా చేస్తుంది."
        },
        {
          text: "తక్షణం తెరవండి",
          isCorrect: false,
          feedback: "తప్పు. చాలా వేగంగా తెరవడం ప్రమాదకరం."
        },
        {
          text: "తొడగండి",
          isCorrect: false,
          feedback: "తప్పు. తనిఖీ చేయకుండా డోర్ విరించకండి."
        },
      ],
    },
  ],
];



export default function FireQuiztelugu() {
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

