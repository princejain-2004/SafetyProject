import React, { useState } from "react";

const quizSets = [
  // क्विज़ सेट 1: आग से बचाव
  [
    {
      question: "आग से बचने के लिए, आपको जलती हुई मोमबत्ती कहाँ नहीं रखनी चाहिए?",
      options: [
        {
          text: "ड्राफ्ट से दूर एक मजबूत, सपाट सतह पर।",
          isCorrect: false,
          feedback:
            "गलत। यह एक अच्छी आदत है। मोमबत्तियों को हमेशा स्थिर सतह पर रखना चाहिए। फिर से प्रयास करें।",
        },
        {
          text: "पर्दों या अन्य ज्वलनशील चीजों के पास।",
          isCorrect: true,
          feedback:
            "सही! मोमबत्तियों और खुली लौ को ज्वलनशील वस्तुओं से दूर रखें।",
        },
        {
          text: "कांच के जार या होल्डर के अंदर।",
          isCorrect: false,
          feedback:
            "गलत। उपयुक्त होल्डर का उपयोग करना एक अच्छा सुरक्षा उपाय है। फिर से प्रयास करें।",
        },
      ],
    },
    {
      question:
        "ऐसे इलेक्ट्रॉनिक उपकरण जो उपयोग में नहीं हैं, उनके साथ सबसे महत्वपूर्ण क्या करना चाहिए?",
      options: [
        {
          text: "उन्हें साफ रखने के लिए कपड़े से ढक दें।",
          isCorrect: false,
          feedback: "गलत। यह आग से बचाव की आदत नहीं है। फिर से प्रयास करें।",
        },
        {
          text: "उन्हें हमेशा प्लग इन करके रखें।",
          isCorrect: false,
          feedback: "गलत। यह इलेक्ट्रिक आग का कारण बन सकता है। फिर से प्रयास करें।",
        },
        {
          text: "उन्हें वॉल सॉकेट से अनप्लग कर दें।",
          isCorrect: true,
          feedback:
            "सही! उपयोग में न होने पर उपकरणों को अनप्लग करना शॉर्ट सर्किट से आग की संभावना को कम करता है।",
        },
      ],
    },
  ],
  // क्विज़ सेट 2: आग लगने की स्थिति में
  [
    {
      question: "यदि आपके कपड़ों में आग लग जाए तो आपको क्या करना चाहिए?",
      options: [
        {
          text: "पानी खोजने के लिए दौड़ें।",
          isCorrect: false,
          feedback:
            "गलत। दौड़ने से आग और तेज़ फैल सकती है। फिर से प्रयास करें।",
        },
        {
          text: "जोर-जोर से मदद के लिए चिल्लाएँ।",
          isCorrect: false,
          feedback:
            "गलत। मदद माँगना ज़रूरी है, लेकिन पहले आग बुझाना प्राथमिकता है। फिर से प्रयास करें।",
        },
        {
          text: "रुकें, ज़मीन पर गिरें और लुड़कें (Stop, Drop, and Roll)।",
          isCorrect: true,
          feedback:
            "सही! यह तरीका आग को बुझाने और शरीर को बचाने में मदद करता है।",
        },
      ],
    },
    {
      question: "धुएँ वाले कमरे से बाहर निकलते समय आपको कैसे चलना चाहिए?",
      options: [
        {
          text: "खड़े होकर ताकि धुएँ के ऊपर से देख सकें।",
          isCorrect: false,
          feedback:
            "गलत। धुआँ ऊपर उठता है। आपको ज़मीन के पास रहना चाहिए। फिर से प्रयास करें।",
        },
        {
          text: "अपने हाथ और घुटनों पर रेंगते हुए।",
          isCorrect: true,
          feedback:
            "सही! रेंगने से आप साफ़ हवा में साँस ले सकते हैं और सुरक्षित निकल सकते हैं।",
        },
        {
          text: "धुआँ न सांस में जाए इसलिए पीछे की ओर चलते हुए।",
          isCorrect: false,
          feedback:
            "गलत। इससे आप रास्ता भटक सकते हैं या किसी चीज़ से टकरा सकते हैं। फिर से प्रयास करें।",
        },
      ],
    },
  ],
  // क्विज़ सेट 3: फायर एक्सटिंग्विशर का उपयोग
  [
    {
      question:
        "'PASS' शॉर्ट फॉर्म में 'A' का मतलब फायर एक्सटिंग्विशर इस्तेमाल करते समय क्या होता है?",
      options: [
        {
          text: "आग के आधार पर निशाना लगाएँ।",
          isCorrect: true,
          feedback:
            "सही! आग बुझाने के लिए उसका आधार निशाना बनाना ज़रूरी है।",
        },
        {
          text: "तेज़ और शांत रहें।",
          isCorrect: false,
          feedback:
            "गलत। 'A' का मतलब आग के आधार पर निशाना लगाना है। फिर से प्रयास करें।",
        },
        {
          text: "हमेशा एक सुरक्षित रास्ता रखें।",
          isCorrect: false,
          feedback:
            "गलत। यह एक अच्छी सुरक्षा आदत है, लेकिन PASS में 'A' का यह मतलब नहीं है। फिर से प्रयास करें।",
        },
      ],
    },
    {
      question:
        "अगर आग बहुत ज़्यादा हो और एक्सटिंग्विशर से न बुझ सके तो आपको क्या करना चाहिए?",
      options: [
        {
          text: "मदद आने तक आग से लड़ते रहें।",
          isCorrect: false,
          feedback:
            "गलत। बड़ी आग से लड़ना खतरनाक हो सकता है। अपनी सुरक्षा पहले रखें। फिर से प्रयास करें।",
        },
        {
          text: "कमरे का दरवाज़ा बंद करें और तुरंत बाहर निकलें।",
          isCorrect: true,
          feedback:
            "सही! दरवाज़ा बंद करने से आग फैलने से रुक सकती है और आपको सुरक्षित बाहर निकलने का समय मिलता है।",
        },
        {
          text: "अपनी कीमती चीजें लेने के लिए वापस अंदर जाएँ।",
          isCorrect: false,
          feedback:
            "गलत। आपकी जान कीमती है, सामान नहीं। जलते हुए घर में कभी न लौटें। फिर से प्रयास करें।",
        },
      ],
    },
  ],
  // क्विज़ सेट 4: आग से सुरक्षा योजना
  [
    {
      question: "आपको अपने स्मोक अलार्म कितनी बार जांचने चाहिए?",
      options: [
        {
          text: "साल में एक बार।",
          isCorrect: false,
          feedback:
            "गलत। साल में एक बार पर्याप्त नहीं है। आपको इन्हें अधिक बार जांचना चाहिए। फिर से प्रयास करें।",
        },
        {
          text: "हर महीने एक बार।",
          isCorrect: true,
          feedback:
            "सही! स्मोक अलार्म को हर महीने जांचना चाहिए कि वे सही से काम कर रहे हैं या नहीं।",
        },
        {
          text: "सिर्फ तब जब बैटरी की आवाज़ आए।",
          isCorrect: false,
          feedback:
            "गलत। बैटरी खत्म होने का इंतज़ार न करें। यह बहुत देर हो सकती है। फिर से प्रयास करें।",
        },
      ],
    },
    {
      question:
        "अपने परिवार की फायर प्लान में 'मीटिंग प्लेस' (मिलने की जगह) क्यों होनी चाहिए?",
      options: [
        {
          text: "भागने के बाद दोस्तों से मिलने के लिए।",
          isCorrect: false,
          feedback:
            "गलत। यह स्थान परिवार के लिए होता है, दोस्तों के लिए नहीं। फिर से प्रयास करें।",
        },
        {
          text: "यह जानने के लिए कि सभी सुरक्षित बाहर आ गए हैं या नहीं।",
          isCorrect: true,
          feedback:
            "सही! मीटिंग प्लेस सभी को इकट्ठा करने और सभी की उपस्थिति सुनिश्चित करने में मदद करता है।",
        },
        {
          text: "कपड़े और अन्य वस्तुएँ रखने के लिए।",
          isCorrect: false,
          feedback:
            "गलत। मीटिंग प्लेस का उद्देश्य लोगों को इकट्ठा करना है, सामान रखना नहीं। फिर से प्रयास करें।",
        },
      ],
    },
  ],
];

export default function FireQuizHindi() {
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
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100 font-sans">
      <div className="quiz-container w-11/12 max-w-lg bg-gray-800 border-4 border-red-500 rounded-2xl p-6 shadow-xl">
        <h1 className="text-3xl font-bold text-red-400 mb-4">
          🔥 अग्नि सुरक्षा क्विज़
        </h1>

        {!started && !quizComplete && (
          <div className="text-center">
            <img
              src="https://placehold.co/400x200/ef4444/ffffff?text=FIRE+QUIZ"
              alt="Fire Quiz"
              className="mx-auto rounded-lg mb-4"
            />
            <p className="text-lg font-medium">
              अपनी जानकारी को परखें और जानें कि आग लगने पर कैसे सुरक्षित रहें!
            </p>
            <button
              onClick={() => setStarted(true)}
              className="mt-8 bg-red-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-red-600"
            >
              क्विज़ शुरू करें
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
                    ? "अगला सवाल"
                    : currentSetIndex + 1 < quizSets.length
                    ? "अगला भाग जारी रखें"
                    : "क्विज़ समाप्त करें"
                  : "फिर से प्रयास करें"}
              </button>
            )}
          </div>
        )}

        {quizComplete && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-400">
              🎉 क्विज़ पूरा हुआ!
            </h2>
            <p className="text-lg mt-4">
              आपने कुल {score} अंक प्राप्त किए!
            </p>
            <button
              onClick={restartQuiz}
              className="mt-6 bg-red-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-red-600"
            >
              फिर से शुरू करें
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
