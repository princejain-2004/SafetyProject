import React, { useState } from "react";

const quizSets = [
  [
    {
      question:
        "बाढ़ से पहले, अपनी आपातकालीन किट में सबसे ज़रूरी चीज़ क्या पैक करनी चाहिए?",
      options: [
        {
          text: "सूखा खाद्य पदार्थ और पानी",
          isCorrect: true,
          feedback:
            "सही! प्रत्येक व्यक्ति के लिए कम से कम तीन दिन का भोजन और पानी होना चाहिए।",
        },
        {
          text: "आपका पसंदीदा वीडियो गेम कंसोल",
          isCorrect: false,
          feedback:
            "गलत। मनोरंजन अच्छा है, लेकिन प्राथमिकता जीवन रक्षक आवश्यकताओं की होनी चाहिए। फिर से प्रयास करें।",
        },
        {
          text: "आपका सबसे आरामदायक तकिया",
          isCorrect: false,
          feedback:
            "गलत। आराम से ज़्यादा सुरक्षा महत्वपूर्ण है। सूखा खाद्य और पानी ज़रूरी हैं। फिर से प्रयास करें।",
        },
      ],
    },
    {
      question:
        "अगर बाढ़ की चेतावनी दी जाती है, तो आपको अपने महत्वपूर्ण दस्तावेज़ और इलेक्ट्रॉनिक्स कहाँ रखना चाहिए?",
      options: [
        {
          text: "तहखाने या घर की सबसे निचली मंज़िल पर।",
          isCorrect: false,
          feedback:
            "गलत। सबसे नीचे का हिस्सा सबसे पहले डूबता है। आपकी चीज़ें नष्ट हो सकती हैं। फिर से प्रयास करें।",
        },
        {
          text: "सबसे ऊपरी मंज़िल या ऊँची शेल्फ पर।",
          isCorrect: true,
          feedback:
            "सही! अपनी कीमती चीज़ों को ऊँचाई पर रखना उन्हें बाढ़ के पानी से सुरक्षित रखता है।",
        },
        {
          text: "निचले इलाके में बने पड़ोसी के घर में।",
          isCorrect: false,
          feedback:
            "गलत। पड़ोसी का घर भी डूब सकता है। आपको अपनी चीज़ें ऊँचाई पर सुरक्षित करनी चाहिए। फिर से प्रयास करें।",
        },
      ],
    },
  ],
  [
    {
      question: "बाढ़ के दौरान, डूबे हुए इलाकों से यात्रा करने का सबसे सुरक्षित तरीका क्या है?",
      options: [
        {
          text: "पानी में चलकर या तैरकर।",
          isCorrect: false,
          feedback:
            "गलत। बाढ़ का पानी खतरनाक वस्तुएँ, बिजली की तारें या तेज़ बहाव छुपा सकता है। इसमें कभी मत चलें। फिर से प्रयास करें।",
        },
        {
          text: "कार से पानी में चलाना।",
          isCorrect: false,
          feedback:
            "गलत। केवल 15 सेमी बहता पानी इंसान को गिरा सकता है, और 60 सेमी कार को बहा ले जाता है। फिर से प्रयास करें।",
        },
        {
          text: "ऊँचे और सुरक्षित रास्ते ढूँढना और पानी से दूर रहना।",
          isCorrect: true,
          feedback:
            "सही! सुरक्षित रहने का सबसे अच्छा तरीका है ऊँचाई पर जाना और पानी से पूरी तरह बचना।",
        },
      ],
    },
    {
      question: "अगर आपके इलाके में 'अचानक बाढ़' (फ्लैश फ्लड) की चेतावनी दी जाती है तो आपको क्या करना चाहिए?",
      options: [
        {
          text: "कुछ देर और जानकारी का इंतज़ार करना।",
          isCorrect: false,
          feedback:
            "गलत। फ्लैश फ्लड बहुत जल्दी आते हैं। इंतज़ार करना खतरनाक हो सकता है। फिर से प्रयास करें।",
        },
        {
          text: "तुरंत ऊँचाई पर चले जाना।",
          isCorrect: true,
          feedback:
            "सही! फ्लैश फ्लड बिना चेतावनी के आ सकते हैं, इसलिए तुरंत सुरक्षित स्थान पर जाना ज़रूरी है।",
        },
        {
          text: "घर पर ही रहना और इंतज़ार करना।",
          isCorrect: false,
          feedback:
            "गलत। आपका घर सुरक्षित नहीं भी हो सकता है। हमेशा ऊँचाई पर जाएँ। फिर से प्रयास करें।",
        },
      ],
    },
  ],
  [
    {
      question: "बाढ़ के बाद, अपने घर वापस कब जाना सुरक्षित है?",
      options: [
        {
          text: "जब पानी पूरी तरह सूख जाए।",
          isCorrect: false,
          feedback:
            "गलत। पानी सूखने के बाद भी छुपे हुए खतरे हो सकते हैं। फिर से प्रयास करें।",
        },
        {
          text: "जब अधिकारी कहें कि यह सुरक्षित है।",
          isCorrect: true,
          feedback:
            "सही! केवल तब ही घर लौटें जब स्थानीय अधिकारी क्षेत्र को सुरक्षित घोषित करें।",
        },
        {
          text: "जब आपका दोस्त मैसेज करके कहे कि सब ठीक है।",
          isCorrect: false,
          feedback:
            "गलत। केवल आधिकारिक सूचना पर भरोसा करें। फिर से प्रयास करें।",
        },
      ],
    },
    {
      question:
        "बाढ़ के बाद जब आप घर लौटते हैं, तो सबसे पहले आपको क्या जाँच करनी चाहिए?",
      options: [
        {
          text: "कहीं ढाँचे को नुकसान और गैस लीक तो नहीं।",
          isCorrect: true,
          feedback:
            "सही! घर में ढाँचे की कमजोरी या गैस लीक हो सकते हैं। सफाई शुरू करने से पहले इन्हें जाँचना ज़रूरी है।",
        },
        {
          text: "आपका टीवी और इलेक्ट्रॉनिक्स काम कर रहे हैं या नहीं।",
          isCorrect: false,
          feedback:
            "गलत। गीले इलेक्ट्रॉनिक्स को कभी नहीं छूना चाहिए। फिर से प्रयास करें।",
        },
        {
          text: "आपका फर्नीचर बच सकता है या नहीं।",
          isCorrect: false,
          feedback:
            "गलत। आपकी सुरक्षा, सामान से कहीं अधिक महत्वपूर्ण है। फिर से प्रयास करें।",
        },
      ],
    },
  ],
  [
    {
      question: "बाढ़ के पानी का सबसे बड़ा अदृश्य खतरा क्या है?",
      options: [
        {
          text: "छुपी हुई नुकीली चीज़ें और बिजली की तारें।",
          isCorrect: true,
          feedback:
            "सही! बाढ़ का पानी अक्सर गंदा और खतरनाक होता है, जिसमें नुकीला मलबा या बिजली की तारें छुपी हो सकती हैं।",
        },
        {
          text: "बाढ़ के पानी में चलना हमेशा सुरक्षित है।",
          isCorrect: false,
          feedback:
            "गलत। यह कभी सही नहीं है। बाढ़ का पानी बहुत खतरनाक हो सकता है। फिर से प्रयास करें।",
        },
        {
          text: "सिर्फ गाड़ियाँ ही इसमें बह सकती हैं।",
          isCorrect: false,
          feedback:
            "गलत। सिर्फ 15 सेमी बहता पानी इंसान को गिरा सकता है। फिर से प्रयास करें।",
        },
      ],
    },
    {
      question: "बाढ़ सुरक्षा के लिए सार्वभौमिक सलाह क्या है?",
      options: [
        {
          text: "'ड्रॉप, कवर, और होल्ड ऑन'",
          isCorrect: false,
          feedback:
            "गलत। यह भूकंप के लिए है। बाढ़ के लिए नारा है 'Turn Around, Don't Drown!'। फिर से प्रयास करें।",
        },
        {
          text: "'लुक, लिसन, एंड लिव!'",
          isCorrect: false,
          feedback:
            "गलत। यह रेल सुरक्षा का नारा है। बाढ़ के लिए नारा है 'Turn Around, Don't Drown!'। फिर से प्रयास करें।",
        },
        {
          text: "'Turn Around, Don't Drown!'",
          isCorrect: true,
          feedback:
            "सही! यह सबसे महत्वपूर्ण सलाह है। कभी भी बाढ़ के पानी में चलने या गाड़ी चलाने की कोशिश न करें।",
        },
      ],
    },
  ],
];

export default function FloodQuizhindi() {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 font-sans">
      <div className="quiz-container w-full max-w-lg bg-gray-800 rounded-2xl shadow-xl p-6 border-4 border-blue-500">
        <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">
          बाढ़ तैयारी क्विज़
        </h1>

        {!started && !finished && (
          <div className="text-center">
            <img
              src="https://placehold.co/400x200/3b82f6/ffffff?text=FLOOD+QUIZ"
              alt="Flood Quiz"
              className="mx-auto rounded-lg mb-4"
            />
            <p className="text-lg font-medium">
              अपनी जानकारी जाँचें और सीखें कि बाढ़ के दौरान सुरक्षित कैसे रहें!
            </p>
            <button
              onClick={() => setStarted(true)}
              className="mt-6 bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-600"
            >
              क्विज़ शुरू करें
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
                    ? "अगला प्रश्न"
                    : currentSetIndex < quizSets.length - 1
                    ? "अगले सेट पर जाएँ"
                    : "क्विज़ समाप्त करें"
                  : "फिर से प्रयास करें"}
              </button>
            )}
          </div>
        )}

        {finished && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-400 mb-4">
              क्विज़ पूरा हुआ!
            </h2>
            <p className="text-lg font-medium mb-6">
              आपने कुल {score} अंक प्राप्त किए!
            </p>
            <button
              onClick={restartQuiz}
              className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-600"
            >
              क्विज़ फिर से शुरू करें
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
