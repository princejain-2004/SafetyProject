import React, { useState } from "react";

const quizSets_mr = [
  [
    {
      question: "पुरापूर्वी, आपत्कालीन किटमध्ये कोणत्या वस्तूची तयारी करणे सर्वात महत्वाचे आहे?",
      options: [
        {
          text: "अखाद्य आणि पाणी",
          isCorrect: true,
          feedback: "बरोबर! प्रत्येकासाठी किमान तीन दिवस पुरेसा अन्न आणि पाणी असावे.",
        },
        {
          text: "आपला आवडता व्हिडिओ गेम कन्सोल",
          isCorrect: false,
          feedback: "चुकीचे. मनोरंजन नक्कीच चांगले आहे, पण जीवनावश्यक वस्तूंचा प्राधान्य द्या.",
        },
        {
          text: "आपला आरामदायी उशी",
          isCorrect: false,
          feedback: "चुकीचे. सुरक्षा महत्त्वाची आहे, आराम नंतर येतो.",
        },
      ],
    },
    {
      question: "पुराची सूचना आली, तर आपले मौल्यवान दस्तऐवज आणि इलेक्ट्रॉनिक्स कुठे ठेवावेत?",
      options: [
        {
          text: "बेसमेंट किंवा घराचा तळ मजला",
          isCorrect: false,
          feedback: "चुकीचे. तळ मजला आधी भरतो. मूल्यवान वस्तू हरवतील.",
        },
        {
          text: "उच्च मजला किंवा उंच शेल्फ",
          isCorrect: true,
          feedback: "बरोबर! उंच ठिकाणी वस्तू ठेवणे सुरक्षिततेसाठी सर्वोत्तम.",
        },
        {
          text: "पडोसीच्या घरात जे खाली आहे",
          isCorrect: false,
          feedback: "चुकीचे. पडोसीचे घरही पुरात येऊ शकते. उंच ठिकाणी ठेवा.",
        },
      ],
    },
  ],
  [
    {
      question: "पुरात सुरक्षित मार्ग कसा निवडावा?",
      options: [
        {
          text: "पूरात पायाखाली वावरणे किंवा पोहणे",
          isCorrect: false,
          feedback: "चुकीचे. पाण्यात धोकादायक वस्तू, विद्युत वायर किंवा जोरदार प्रवाह असू शकतो.",
        },
        {
          text: "कारने पाण्यातून जाणे",
          isCorrect: false,
          feedback: "चुकीचे. फक्त 15 सेमी पाणी देखील धोकादायक आहे. 60 सेमी वाहन वाहून नेऊ शकते.",
        },
        {
          text: "उंच सुरक्षित मार्ग शोधणे आणि पाण्यात जाऊ न देणे",
          isCorrect: true,
          feedback: "बरोबर! सुरक्षित मार्ग शोधा आणि पाण्यातून दूर राहा.",
        },
      ],
    },
    {
      question: "'फ्लॅश पूर'ची सूचना आली, तर काय कराल?",
      options: [
        {
          text: "अधिक माहितीची वाट पहा",
          isCorrect: false,
          feedback: "चुकीचे. फ्लॅश पूर खूप वेगाने येतो. वाट पाहणे धोकादायक आहे.",
        },
        {
          text: "तत्काळ उंच ठिकाणी जा",
          isCorrect: true,
          feedback: "बरोबर! सुरक्षिततेसाठी तात्काळ उंच ठिकाणी जाणे महत्त्वाचे आहे.",
        },
        {
          text: "घरात राहा",
          isCorrect: false,
          feedback: "चुकीचे. घर सुरक्षित नसेल तर उंच ठिकाणी जा.",
        },
      ],
    },
  ],
  [
    {
      question: "पुरानंतर, घरात कधी परत जावे?",
      options: [
        {
          text: "जेव्हा पाणी पूर्णपणे गेले",
          isCorrect: false,
          feedback: "चुकीचे. पाणी कमी झाल्यासही लपलेले धोके असू शकतात.",
        },
        {
          text: "अधिकार्‍यांनी परवानगी दिल्यानंतर",
          isCorrect: true,
          feedback: "बरोबर! अधिकार्‍यांनी सुरक्षित घोषित केल्याशिवाय परतू नका.",
        },
        {
          text: "मित्राने मेसेज दिल्यावर",
          isCorrect: false,
          feedback: "चुकीचे. फक्त अधिकृत स्रोतांवर विश्वास ठेवा.",
        },
      ],
    },
    {
      question: "घरात परतल्यावर प्रथम काय तपासावे?",
      options: [
        {
          text: "संरचनात्मक नुकसान आणि गॅस लीक",
          isCorrect: true,
          feedback: "बरोबर! संरचनात्मक नुकसान किंवा लपलेले गॅस लीक तपासा.",
        },
        {
          text: "टीव्ही आणि इलेक्ट्रॉनिक्स कार्यरत आहेत का",
          isCorrect: false,
          feedback: "चुकीचे. ओले इलेक्ट्रॉनिक्स हात लावू नका.",
        },
        {
          text: "फर्निचर वाचवता येईल का",
          isCorrect: false,
          feedback: "चुकीचे. सुरक्षा सर्वप्रथम आहे.",
        },
      ],
    },
  ],
  [
    {
      question: "पुराच्या पाण्यातील मुख्य अदृश्य धोका काय आहे?",
      options: [
        {
          text: "लपलेले धारदार वस्तू आणि इलेक्ट्रिकल वायर",
          isCorrect: true,
          feedback: "बरोबर! पाण्यात लपलेले धोके असतात.",
        },
        {
          text: "पुरात चालणे नेहमी सुरक्षित आहे",
          isCorrect: false,
          feedback: "चुकीचे. पुराचे पाणी अत्यंत धोकादायक असते.",
        },
        {
          text: "फक्त कार वाहून जाऊ शकतात",
          isCorrect: false,
          feedback: "चुकीचे. अगदी थोडे पाणी देखील धोकादायक असते.",
        },
      ],
    },
    {
      question: "पुर सुरक्षा सल्ला काय आहे?",
      options: [
        {
          text: "'ड्रॉप, कव्हर आणि होल्ड ऑन'",
          isCorrect: false,
          feedback: "चुकीचे. हे भूकंपासाठी आहे. पुरासाठी 'Turn Around, Don't Drown!'",
        },
        {
          text: "'लुक, लिसन, अँड लिव्ह!'",
          isCorrect: false,
          feedback: "चुकीचे. हे रेल्वे सुरक्षा अभियानासाठी आहे.",
        },
        {
          text: "'Turn Around, Don't Drown!'",
          isCorrect: true,
          feedback: "बरोबर! पुरात कधीही चालू किंवा वाहन चालवू नका.",
        },
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
