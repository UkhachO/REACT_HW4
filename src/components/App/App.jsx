import { useState } from "react";

import CitySelector from "../CitySelector/CitySelector.jsx";
import CityCard from "../CityCard/CityCard.jsx";
import citiesData from "../Data/citiesData";
import MathQuiz from "../MathQuiz/MathQuiz.jsx";

import styles from "./App.module.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSelect = (cityName) => {
    const foundCity = citiesData.find((city) => city.name === cityName);
    setSelectedCity(foundCity || null);
  };

  return (
    <>
      <div className={styles.container}>
        <CitySelector cities={citiesData} onSelect={handleSelect} />

        {selectedCity && (
          <CityCard
            name={selectedCity.name}
            description={selectedCity.description}
            imageUrl={selectedCity.imageUrl}
            facts={selectedCity.facts}
          />
        )}
      </div>

      <div className="MathApp">
        <MathQuiz />
      </div>
    </>
  );
}

export default App;
