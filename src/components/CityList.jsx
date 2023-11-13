import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";

function CityList() {
  const { cities, isLoadingCities } = useCities();

  if (isLoadingCities) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city, i) => (
        <CityItem key={i} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
