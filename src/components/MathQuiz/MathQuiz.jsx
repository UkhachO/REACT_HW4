import { useState } from "react";
import Answer from "../Answer/Answer.jsx";
import styles from "./MathQuiz.module.css";

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const MathQuiz = () => {
  const [points, setPoints] = useState(0);
  const [taskKey, setTaskKey] = useState(0);

  const a = getRandomNumber();
  const b = getRandomNumber();

  const updatePoints = (userAnswer) => {
    const correctAnswer = a + b;

    if (Number(userAnswer) === correctAnswer) {
      setPoints((prev) => prev + 1);
    } else {
      setPoints((prev) => prev - 1);
    }

    setTaskKey((prev) => prev + 1);
  };

  return (
    <div key={taskKey} className={styles.quizContainer}>
      <p>
        Сколько будет {a} + {b}?
      </p>
      <p>Счёт: {points}</p>
      <Answer updatePoints={updatePoints} />
    </div>
  );
};

export default MathQuiz;
