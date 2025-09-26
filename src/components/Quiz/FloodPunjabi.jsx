import React, { useState } from "react";

const quizSets = [
  [
    {
      question:
        "ਬਾੜ੍ਹ ਤੋਂ ਪਹਿਲਾਂ, ਆਪਣੀ ਐਮਰਜੈਂਸੀ ਕਿੱਟ ਵਿੱਚ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਚੀਜ਼ ਕੀ ਪੈਕ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ?",
      options: [
        {
          text: "ਸੁੱਕਾ ਖਾਣਾ ਅਤੇ ਪਾਣੀ",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਹਰ ਵਿਅਕਤੀ ਲਈ ਘੱਟੋ-ਘੱਟ ਤਿੰਨ ਦਿਨਾਂ ਦਾ ਖਾਣਾ ਅਤੇ ਪਾਣੀ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
        },
        {
          text: "ਤੁਹਾਡਾ ਮਨਪਸੰਦ ਵੀਡੀਓ ਗੇਮ ਕਨਸੋਲ",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਮਨੋਰੰਜਨ ਚੰਗੀ ਗੱਲ ਹੈ, ਪਰ ਪਹਿਲੀ ਤਰਜੀਹ ਜਾਨ ਬਚਾਉਣ ਵਾਲੀਆਂ ਲੋੜਾਂ ਨੂੰ ਦੇਣੀ ਚਾਹੀਦੀ ਹੈ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਤੁਹਾਡਾ ਸਭ ਤੋਂ ਆਰਾਮਦਾਇਕ ਤਕੀਆ",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਆਰਾਮ ਤੋਂ ਵੱਧ ਸੁਰੱਖਿਆ ਮਹੱਤਵਪੂਰਨ ਹੈ। ਸੁੱਕਾ ਖਾਣਾ ਅਤੇ ਪਾਣੀ ਜ਼ਰੂਰੀ ਹਨ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
    {
      question:
        "ਜੇ ਬਾੜ੍ਹ ਦੀ ਚੇਤਾਵਨੀ ਆ ਜਾਵੇ, ਤਾਂ ਤੁਹਾਡੇ ਮਹੱਤਵਪੂਰਨ ਕਾਗਜ਼ਾਤ ਅਤੇ ਇਲੈਕਟ੍ਰਾਨਿਕ ਚੀਜ਼ਾਂ ਕਿੱਥੇ ਰੱਖਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ?",
      options: [
        {
          text: "ਤਹਿਖਾਨੇ ਜਾਂ ਘਰ ਦੀ ਸਭ ਤੋਂ ਹੇਠਲੀ ਮੰਜ਼ਿਲ ਤੇ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਸਭ ਤੋਂ ਹੇਠਲਾ ਹਿੱਸਾ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਡੁੱਬਦਾ ਹੈ। ਤੁਹਾਡੀਆਂ ਚੀਜ਼ਾਂ ਨਸ਼ਟ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਸਭ ਤੋਂ ਉੱਪਰਲੀ ਮੰਜ਼ਿਲ ਜਾਂ ਉੱਚੇ ਰੈਕ ਤੇ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਆਪਣੀਆਂ ਕੀਮਤੀ ਚੀਜ਼ਾਂ ਨੂੰ ਉੱਚਾਈ ਤੇ ਰੱਖਣ ਨਾਲ ਉਹ ਬਾੜ੍ਹ ਦੇ ਪਾਣੀ ਤੋਂ ਬਚ ਜਾਂਦੀਆਂ ਹਨ।",
        },
        {
          text: "ਹੇਠਲੇ ਇਲਾਕੇ ਵਾਲੇ ਪੜੋਸੀ ਦੇ ਘਰ ਵਿੱਚ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਪੜੋਸੀ ਦਾ ਘਰ ਵੀ ਡੁੱਬ ਸਕਦਾ ਹੈ। ਤੁਹਾਨੂੰ ਆਪਣੀਆਂ ਚੀਜ਼ਾਂ ਨੂੰ ਉੱਚਾਈ ਤੇ ਹੀ ਸੁਰੱਖਿਅਤ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
  ],
  [
    {
      question: "ਬਾੜ੍ਹ ਦੇ ਦੌਰਾਨ, ਡੁੱਬੇ ਹੋਏ ਇਲਾਕਿਆਂ ਵਿੱਚ ਜਾਣ ਦਾ ਸਭ ਤੋਂ ਸੁਰੱਖਿਅਤ ਤਰੀਕਾ ਕੀ ਹੈ?",
      options: [
        {
          text: "ਪਾਣੀ ਵਿੱਚ ਤੁਰਨਾ ਜਾਂ ਤੈਰਨਾ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਬਾੜ੍ਹ ਦੇ ਪਾਣੀ ਵਿੱਚ ਖਤਰਨਾਕ ਚੀਜ਼ਾਂ, ਬਿਜਲੀ ਦੀਆਂ ਤਾਰਾਂ ਜਾਂ ਤੇਜ਼ ਭਾਵ ਹੋ ਸਕਦਾ ਹੈ। ਕਦੇ ਵੀ ਇਸ ਵਿੱਚ ਨਾ ਜਾਓ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਕਾਰ ਚਲਾ ਕੇ ਪਾਣੀ ਵਿੱਚੋਂ ਲੰਘਣਾ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਸਿਰਫ 15 ਸੈਮੀ ਦਾ ਪਾਣੀ ਵੀ ਇਨਸਾਨ ਨੂੰ ਗਿਰਾ ਸਕਦਾ ਹੈ ਅਤੇ 60 ਸੈਮੀ ਦਾ ਪਾਣੀ ਕਾਰ ਨੂੰ ਵਗਾ ਲੈ ਜਾਂਦਾ ਹੈ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਉੱਚੇ ਅਤੇ ਸੁਰੱਖਿਅਤ ਰਸਤੇ ਲੱਭਣਾ ਅਤੇ ਪਾਣੀ ਤੋਂ ਦੂਰ ਰਹਿਣਾ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਸੁਰੱਖਿਅਤ ਰਹਿਣ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਤਰੀਕਾ ਹੈ ਉੱਚਾਈ ਤੇ ਜਾਣਾ ਅਤੇ ਪਾਣੀ ਤੋਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਬਚਣਾ।",
        },
      ],
    },
    {
      question:
        "ਜੇ ਤੁਹਾਡੇ ਇਲਾਕੇ ਵਿੱਚ 'ਅਚਾਨਕ ਬਾੜ੍ਹ' (ਫਲੈਸ਼ ਫਲੱਡ) ਦੀ ਚੇਤਾਵਨੀ ਆਵੇ ਤਾਂ ਤੁਹਾਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        {
          text: "ਕੁਝ ਹੋਰ ਸਮੇਂ ਲਈ ਜਾਣਕਾਰੀ ਦਾ ਇੰਤਜ਼ਾਰ ਕਰਨਾ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਫਲੈਸ਼ ਫਲੱਡ ਬਹੁਤ ਤੇਜ਼ੀ ਨਾਲ ਆਉਂਦੀਆਂ ਹਨ। ਇੰਤਜ਼ਾਰ ਕਰਨਾ ਖਤਰਨਾਕ ਹੋ ਸਕਦਾ ਹੈ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਤੁਰੰਤ ਉੱਚਾਈ ਵਾਲੀ ਥਾਂ ਤੇ ਚਲੇ ਜਾਣਾ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਫਲੈਸ਼ ਫਲੱਡ ਬਿਨਾਂ ਚੇਤਾਵਨੀ ਦੇ ਆ ਸਕਦੀਆਂ ਹਨ, ਇਸ ਲਈ ਤੁਰੰਤ ਸੁਰੱਖਿਅਤ ਥਾਂ ਤੇ ਜਾਣਾ ਜ਼ਰੂਰੀ ਹੈ।",
        },
        {
          text: "ਘਰ ਤੇ ਹੀ ਰਹਿਣਾ ਅਤੇ ਇੰਤਜ਼ਾਰ ਕਰਨਾ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਤੁਹਾਡਾ ਘਰ ਸੁਰੱਖਿਅਤ ਨਹੀਂ ਵੀ ਹੋ ਸਕਦਾ। ਹਮੇਸ਼ਾ ਉੱਚਾਈ ਵਾਲੀ ਥਾਂ ਤੇ ਜਾਓ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
  ],
  [
    {
      question: "ਬਾੜ੍ਹ ਤੋਂ ਬਾਅਦ, ਆਪਣੇ ਘਰ ਵਾਪਸ ਕਦੋਂ ਜਾਣਾ ਸੁਰੱਖਿਅਤ ਹੈ?",
      options: [
        {
          text: "ਜਦੋਂ ਪਾਣੀ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸੁੱਕ ਜਾਵੇ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਪਾਣੀ ਸੁੱਕਣ ਤੋਂ ਬਾਅਦ ਵੀ ਲੁਕੇ ਹੋਏ ਖਤਰੇ ਹੋ ਸਕਦੇ ਹਨ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਜਦੋਂ ਅਧਿਕਾਰੀ ਕਹਿੰਦੇ ਹਨ ਕਿ ਇਹ ਸੁਰੱਖਿਅਤ ਹੈ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਸਿਰਫ ਉਸੇ ਵੇਲੇ ਘਰ ਵਾਪਸ ਜਾਓ ਜਦੋਂ ਸਥਾਨਕ ਅਧਿਕਾਰੀ ਇਲਾਕੇ ਨੂੰ ਸੁਰੱਖਿਅਤ ਐਲਾਨ ਕਰਨ।",
        },
        {
          text: "ਜਦੋਂ ਤੁਹਾਡਾ ਦੋਸਤ ਮੈਸੇਜ ਕਰਕੇ ਕਹੇ ਕਿ ਸਭ ਠੀਕ ਹੈ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਸਿਰਫ਼ ਅਧਿਕਾਰਕ ਜਾਣਕਾਰੀ ਤੇ ਹੀ ਭਰੋਸਾ ਕਰੋ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
    {
      question:
        "ਬਾੜ੍ਹ ਤੋਂ ਬਾਅਦ ਜਦੋਂ ਤੁਸੀਂ ਘਰ ਵਾਪਸ ਜਾਂਦੇ ਹੋ, ਤਾਂ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਕੀ ਚੈੱਕ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: [
        {
          text: "ਘਰ ਦੇ ਢਾਂਚੇ ਨੂੰ ਨੁਕਸਾਨ ਅਤੇ ਗੈਸ ਲੀਕ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਘਰ ਵਿੱਚ ਢਾਂਚੇ ਦੀ ਕਮਜ਼ੋਰੀ ਜਾਂ ਗੈਸ ਲੀਕ ਹੋ ਸਕਦੇ ਹਨ। ਸਫਾਈ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹਨਾਂ ਨੂੰ ਚੈੱਕ ਕਰਨਾ ਜ਼ਰੂਰੀ ਹੈ।",
        },
        {
          text: "ਤੁਹਾਡਾ ਟੀਵੀ ਅਤੇ ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਕੰਮ ਕਰ ਰਹੇ ਹਨ ਜਾਂ ਨਹੀਂ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਗਿੱਲੇ ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਨੂੰ ਕਦੇ ਵੀ ਨਾ ਛੂਹੋ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਤੁਹਾਡਾ ਫਰਨੀਚਰ ਬਚ ਸਕਦਾ ਹੈ ਜਾਂ ਨਹੀਂ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਤੁਹਾਡੀ ਸੁਰੱਖਿਆ, ਸਮਾਨ ਤੋਂ ਕਈ ਵੱਧ ਮਹੱਤਵਪੂਰਨ ਹੈ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
  ],
  [
    {
      question: "ਬਾੜ੍ਹ ਦੇ ਪਾਣੀ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਅਦਿੱਖ ਖਤਰਾ ਕੀ ਹੈ?",
      options: [
        {
          text: "ਲੁਕੀਆਂ ਹੋਈਆਂ ਨੁਕੀਲੀਆਂ ਚੀਜ਼ਾਂ ਅਤੇ ਬਿਜਲੀ ਦੀਆਂ ਤਾਰਾਂ।",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਬਾੜ੍ਹ ਦਾ ਪਾਣੀ ਅਕਸਰ ਗੰਦਾ ਅਤੇ ਖਤਰਨਾਕ ਹੁੰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਨੁਕੀਲਾ ਮਲਬਾ ਜਾਂ ਬਿਜਲੀ ਦੀਆਂ ਤਾਰਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ।",
        },
        {
          text: "ਬਾੜ੍ਹ ਦੇ ਪਾਣੀ ਵਿੱਚ ਤੁਰਨਾ ਹਮੇਸ਼ਾਂ ਸੁਰੱਖਿਅਤ ਹੁੰਦਾ ਹੈ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਇਹ ਕਦੇ ਵੀ ਸਹੀ ਨਹੀਂ ਹੈ। ਬਾੜ੍ਹ ਦਾ ਪਾਣੀ ਬਹੁਤ ਖਤਰਨਾਕ ਹੋ ਸਕਦਾ ਹੈ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "ਸਿਰਫ਼ ਕਾਰਾਂ ਹੀ ਇਸ ਵਿੱਚ ਵਗ ਸਕਦੀਆਂ ਹਨ।",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਸਿਰਫ਼ 15 ਸੈਮੀ ਪਾਣੀ ਵੀ ਇਨਸਾਨ ਨੂੰ ਗਿਰਾ ਸਕਦਾ ਹੈ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
      ],
    },
    {
      question: "ਬਾੜ੍ਹ ਸੁਰੱਖਿਆ ਲਈ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਸਲਾਹ ਕੀ ਹੈ?",
      options: [
        {
          text: "'ਡ੍ਰਾਪ, ਕਵਰ, ਐਂਡ ਹੋਲਡ ਆਨ'",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਇਹ ਭੂਚਾਲ ਲਈ ਹੈ। ਬਾੜ੍ਹ ਲਈ ਨਾਅਰਾ ਹੈ 'Turn Around, Don't Drown!'। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "'ਲੁਕ, ਲਿਸਨ, ਐਂਡ ਲਿਵ!'",
          isCorrect: false,
          feedback:
            "ਗਲਤ। ਇਹ ਰੇਲ ਸੁਰੱਖਿਆ ਦਾ ਨਾਅਰਾ ਹੈ। ਬਾੜ੍ਹ ਲਈ ਨਾਅਰਾ ਹੈ 'Turn Around, Don't Drown!'। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
        },
        {
          text: "'Turn Around, Don't Drown!'",
          isCorrect: true,
          feedback:
            "ਸਹੀ! ਇਹ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਸਲਾਹ ਹੈ। ਕਦੇ ਵੀ ਬਾੜ੍ਹ ਦੇ ਪਾਣੀ ਵਿੱਚ ਤੁਰਣ ਜਾਂ ਕਾਰ ਚਲਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਨਾ ਕਰੋ।",
        },
      ],
    },
  ],
];

export default function FloodQuizPunjabi() {
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
          ਬਾੜ੍ਹ ਤਿਆਰੀ ਕੁਇਜ਼
        </h1>

        {!started && !finished && (
          <div className="text-center">
            <img
              src="https://placehold.co/400x200/3b82f6/ffffff?text=FLOOD+QUIZ"
              alt="Flood Quiz"
              className="mx-auto rounded-lg mb-4"
            />
            <p className="text-lg font-medium">
              ਆਪਣੀ ਜਾਣਕਾਰੀ ਚੈਕ ਕਰੋ ਅਤੇ ਸਿੱਖੋ ਕਿ ਬਾੜ੍ਹ ਦੇ ਦੌਰਾਨ ਸੁਰੱਖਿਅਤ ਕਿਵੇਂ ਰਹਿਣਾ ਹੈ!
            </p>
            <button
              onClick={() => setStarted(true)}
              className="mt-6 bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-600"
            >
              ਕੁਇਜ਼ ਸ਼ੁਰੂ ਕਰੋ
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
                    ? "ਅਗਲਾ ਪ੍ਰਸ਼ਨ"
                    : currentSetIndex < quizSets.length - 1
                    ? "ਅਗਲੇ ਸੈੱਟ ਤੇ ਜਾਓ"
                    : "ਕੁਇਜ਼ ਸਮਾਪਤ ਕਰੋ"
                  : "ਫਿਰ ਕੋਸ਼ਿਸ਼ ਕਰੋ"}
              </button>
            )}
          </div>
        )}

        {finished && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-400 mb-4">
              ਕੁਇਜ਼ ਪੂਰਾ ਹੋ ਗਿਆ!
            </h2>
            <p className="text-lg font-medium mb-6">
              ਤੁਸੀਂ ਕੁੱਲ {score} ਅੰਕ ਹਾਸਲ ਕੀਤੇ!
            </p>
            <button
              onClick={restartQuiz}
              className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-600"
            >
              ਕੁਇਜ਼ ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
