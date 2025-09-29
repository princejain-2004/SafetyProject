import React, { useState } from "react";

const quizSets_te = [
  [
    {
      question: "పెద్ద వరదకు ముందు, అత్యవసర కిట్‌లో అత్యంత ముఖ్యమైన వస్తువు ఏది?",
      options: [
        {
          text: "నాన్-పెరిషబుల్ ఆహారం మరియు నీరు",
          isCorrect: true,
          feedback:
            "సరైనది! ప్రతి వ్యక్తికి కనీసం మూడు రోజుల ఆహారం మరియు నీరు కావాలి.",
        },
        {
          text: "మీ ఇష్టమైన వీడియో గేమ్ కన్సోల్",
          isCorrect: false,
          feedback:
            "తప్పు. వినోదం మంచిది, కానీ ప్రధాన ప్రాధాన్యం జీవన అవసరాలు.",
        },
        {
          text: "మీ అత్యంత సౌకర్యవంతమైన తలుపు",
          isCorrect: false,
          feedback:
            "తప్పు. సౌకర్యం భద్రత కంటే రెండవది. అత్యవసర సరఫరాలు ముఖ్యమైనవి.",
        },
      ],
    },
    {
      question: "వరద హెచ్చరిక వచ్చినప్పుడు, మీ విలువైన పత్రాలు మరియు ఎలక్ట్రానిక్‌లను ఎక్కడ ఉంచాలి?",
      options: [
        {
          text: "మీ ఇంటి బేస్‌మెంట్ లేదా కిందభాగం",
          isCorrect: false,
          feedback:
            "తప్పు. ఈ ప్రాంతాలు మొదట వరద ప్రభావంలో ఉంటాయి. విలువైన వస్తువులు నష్టపోతాయి.",
        },
        {
          text: "ఎత్తైన ఫ్లోర్ లేదా ఉన్నత షెల్ఫ్‌కి",
          isCorrect: true,
          feedback:
            "సరైనది! మీ విలువైన వస్తువులను ఎత్తైన ప్రదేశంలో ఉంచడం అత్యంత భద్రతా మార్గం.",
        },
        {
          text: "కిందభాగం ఉన్న పొరుగింటికి",
          isCorrect: false,
          feedback:
            "తప్పు. పొరుగింటి కూడా వరదలో ఉండవచ్చు. ఎత్తైన ప్రదేశంలో భద్రతగా ఉంచండి.",
        },
      ],
    },
  ],
  [
    {
      question: "వరద సమయంలో, నడక లేదా స్నానం చేయడం ద్వారా వెళ్ళే మార్గం?",
      options: [
        {
          text: "వరద నీటిలో నడవడం లేదా ఈత",
          isCorrect: false,
          feedback:
            "తప్పు. వరద నీటిలో ప్రమాదకర వస్తువులు లేదా విద్యుత్ కేబుళ్లు ఉండవచ్చు.",
        },
        {
          text: "కారు ద్వారా నడవడం",
          isCorrect: false,
          feedback:
            "తప్పు. కేవలం 15 సెం.మీ. నీరు కూడా ప్రమాదకరం. 60 సెం.మీ. నీరు వాహనాన్ని కదలిస్తుంది.",
        },
        {
          text: "ఎత్తైన భద్రమైన మార్గం కనుగొని నీటిని దాటకుండా వెళ్ళడం",
          isCorrect: true,
          feedback:
            "సరైనది! ఎత్తైన భూమిని వెతకండి మరియు వరద నీటిని దాటకండి.",
        },
      ],
    },
    {
      question: "'ఫ్లాష్ వరద' హెచ్చరిక వచ్చినప్పుడు ఏమి చేయాలి?",
      options: [
        {
          text: "మరిన్ని సమాచారం కోసం వేచి ఉండండి",
          isCorrect: false,
          feedback:
            "తప్పు. ఫ్లాష్ వరదలు చాలా వేగంగా వస్తాయి. వేచి ఉండడం ప్రమాదకరం.",
        },
        {
          text: "తక్షణం ఎత్తైన ప్రదేశానికి వెళ్ళండి",
          isCorrect: true,
          feedback:
            "సరైనది! ఎత్తైన ప్రదేశానికి వెళ్ళడం అత్యంత భద్రతా చర్య.",
        },
        {
          text: "ఇంట్లో ఉండి వేచి ఉండండి",
          isCorrect: false,
          feedback:
            "తప్పు. ఇంటి భద్రత నిర్ధారించబడదు. ఎత్తైన ప్రదేశం వెళ్ళండి.",
        },
      ],
    },
  ],
  [
    {
      question: "వరద తర్వాత, మీ ఇంటికి ఎప్పుడు వెళ్ళడం భద్రంగా ఉంటుంది?",
      options: [
        {
          text: "నీరు పూర్తిగా మిగిలిన తర్వాత",
          isCorrect: false,
          feedback:
            "తప్పు. నీరు తగ్గినట్లు కనిపించినా, కొన్ని దాగి ఉన్న ప్రమాదాలు ఉండవచ్చు.",
        },
        {
          text: "ప్రాధికారులు భద్రతా ప్రకటించిన తర్వాత మాత్రమే",
          isCorrect: true,
          feedback:
            "సరైనది! స్థానిక అధికారులు భద్రతా ప్రకటించిన తర్వాత మాత్రమే ఇంటికి వెళ్ళండి.",
        },
        {
          text: "స్నేహితుడు వ్రాసిన మెసేజ్ వచ్చిన తర్వాత",
          isCorrect: false,
          feedback:
            "తప్పు. అధికారిక వనరులను మాత్రమే నమ్మండి.",
        },
      ],
    },
    {
      question: "వరద తర్వాత ఇంటికి తిరిగినప్పుడు, మొదట ఏమి తనిఖీ చేయాలి?",
      options: [
        {
          text: "స్ట్రక్చరల్ డ్యామేజ్ మరియు గ్యాస్ లీక్స్",
          isCorrect: true,
          feedback:
            "సరైనది! నిర్మాణ నష్టాలు లేదా దాగి ఉన్న గ్యాస్ లీక్స్ ఉండవచ్చు. మొదట ఇవి తనిఖీ చేయండి.",
        },
        {
          text: "టెలివిజన్ మరియు ఇతర ఎలక్ట్రానిక్ పని చేస్తాయా చూడండి",
          isCorrect: false,
          feedback:
            "తప్పు. తడిగా ఉన్న విద్యుత్ పరికరాలను ఉపయోగించవద్దు.",
        },
        {
          text: "ఫర్నిచర్‌ను రక్షించగలమా అని చూడండి",
          isCorrect: false,
          feedback:
            "తప్పు. వ్యక్తిగత వస్తువులు భద్రత కంటే ముఖ్యము కాదు.",
        },
      ],
    },
  ],
  [
    {
      question: "మీరు చూడలేని వరద నీటి ప్రధాన ప్రమాదం ఏమిటి?",
      options: [
        {
          text: "దాగిన బలమైన వస్తువులు మరియు submerged ఎలక్ట్రికల్ వైర్లు",
          isCorrect: true,
          feedback:
            "సరైనది! వరద నీటిలో ప్రమాదకర వస్తువులు దాగి ఉండవచ్చు.",
        },
        {
          text: "నడవడం ఎల్లప్పుడూ భద్రం",
          isCorrect: false,
          feedback:
            "తప్పు. ఇది నిజం కాదు. వరద నీరు చాలా ప్రమాదకరం.",
        },
        {
          text: "కేవలం కార్లు మాత్రమే దాటవచ్చు",
          isCorrect: false,
          feedback:
            "తప్పు. కొద్దిగా నీరు కూడా ప్రమాదకరం.",
        },
      ],
    },
    {
      question: "వరద భద్రత కోసం సార్వత్రిక సలహా ఏమిటి?",
      options: [
        {
          text: "'డ్రాప్, కవర్, అండ్ హోల్డ్ ఆన్'",
          isCorrect: false,
          feedback:
            "తప్పు. ఇది భూకంప కోసం. వరద కోసం 'టర్న్ అరౌండ్, డోంట్ డ్రౌన్!' slogan.",
        },
        {
          text: "'లుక్, లిసెన్, అండ్ లివ్!'",
          isCorrect: false,
          feedback:
            "తప్పు. ఇది రైలు భద్రత కోసం. వరద కోసం 'టర్న్ అరౌండ్, డోంట్ డ్రౌన్!' slogan.",
        },
        {
          text: "'టర్న్ అరౌండ్, డోంట్ డ్రౌన్!'",
          isCorrect: true,
          feedback:
            "సరైనది! ఇది అత్యంత ముఖ్యమైన సలహా. వరద నీటిలో నడవడం లేదా డ్రైవ్ చేయవద్దు.",
        },
      ],
    },
  ],
];

export default function FloodQuiztelugu() {
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
