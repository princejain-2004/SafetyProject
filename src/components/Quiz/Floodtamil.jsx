import React, { useState } from "react";

const quizSets_ta = [
  // Set 1
  [
    {
      question: "பெரிய மழைக்கு முன், அவசரக் குழியில் எந்த பொருளை தயார் செய்வது முக்கியம்?",
      options: [
        { text: "நோன்பெரிஷபிள் உணவு மற்றும் தண்ணீர்", isCorrect: true, feedback: "சரி! ஒவ்வொரு நபருக்கும் குறைந்தது மூன்று நாள் உணவு மற்றும் தண்ணீர் இருக்க வேண்டும்." },
        { text: "உங்கள் பிடித்த வீடியோ கேம் கன்சோல்", isCorrect: false, feedback: "தவறு. பொழுதுபோக்கு முக்கியமில்லை, உயிர் பாதுகாப்பு முக்கியம்." },
        { text: "உங்கள் மிக சௌகரியமான தலையணை", isCorrect: false, feedback: "தவறு. பாதுகாப்பு முதலில், ஆறுதல் பின்னர்." },
      ],
    },
    {
      question: "பெருக்குமழை எச்சரிக்கை வந்தால், உங்கள் விலைமதிப்புள்ள ஆவணங்கள் மற்றும் மின்கட்டங்கள் எங்கே வைக்க வேண்டும்?",
      options: [
        { text: "கீழ் மாடி அல்லது அடித்தளம்", isCorrect: false, feedback: "தவறு. கீழ் மாடி முதலில் வெள்ளம் அடையும்." },
        { text: "உயர்ந்த மாடி அல்லது அலமாரி", isCorrect: true, feedback: "சரி! உங்கள் மதிப்புள்ள பொருட்களை உயரமான இடத்தில் வைக்கவும்." },
        { text: "நெருங்கிய அயல்நாட்டின் வீடு", isCorrect: false, feedback: "தவறு. அயல்நாட்டின் வீடும் வெள்ளத்தில் அடையலாம்." },
      ],
    },
  ],
  // Set 2
  [
    {
      question: "பெருக்குமழையின் போது, வெள்ளமான இடங்களில் பயணம் செய்வது எப்படி?",
      options: [
        { text: "நடக்க அல்லது நீந்த", isCorrect: false, feedback: "தவறு. வெள்ளம் அபாயகரமான பொருட்கள் மற்றும் மின் கம்பிகள் மறைத்து வைக்கலாம்." },
        { text: "காரில் செல்", isCorrect: false, feedback: "தவறு. 15 செ.மீ. வெள்ளம் கூட ஆபத்தானது. 60 செ.மீ. காரை அகற்றி செல்லலாம்." },
        { text: "உயர்ந்த பாதுகாப்பான பாதை கண்டறிந்து தண்ணீரைத் தவிர்க்கவும்", isCorrect: true, feedback: "சரி! பாதுகாப்பான உயரமான இடத்தைத் தேர்ந்தெடுக்கவும்." },
      ],
    },
    {
      question: "'ஃபிளாஷ் ப்ளட்' எச்சரிக்கை வந்தால் என்ன செய்ய வேண்டும்?",
      options: [
        { text: "மேலும் தகவலுக்காக காத்திரு", isCorrect: false, feedback: "தவறு. ஃபிளாஷ் ப்ளட் விரைவில் நிகழ்கிறது." },
        { text: "உயர்ந்த இடத்திற்கு உடனடியாக செல்லவும்", isCorrect: true, feedback: "சரி! உடனடியாக பாதுகாப்பான இடம் செல்லவும்." },
        { text: "வீட்டில் இரு", isCorrect: false, feedback: "தவறு. வீட்டில் பாதுகாப்பாக இருக்கலாம் என்று நம்பாதீர்கள்." },
      ],
    },
  ],
  // Set 3
  [
    {
      question: "பெருக்குமழைக்குப் பிறகு, எப்போது வீட்டிற்கு திரும்புவது பாதுகாப்பானது?",
      options: [
        { text: "பனி முற்றிலும் காய்ந்த பிறகு", isCorrect: false, feedback: "தவறு. மறைந்த அபாயங்கள் இருக்கலாம்." },
        { text: "அதிகாரிகள் அனுமதி கொடுத்த பிறகு", isCorrect: true, feedback: "சரி! அதிகாரிகள் பாதுகாப்பானது என்று கூறும் வரை திரும்ப வேண்டாம்." },
        { text: "நண்பர் அனுப்பிய மெசேஜ் வந்தால்", isCorrect: false, feedback: "தவறு. அதிகாரிகள் மட்டுமே நம்புக." },
      ],
    },
    {
      question: "வீட்டிற்கு திரும்பிய பிறகு முதலில் என்ன சோதிக்க வேண்டும்?",
      options: [
        { text: "மாடி மற்றும் வாயு لیک் சோதனை", isCorrect: true, feedback: "சரி! சோதனை அவசியம்." },
        { text: "டிவி மற்றும் மின் சாதனங்கள் வேலை செய்கிறதா", isCorrect: false, feedback: "தவறு. நனைந்த மின் சாதனங்களை தொடக்காதீர்கள்." },
        { text: "மீட்டிங் மீட்டிச் சேமிக்கமுடியுமா", isCorrect: false, feedback: "தவறு. பாதுகாப்பு முதலில்." },
      ],
    },
  ],
  // Set 4
  [
    {
      question: "நீங்கள் দেখতে পাচ্ছেন না এমন பெருக்குமழையின் முக்கிய அபாயம் என்ன?",
      options: [
        { text: "மறைந்த கூர்மையான பொருட்கள் மற்றும் மின் கம்பிகள்", isCorrect: true, feedback: "சரி! வெள்ளம் அபாயகரமானது." },
        { text: "வெள்ளத்தில் நடப்பது எப்போதும் பாதுகாப்பானது", isCorrect: false, feedback: "தவறு. வெள்ளம் மிகப்பெரிய அபாயம்." },
        { text: "கார்கள் மட்டுமே அடிக்கப்படலாம்", isCorrect: false, feedback: "தவறு. சிறிய நீரும் அபாயகரம்." },
      ],
    },
    {
      question: "பெருக்குமழைக்கான உலகளாவிய ஆலோசனை என்ன?",
      options: [
        { text: "'ட்ராப், கவுர் மற்றும் ஹோல்ட் ஆன்'", isCorrect: false, feedback: "தவறு. இது நிலநடுக்கத்துக்கானது." },
        { text: "'லுக், லிஸன், அண்ட் லிவ்!'", isCorrect: false, feedback: "தவறு. இது ரயில்வே பாதுகாப்புக்கானது." },
        { text: "'Turn Around, Don't Drown!'", isCorrect: true, feedback: "சரி! வெள்ளத்தில் நடவாதீர்கள் அல்லது வாகனம் ஓட்டாதீர்கள்." },
      ],
    },
  ],
];

export default function FloodQuiztamil() {
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
