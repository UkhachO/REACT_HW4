import styles from "./CityCard.module.css";

const CityCard = ({ name, description, imageUrl, facts }) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt={name} className={styles.image} />
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityCard;
