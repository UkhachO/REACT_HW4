import { useState } from "react";
import Answer from "../Answer/Answer.jsx";

import styles from "./MathQuiz.module.css";

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const MathQuiz = () => {
    const [a, setA] = useState(getRandomNumber());
    const [b, setB] = useState(getRandomNumber());
    const [points, setPoints] = useState(0);

    const generateNewTask = () => {
        setA(getRandomNumber());
        setB(getRandomNumber());
    };

    const updatePoints = (userAnswer) => {
        const correctAnswer = a + b;

        if (parseInt(userAnswer) === correctAnswer) {
            setPoints(prev => prev + 1);
        } else {
            setPoints(prev => prev - 1);
        }

    generateNewTask();
  };

    return (

        <div className={styles.quizContainer}>

             <h2>Ваши очки: {points}</h2>
             <p>Сколько будет: {a} + {b} = ?</p>
            
             <Answer updatePoints={updatePoints} />

    </div>

    );
};

export default MathQuiz;
