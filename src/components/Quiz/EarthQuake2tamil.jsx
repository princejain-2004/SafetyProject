    import React, { useState } from "react";
    
const quizSets_ta = [
  [
    {
      question: "நிலநடுக்கத்தின் போது உங்கள் வீட்டில் பாதுகாப்பாக வைத்துக்கொள்ள வேண்டிய மிக முக்கியமான பொருள் எது?",
      options: [
        { text: "சிறிய, லேசான பொருட்கள்", isCorrect: false, feedback: "தவறு. எல்லா பொருட்களையும் பாதுகாப்பது முக்கியம், ஆனால் பெரிய, கனமான பொருட்கள் அதிக ஆபத்தானவை." },
        { text: "பெரிய காலடி மற்றும் அலமாரிகள் போன்ற கனமான பொருட்கள்", isCorrect: true, feedback: "சரி! கனமான பொருட்களை பாதுகாப்பது விழுந்து காயம் அடையாமல் தடுக்கும்." },
        { text: "சுவரில் போட்ட படங்கள்", isCorrect: false, feedback: "தவறு. படங்கள் குறைந்த ஆபத்து அளிக்கின்றன. முதலில் கனமான பொருட்களை பாதுகாக்கவும்." },
      ],
    },
    {
      question: "நிலநடுக்க அவசரநிலை க்காக நீங்கள் முன்னதாக எதைத் தயாரிக்க வேண்டும்?",
      options: [
        { text: "மாற்ற முடியாத உணவு, தண்ணீர் மற்றும் விளக்கு கொண்ட அவசரக் கிட்", isCorrect: true, feedback: "சரி! அவசரக் கிட் உதவிவரும்வரை உயிர்காக்க முக்கியம்." },
        { text: "நகரின் அனைத்து ஷாப்பிங் மால்களின் விரிவான வரைபடம்", isCorrect: false, feedback: "தவறு. பாதுகாப்பு மண்டலங்கள் மற்றும் வெளியேறும் வழிகளின் வரைபடம் முக்கியம்." },
        { text: "உங்கள் குடும்பத்திற்கான புதிய உடைகள் மற்றும் காலணிகள்", isCorrect: false, feedback: "தவறு. முக்கிய கவனம் உயிர் காக்கும் பொருட்களிலிருக்க வேண்டும்." },
      ],
    },
    {
      question: "நிலநடுக்கத்தின் போது எந்த கட்டிடங்கள் பாதுகாப்பானவை?",
      options: [
        { text: "இஞ்சினீயர் செய்யாத உயரமான கட்டிடங்கள்", isCorrect: false, feedback: "தவறு. இவை ஆபத்தானவை." },
        { text: "நிலநடுக்க எதிர்ப்பு கட்டிடங்கள்", isCorrect: true, feedback: "சரி! இவை அதிர்வுகளைச் தாங்கும் வகையில் வடிவமைக்கப்பட்டவை." },
        { text: "பழைய நினைவுச் சின்னங்கள்", isCorrect: false, feedback: "தவறு. பழைய நினைவுச் சின்னங்கள் பொதுவாக பாதுகாப்பானவை அல்ல." },
      ],
    },
    {
      question: "நிலநடுக்கத்தின் போது கட்டிடத்தை விட்டு வெளியேறியபின் எங்கு செல்ல வேண்டும்?",
      options: [
        { text: "திறந்த வெளி", isCorrect: true, feedback: "சரி! திறந்த வெளியில் விழும் பொருட்களின் ஆபத்து இல்லை." },
        { text: "தாழ்நிலை அறை", isCorrect: false, feedback: "தவறு. கட்டிடம் சிதைந்தால் இது ஆபத்தானது." },
        { text: "மின்கம்பங்கள் அருகில்", isCorrect: false, feedback: "தவறு. மின்கம்பங்கள் விழலாம்." },
      ],
    },
  ],
];

    
    export default function EarthquakeQuizHindi() {
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
    