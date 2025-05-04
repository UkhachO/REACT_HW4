import styles from "./CitySelector.module.css";

const CitySelector = ({ cities, onSelect }) => {

    return (

        <div className={styles.selector}>

            <h2>Выберите город:</h2>

            <select onChange={(e) => onSelect(e.target.value)}>

                <option value="">-- выбрать --</option>

                {cities.map((city, index) => (

                    <option key={index} value={city.name}>
                        {city.name}
                    </option>

                ))}

            </select>
        </div>

    )

}

export default CitySelector;