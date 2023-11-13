import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img src={`https://flagsapi.com/${country.emoji}/flat/48.png`} />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
