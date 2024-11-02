import React, { useState } from 'react';
import './App.css';
import Question from './components/Question';
import Result from './components/Result';


const quizData = [
  {
    question: "Was ist eine Komponente in React?",
    options: [
      "A) Ein vorgefertigtes Plugin.",
      "B) Eine wiederverwendbare Funktion oder Klasse, die UI-Elemente erzeugt.",
      "C) Eine Datenbank für das Speichern von Daten.",
      "D) Ein Werkzeug zum Testen von Anwendungen."
    ],
    answer: "B) Eine wiederverwendbare Funktion oder Klasse, die UI-Elemente erzeugt."
  },
  {
    question: "Wie wird der Zustand (State) in einer Funktionalen Komponente verwaltet?",
    options: [
      "A) Mit `this.state`.",
      "B) Mit `useEffect`.",
      "C) Mit `useState`.",
      "D) Mit `setState`."
    ],
    answer: "C) Mit `useState`."
  },
  {
    question: "Was ist der Zweck von `useEffect` in React?",
    options: [
      "A) Um den Zustand zu verwalten.",
      "B) Um Seiteneffekte wie API-Anfragen oder DOM-Manipulationen durchzuführen.",
      "C) Um UI-Elemente zu rendern.",
      "D) Um den Zustand der Komponente zu initialisieren."
    ],
    answer: "B) Um Seiteneffekte wie API-Anfragen oder DOM-Manipulationen durchzuführen."
  },
 
  {
    question: "Wie können Props an eine Komponente übergeben werden?",
    options: [
      "A) Durch den Einsatz von `setProps`.",
      "B) Durch die Übergabe von Attributen im JSX.",
      "C) Props können nicht an eine Komponente übergeben werden.",
      "D) Durch `useState`."
    ],
    answer: "B) Durch die Übergabe von Attributen im JSX."
  },
  
  
  {
    question: "Was ist JSX in React?",
    options: [
      "A) Eine Template-Sprache wie HTML.",
      "B) Ein JavaScript-Syntax-Erweiterung, die es ermöglicht, HTML-ähnlichen Code in JavaScript zu schreiben.",
      "C) Eine Datenbank für UI-Daten.",
      "D) Eine Methode, um API-Anfragen durchzuführen."
    ],
    answer: "B) Ein JavaScript-Syntax-Erweiterung, die es ermöglicht, HTML-ähnlichen Code in JavaScript zu schreiben."
  },

  {
    question: "Was ist der Terminal?",
    options: [
      "A) Ein Dateisystem.",
      "B) Eine textbasierte Benutzeroberfläche, mit der man Kommandos an das Betriebssystem senden kann.",
      "C) Ein grafisches Programm für Webentwicklung.",
      "D) Ein Texteditor."
    ],
    answer: "B) Eine textbasierte Benutzeroberfläche, mit der man Kommandos an das Betriebssystem senden kann."
  },

  {
    question: "Welcher Befehl wird verwendet, um das aktuelle Verzeichnis anzuzeigen?",
    options: [
      "A) `ls`",
      "B) `pwd`",
      "C) `cd`",
      "D) `mkdir`"
    ],
    answer: "B) `pwd`"
  },


];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);

    if (selectedOption.trim().toLowerCase() === quizData[currentQuestion].answer.trim().toLowerCase()) {
      setScore(score + 1);
    } else {
      setShowCorrectAnswer(true);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      setShowCorrectAnswer(false);
      setSelectedAnswer(''); 
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowResult(true);
      }
    }, 3000); 
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <Result score={score} totalQuestions={quizData.length} />
      ) : (
        <div>
          {showCorrectAnswer ? (
            <div className="correct-answer-container">
              <p>{`You selected: ${selectedAnswer}`}</p>
              <p>{`Correct Answer: ${quizData[currentQuestion].answer}`}</p>
            </div>
          ) : (
            <Question
              data={quizData[currentQuestion]}
              handleAnswer={handleAnswer}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;