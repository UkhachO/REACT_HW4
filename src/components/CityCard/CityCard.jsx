import styles from "./CityCard.module.css";

const CityCard = ({ city }) => {

    if (!city) return null;

    return (

        <div className={styles.card}>

             <h2>{city.name}</h2>

             <img src={city.imageUrl} alt={city.name} className={styles.image} />

             <p>{city.description}</p>

             <h3>Интересные факты:</h3>

            <ul>

                {city.facts.map((fact, index) => (

                    <li key={index}>{fact}</li>

                ))}

             </ul>

        </div>
        
    )

}

export default CityCard;