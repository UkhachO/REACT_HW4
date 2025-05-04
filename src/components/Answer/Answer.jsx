import { useState } from "react";

import styles from "./Answer.module.css";

const Answer = ({ updatePoints }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePoints(answer);
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Ваш ответ"
      />
      <button type="submit">Проверить</button>
    </form>
  );
};

export default Answer;