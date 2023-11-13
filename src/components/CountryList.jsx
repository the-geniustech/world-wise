import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";

function CountryList() {
  const { cities, isLoadingCities } = useCities();
  const countries = cities.reduce(
    (countriesArr, city) =>
      !countriesArr.map((country) => country.country).includes(city.country)
        ? [...countriesArr, { country: city.country, emoji: city.emoji }]
        : countriesArr,
    []
  );

  if (isLoadingCities) return <Spinner />;

  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem key={i} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
