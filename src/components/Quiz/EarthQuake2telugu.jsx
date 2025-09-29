import React, { useState } from "react";

const quizSets_te = [
  [
    {
      question: "భూకంప సమయంలో మీ ఇంట్లో ఏ అంశాన్ని రక్షించుకోవడం అత్యంత ముఖ్యము?",
      options: [
        { text: "చిన్న, తేలికపాటి వస్తువులు", isCorrect: false, feedback: "తప్పు. అన్ని వస్తువులను రక్షించాలి, కానీ భారీ వస్తువులు అత్యంత ప్రమాదకరంగా ఉంటాయి." },
        { text: "భారీ ఫర్నిచర్ వంటి బుక్‌కేస్ మరియు క్యాబినెట్", isCorrect: true, feedback: "సరైనది! భారీ ఫర్నిచర్‌ను సురక్షితంగా ఉంచితే గిరిపోతే గాయపడే ప్రమాదం తగ్గుతుంది." },
        { text: "గోడపై ఫ్రేమ్‌లు", isCorrect: false, feedback: "తప్పు. ఫ్రేమ్‌లు తక్కువ ప్రమాదం కలిగి ఉంటాయి. ముందుగా భారీ ఫర్నిచర్‌ను సురక్షితం చేయండి." },
      ],
    },
    {
      question: "భూకంప అత్యవసర పరిస్థితికి ముందే మీరు ఏం సిద్ధం చేయాలి?",
      options: [
        { text: "నాన్-పెరిషబుల్ ఆహారం, నీరు మరియు టార్చ్ ఉన్న అత్యవసర కిట్", isCorrect: true, feedback: "సరైనది! అత్యవసర కిట్ సహాయం వచ్చే వరకు జీవించడానికి అవసరం." },
        { text: "మీ నగరంలోని అన్ని షాపింగ్ మాల్స్ యొక్క విస్తృత మ్యాప్", isCorrect: false, feedback: "తప్పు. సేఫ్టీ జోన్లు మరియు ఎగ్జిట్ మార్గాల మ్యాప్ ముఖ్యం." },
        { text: "కుటుంబానికి కొత్త బట్టలు మరియు షూస్", isCorrect: false, feedback: "తప్పు. ప్రధానంగా జీవన ఉపకరణాలపై దృష్టి పెట్టాలి." },
      ],
    },
    {
      question: "భూకంప సమయంలో ఏ భవనాలు సురక్షితంగా ఉంటాయి?",
      options: [
        { text: "ఇంజినీరింగ్ లేకుండా నిర్మించిన ఎత్తైన భవనాలు", isCorrect: false, feedback: "తప్పు. ఇవి ప్రమాదకరమైనవి." },
        { text: "భూకంప-నిరోధక నిర్మాణాలు", isCorrect: true, feedback: "సరైనది! ఇవి కంపనాలను తట్టగలవు." },
        { text: "పాత స్మారకాలు", isCorrect: false, feedback: "తప్పు. పాత స్మారకాలు సాధారణంగా సురక్షితం కావు." },
      ],
    },
    {
      question: "భూకంప సమయంలో భవనానికి బయటకు వచ్చిన తర్వాత ఎక్కడికి వెళ్ళాలి?",
      options: [
        { text: "ఓపెన్ గ్రౌండ్‌లో", isCorrect: true, feedback: "సరైనది! ఓపెన్ గ్రౌండ్‌లో పడే వస్తువుల ప్రమాదం లేదు." },
        { text: "బేస్‌మెంట్‌లో", isCorrect: false, feedback: "తప్పు. భవనం కూలిపోతే బేస్‌మెంట్ ప్రమాదకరం." },
        { text: "విద్యుత్ కంబల్స్‌కి దగ్గరగా", isCorrect: false, feedback: "తప్పు. విద్యుత్ కంబల్స్ పడవచ్చు. దూరంగా ఉండండి." },
      ],
    },
  ],
];



export default function EarthquakeQuiz2telugu() {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 font-inter">
      {!started ? (
        // === प्रारंभिक कार्ड ===
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border-4 border-gray-500 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-400 mb-4">
            भूकंप तैयारी प्रश्नोत्तरी
          </h1>
          <img
            src="https://placehold.co/400x200/4a5568/ffffff?text=EARTHQUAKE+QUIZ"
            alt="Earthquake Quiz"
            className="mx-auto rounded-lg mb-4"
          />
          <p className="text-lg mb-4">
            अपना ज्ञान जाँचें और जानें कि भूकंप के दौरान सुरक्षित कैसे रहें!
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
          >
            प्रश्नोत्तरी शुरू करें
          </button>
        </div>
      ) : (
        // === पूर्ण प्रश्नोत्तरी ===
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 p-4">
          {!finished ? (
            <div className="flex flex-col gap-4 w-full max-w-2xl">
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-xl font-bold mb-4">
                  {currentQuestion.question}
                </h2>
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
                      ? "अगला प्रश्न"
                      : currentSetIndex < quizSets.length - 1
                      ? "अगले सेट पर जाएँ"
                      : "प्रश्नोत्तरी समाप्त करें"
                    : "फिर से प्रयास करें"}
                </button>
              )}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-400 mb-4">
                प्रश्नोत्तरी समाप्त!
              </h2>
              <p className="text-lg mb-6">आपने {score} अंक प्राप्त किए!</p>
              <button
                onClick={restartQuiz}
                className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-700"
              >
                पुनः शुरू करें
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
