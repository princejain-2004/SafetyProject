import React, { useState } from "react";

const floodQuizSets_Telugu = [
  [
    {
      question: "పొంగుతున్న నీటిలో చిక్కుకున్నట్లయితే అత్యంత భద్రమైన చర్య ఏది?",
      options: [
        { text: "ఎత్తైన భూభాగానికి వెళ్లి సహాయం కోసం కాల్ చేయండి", isCorrect: true, feedback: "సరే! ఎత్తైన ప్రదేశానికి వెళ్లడం మరియు సహాయం కోరడం భద్రంగా ఉంటుంది." },
        { text: "నీటిలో ఈత కొట్టడం", isCorrect: false, feedback: "తప్పు. నీటిలో ఈత కొట్టడం ప్రమాదకరం." },
        { text: "నిగత పాదాలతో నడవడం", isCorrect: false, feedback: "తప్పు. ఇది ప్రమాదకరం." },
      ],
    },
    {
      question: "పొంగుని సీజన్‌లో ఏమి సిద్ధంగా ఉంచాలి?",
      options: [
        { text: "అత్యవసర టార్చ్ & బ్యాటరీలు", isCorrect: true, feedback: "సరే! అత్యవసర టార్చ్ మరియు బ్యాటరీలు అత్యంత అవసరం." },
        { text: "క్రీడా సామగ్రి", isCorrect: false, feedback: "తప్పు. ఇది సహాయం చేయదు." },
        { text: "టీవీ రిమోట్", isCorrect: false, feedback: "తప్పు. ఉపయోగపడదు." },
      ],
    },
    {
      question: "పొంగునీటిలో నడవడం ఎందుకు తప్పించాలి?",
      options: [
        { text: "అది మలినమై ఉండొచ్చు మరియు గాఢమైన వస్తువులు దాచివుండొచ్చు", isCorrect: true, feedback: "సరే! పొంగునీరు ప్రమాదకరం." },
        { text: "ఇది చల్లదనం ఇస్తుంది", isCorrect: false, feedback: "తప్పు. చల్లదనం కారణంగా కాదు." },
        { text: "ఇది వ్యాయామానికి సహాయపడుతుంది", isCorrect: false, feedback: "తప్పు. ఇది కారణం కాదు." },
      ],
    },
    {
      question: "మీ ఇల్లు ముంచుతున్నట్లయితే మొదట ఏమి చేయాలి?",
      options: [
        { text: "విద్యుత్ మరియు గ్యాస్ ఆఫ్ చేయండి", isCorrect: true, feedback: "సరే! మొదట భద్రత ప్రధానంగా ఉండాలి." },
        { text: "అనవసరమైన వస్త్రాలను ప్యాక్ చేయండి", isCorrect: false, feedback: "తప్పు. మొదట భద్రత ముఖ్యం." },
        { text: "టీవీ చూడండి", isCorrect: false, feedback: "తప్పు. సహాయం పొందడం మొదట." },
      ],
    },
    {
      question: "పొంగునీటిలో అత్యంత భద్రమైన రవాణా ఏది?",
      options: [
        { text: "దోపిడీలు లేదా ఎత్తైన ప్లాట్‌ఫారమ్‌లు", isCorrect: true, feedback: "సరే! ఇది అత్యంత భద్రం." },
        { text: "మోటార్ సైకిల్", isCorrect: false, feedback: "తప్పు. భద్రం కాదు." },
        { text: "సైకిల్", isCorrect: false, feedback: "తప్పు. భద్రం కాదు." },
      ],
    },
    {
      question: "తీరం లేదా తక్కువ భూభాగాల్లో ఆశ్రయం తీసుకోవద్దు?",
      options: [
        { text: "నదుల దగ్గర లేదా తక్కువ ప్రదేశాల్లో", isCorrect: true, feedback: "సరే! ప్రమాదకర ప్రదేశాలు నివారించండి." },
        { text: "మలై ప్రదేశంలో", isCorrect: false, feedback: "తప్పు. మలై ప్రదేశం భద్రం." },
        { text: "ఎత్తైన భవనంలో", isCorrect: false, feedback: "తప్పు. భద్రం." },
      ],
    },
    {
      question: "పొంగునీటిలో ఏది తాగకూడదు?",
      options: [
        { text: "చికిత్స చేయని పొంగునీరు", isCorrect: true, feedback: "సరే! ఇది ప్రమాదకరం." },
        { text: "బాటిల్ నీరు", isCorrect: false, feedback: "తప్పు. ఇది భద్రం." },
        { text: "కూడ్చిన నీరు", isCorrect: false, feedback: "తప్పు. ఇది భద్రం." },
      ],
    },
    {
      question: "పొంగునీటిలో భద్రమైన సమాచార మార్గం ఏది?",
      options: [
        { text: "మొబైల్ ఫోన్ లేదా అత్యవసర రేడియో", isCorrect: true, feedback: "సరే! ఇది భద్రం." },
        { text: "వీధిలో కఠినంగా గిలిగిలా అరచడం", isCorrect: false, feedback: "తప్పు. భద్రం కాదు." },
        { text: "సార్వజన లౌడ్స్‌పీకర్ ఉపయోగించడం", isCorrect: false, feedback: "తప్పు. భద్రం కాదు." },
      ],
    },
  ],
];


export default function FloodQuiz2telugu() {
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
