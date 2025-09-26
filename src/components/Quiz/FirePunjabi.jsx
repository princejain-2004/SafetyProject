import React, { useState } from "react";

const quizSets = [
  // ਕਵਿਜ਼ ਸੈੱਟ 1: ਅੱਗ ਤੋਂ ਬਚਾਅ
  [
    {
      question: "ਅੱਗ ਤੋਂ ਬਚਣ ਲਈ, ਤੁਹਾਨੂੰ ਸੜਦੀ ਮੋਮਬੱਤੀ ਕਿੱਥੇ ਨਹੀਂ ਰੱਖਣੀ ਚਾਹੀਦੀ?",
      options: [
        {
          text: "ਹਵਾ ਤੋਂ ਦੂਰ, ਇੱਕ ਮਜ਼ਬੂਤ ਸਿੱਧੀ ਸਤ੍ਹਾ 'ਤੇ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਇਹ ਇਕ ਚੰਗੀ ਆਦਤ ਹੈ। ਮੋਮਬੱਤੀਆਂ ਹਮੇਸ਼ਾ ਸਥਿਰ ਸਤ੍ਹਾ 'ਤੇ ਰੱਖਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਪਰਦਿਆਂ ਜਾਂ ਹੋਰ ਸੜਨ ਵਾਲੀਆਂ ਚੀਜ਼ਾਂ ਦੇ ਨੇੜੇ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਮੋਮਬੱਤੀਆਂ ਅਤੇ ਅੱਗ ਨੂੰ ਸੜਨ ਵਾਲੀਆਂ ਚੀਜ਼ਾਂ ਤੋਂ ਦੂਰ ਰੱਖੋ।",
        },
        {
          text: "ਕੱਚ ਦੇ ਜਾਰ ਜਾਂ ਹੋਲਡਰ ਦੇ ਅੰਦਰ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਸਹੀ ਹੋਲਡਰ ਦੀ ਵਰਤੋਂ ਕਰਨਾ ਇੱਕ ਚੰਗਾ ਸੁਰੱਖਿਆ ਉਪਾਇ ਹੈ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
    {
      question:
        "ਉਹ ਇਲੈਕਟ੍ਰੌਨਿਕ ਉਪਕਰਣ ਜੋ ਵਰਤੋਂ ਵਿਚ ਨਹੀਂ ਹਨ, ਉਨ੍ਹਾਂ ਨਾਲ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਣ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        {
          text: "ਉਹਨਾਂ ਨੂੰ ਸਾਫ਼ ਰੱਖਣ ਲਈ ਕੱਪੜੇ ਨਾਲ ਢੱਕ ਦਿਓ।",
          isCorrect: false,
          feedback: "ਗਲਤ। ਇਹ ਅੱਗ ਤੋਂ ਬਚਾਅ ਦੀ ਆਦਤ ਨਹੀਂ ਹੈ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਉਹਨਾਂ ਨੂੰ ਹਮੇਸ਼ਾ ਪਲੱਗ ਵਿੱਚ ਜੋੜਿਆ ਰੱਖੋ।",
          isCorrect: false,
          feedback: "ਗਲਤ। ਇਸ ਨਾਲ ਬਿਜਲੀ ਦੀ ਅੱਗ ਲੱਗ ਸਕਦੀ ਹੈ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਉਹਨਾਂ ਨੂੰ ਵਾਲ ਸਾਕਟ ਤੋਂ ਅਣਪਲੱਗ ਕਰ ਦਿਓ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਜਦੋਂ ਵਰਤੋਂ ਵਿਚ ਨਾ ਹੋਣ ਤਾਂ ਉਪਕਰਣਾਂ ਨੂੰ ਅਣਪਲੱਗ ਕਰਨਾ ਸ਼ਾਰਟ ਸਰਕਟ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।",
        },
      ],
    },
  ],
  // ਕਵਿਜ਼ ਸੈੱਟ 2: ਅੱਗ ਲੱਗਣ ਦੀ ਸਥਿਤੀ ਵਿੱਚ
  [
    {
      question: "ਜੇ ਤੁਹਾਡੇ ਕੱਪੜਿਆਂ ਵਿੱਚ ਅੱਗ ਲੱਗ ਜਾਵੇ ਤਾਂ ਤੁਹਾਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        {
          text: "ਪਾਣੀ ਲੱਭਣ ਲਈ ਦੌੜੋ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਦੌੜਣ ਨਾਲ ਅੱਗ ਹੋਰ ਤੇਜ਼ੀ ਨਾਲ ਫੈਲ ਸਕਦੀ ਹੈ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਜੋਰ ਨਾਲ ਮਦਦ ਲਈ ਚੀਖੋ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਮਦਦ ਮੰਗਣਾ ਜ਼ਰੂਰੀ ਹੈ, ਪਰ ਪਹਿਲਾਂ ਅੱਗ ਬੁਝਾਉਣਾ ਪ੍ਰਾਥਮਿਕਤਾ ਹੈ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਰੁੱਕੋ, ਜ਼ਮੀਨ 'ਤੇ ਡਿਗੋ ਅਤੇ ਲੁੱਟੋ (Stop, Drop, and Roll)।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਇਹ ਤਰੀਕਾ ਅੱਗ ਬੁਝਾਉਣ ਅਤੇ ਸਰੀਰ ਨੂੰ ਬਚਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
        },
      ],
    },
    {
      question: "ਧੂੰਏਂ ਵਾਲੇ ਕਮਰੇ ਤੋਂ ਬਾਹਰ ਨਿਕਲਦੇ ਸਮੇਂ ਤੁਹਾਨੂੰ ਕਿਵੇਂ ਤੁਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        {
          text: "ਖੜ੍ਹੇ ਹੋ ਕੇ ਤਾਂ ਜੋ ਧੂੰਏਂ ਦੇ ਉੱਪਰੋਂ ਦੇਖ ਸਕੋ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਧੂੰਆ ਉੱਪਰ ਵੱਲ ਚੜ੍ਹਦਾ ਹੈ। ਤੁਹਾਨੂੰ ਜ਼ਮੀਨ ਦੇ ਨੇੜੇ ਰਹਿਣਾ ਚਾਹੀਦਾ ਹੈ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਹੱਥਾਂ ਤੇ ਘੁੱਟਣਾਂ 'ਤੇ ਰੇਂਗ ਕੇ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਰੇਂਗਣ ਨਾਲ ਤੁਸੀਂ ਸਾਫ਼ ਹਵਾ ਵਿਚ ਸਾਹ ਲੈ ਸਕਦੇ ਹੋ ਅਤੇ ਸੁਰੱਖਿਅਤ ਨਿਕਲ ਸਕਦੇ ਹੋ।",
        },
        {
          text: "ਪਿੱਛੇ ਮੁੜ ਕੇ ਤੁਰੋ ਤਾਂ ਜੋ ਧੂੰਆ ਸਾਹ ਵਿੱਚ ਨਾ ਜਾਵੇ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਇਸ ਨਾਲ ਤੁਸੀਂ ਰਸਤੇ ਤੋਂ ਭਟਕ ਸਕਦੇ ਹੋ ਜਾਂ ਕਿਸੇ ਚੀਜ਼ ਨਾਲ ਟਕਰਾ ਸਕਦੇ ਹੋ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
  ],
  // ਕਵਿਜ਼ ਸੈੱਟ 3: ਫਾਇਰ ਐਕਸਟਿੰਗੁਇਸ਼ਰ ਦੀ ਵਰਤੋਂ
  [
    {
      question:
        "'PASS' ਸ਼ਬਦ ਵਿੱਚ 'A' ਦਾ ਕੀ ਅਰਥ ਹੈ ਜਦੋਂ ਅੱਗ ਬੁਝਾਉਣ ਵਾਲਾ ਉਪਕਰਣ ਵਰਤਦੇ ਹੋ?",
      options: [
        {
          text: "ਅੱਗ ਦੇ ਅਧਾਰ 'ਤੇ ਨਿਸ਼ਾਨਾ ਲਗਾਓ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਅੱਗ ਬੁਝਾਉਣ ਲਈ ਉਸ ਦੇ ਅਧਾਰ 'ਤੇ ਨਿਸ਼ਾਨਾ ਲਗਾਉਣਾ ਜ਼ਰੂਰੀ ਹੈ।",
        },
        {
          text: "ਤੀਜ਼ ਅਤੇ ਸ਼ਾਂਤ ਰਹੋ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। 'A' ਦਾ ਅਰਥ ਅੱਗ ਦੇ ਅਧਾਰ 'ਤੇ ਨਿਸ਼ਾਨਾ ਲਗਾਉਣਾ ਹੈ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਹਮੇਸ਼ਾ ਇੱਕ ਸੁਰੱਖਿਅਤ ਰਸਤਾ ਰੱਖੋ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਇਹ ਇਕ ਚੰਗੀ ਆਦਤ ਹੈ, ਪਰ PASS ਵਿੱਚ 'A' ਦਾ ਇਹ ਅਰਥ ਨਹੀਂ ਹੈ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
    {
      question:
        "ਜੇ ਅੱਗ ਬਹੁਤ ਵੱਡੀ ਹੋਵੇ ਅਤੇ ਐਕਸਟਿੰਗੁਇਸ਼ਰ ਨਾਲ ਨਾ ਬੁੱਝ ਸਕੇ ਤਾਂ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        {
          text: "ਮਦਦ ਆਉਣ ਤੱਕ ਅੱਗ ਨਾਲ ਲੜਦੇ ਰਹੋ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਵੱਡੀ ਅੱਗ ਨਾਲ ਲੜਨਾ ਖ਼ਤਰਨਾਕ ਹੋ ਸਕਦਾ ਹੈ। ਆਪਣੀ ਸੁਰੱਖਿਆ ਪਹਿਲਾਂ ਰੱਖੋ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਕਮਰੇ ਦਾ ਦਰਵਾਜ਼ਾ ਬੰਦ ਕਰੋ ਅਤੇ ਤੁਰੰਤ ਬਾਹਰ ਨਿਕਲੋ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਦਰਵਾਜ਼ਾ ਬੰਦ ਕਰਨ ਨਾਲ ਅੱਗ ਫੈਲਣ ਤੋਂ ਰੁਕ ਸਕਦੀ ਹੈ ਅਤੇ ਤੁਹਾਨੂੰ ਬਚਣ ਲਈ ਸਮਾਂ ਮਿਲਦਾ ਹੈ।",
        },
        {
          text: "ਆਪਣੀਆਂ ਕੀਮਤੀ ਚੀਜ਼ਾਂ ਲੈਣ ਲਈ ਵਾਪਸ ਅੰਦਰ ਜਾਓ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਤੁਹਾਡੀ ਜਾਨ ਕੀਮਤੀ ਹੈ, ਸਮਾਨ ਨਹੀਂ। ਸੜਦੇ ਘਰ ਵਿੱਚ ਕਦੇ ਨਾ ਜਾਓ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
  ],
  // ਕਵਿਜ਼ ਸੈੱਟ 4: ਅੱਗ ਤੋਂ ਸੁਰੱਖਿਆ ਯੋਜਨਾ
  [
    {
      question: "ਤੁਸੀਂ ਆਪਣੇ ਧੂੰਏਂ ਵਾਲੇ ਅਲਾਰਮ ਕਿੰਨੀ ਵਾਰ ਚੈਕ ਕਰਨੇ ਚਾਹੀਦੇ ਹਨ?",
      options: [
        {
          text: "ਸਾਲ ਵਿੱਚ ਇੱਕ ਵਾਰ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਸਾਲ ਵਿੱਚ ਇੱਕ ਵਾਰ ਕਾਫ਼ੀ ਨਹੀਂ। ਤੁਹਾਨੂੰ ਇਹਨਾਂ ਨੂੰ ਵੱਧ ਵਾਰ ਚੈਕ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਹਰ ਮਹੀਨੇ ਇੱਕ ਵਾਰ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਧੂੰਏਂ ਵਾਲੇ ਅਲਾਰਮ ਨੂੰ ਹਰ ਮਹੀਨੇ ਚੈਕ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ ਕਿ ਉਹ ਠੀਕ ਕੰਮ ਕਰ ਰਹੇ ਹਨ ਜਾਂ ਨਹੀਂ।",
        },
        {
          text: "ਸਿਰਫ਼ ਜਦੋਂ ਬੈਟਰੀ ਦੀ ਆਵਾਜ਼ ਆਵੇ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਬੈਟਰੀ ਖਤਮ ਹੋਣ ਦੀ ਉਡੀਕ ਨਾ ਕਰੋ। ਇਹ ਬਹੁਤ ਦੇਰ ਹੋ ਸਕਦੀ ਹੈ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
    {
      question:
        "ਆਪਣੇ ਪਰਿਵਾਰ ਦੀ ਅੱਗ ਸੁਰੱਖਿਆ ਯੋਜਨਾ ਵਿੱਚ 'ਮੀਟਿੰਗ ਪਲੇਸ' (ਮਿਲਣ ਦੀ ਥਾਂ) ਕਿਉਂ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ?",
      options: [
        {
          text: "ਬਚਣ ਤੋਂ ਬਾਅਦ ਦੋਸਤਾਂ ਨਾਲ ਮਿਲਣ ਲਈ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਇਹ ਥਾਂ ਪਰਿਵਾਰ ਲਈ ਹੁੰਦੀ ਹੈ, ਦੋਸਤਾਂ ਲਈ ਨਹੀਂ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਇਹ ਜਾਣਨ ਲਈ ਕਿ ਸਭ ਸੁਰੱਖਿਅਤ ਬਾਹਰ ਆ ਗਏ ਹਨ ਜਾਂ ਨਹੀਂ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਮੀਟਿੰਗ ਪਲੇਸ ਨਾਲ ਸਭ ਨੂੰ ਇਕੱਠਾ ਕਰਨ ਅਤੇ ਸਭ ਦੀ ਮੌਜੂਦਗੀ ਯਕੀਨੀ ਕਰਨ ਵਿੱਚ ਮਦਦ ਮਿਲਦੀ ਹੈ।",
        },
        {
          text: "ਕੱਪੜੇ ਅਤੇ ਹੋਰ ਚੀਜ਼ਾਂ ਰੱਖਣ ਲਈ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਮੀਟਿੰਗ ਪਲੇਸ ਦਾ ਮਕਸਦ ਲੋਕਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਨਾ ਹੈ, ਸਮਾਨ ਰੱਖਣਾ ਨਹੀਂ। ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
  ],
];

export default function FireQuizPunjabi() {
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
          🔥 ਅੱਗ ਸੁਰੱਖਿਆ ਕਵਿਜ਼
        </h1>

        {!started && !quizComplete && (
          <div className="text-center">
            <img
              src="https://placehold.co/400x200/ef4444/ffffff?text=FIRE+QUIZ"
              alt="Fire Quiz"
              className="mx-auto rounded-lg mb-4"
            />
            <p className="text-lg font-medium">
              ਆਪਣੀ ਜਾਣਕਾਰੀ ਪਰਖੋ ਅਤੇ ਸਿੱਖੋ ਕਿ ਅੱਗ ਲੱਗਣ 'ਤੇ ਕਿਵੇਂ ਸੁਰੱਖਿਅਤ ਰਹਿਣਾ ਹੈ!
            </p>
            <button
              onClick={() => setStarted(true)}
              className="mt-8 bg-red-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-red-600"
            >
              ਕਵਿਜ਼ ਸ਼ੁਰੂ ਕਰੋ
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
                    ? "ਅਗਲਾ ਸਵਾਲ"
                    : currentSetIndex + 1 < quizSets.length
                    ? "ਅਗਲਾ ਭਾਗ ਜਾਰੀ ਰੱਖੋ"
                    : "ਕਵਿਜ਼ ਸਮਾਪਤ ਕਰੋ"
                  : "ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ"}
              </button>
            )}
          </div>
        )}

        {quizComplete && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-400">
              🎉 ਕਵਿਜ਼ ਮੁਕੰਮਲ!
            </h2>
            <p className="text-lg mt-4">
              ਤੁਸੀਂ ਕੁੱਲ {score} ਅੰਕ ਪ੍ਰਾਪਤ ਕੀਤੇ!
            </p>
            <button
              onClick={restartQuiz}
              className="mt-6 bg-red-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-red-600"
            >
              ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
