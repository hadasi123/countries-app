import { populationString } from '../utils/populationString';
import styles from './countryCard.module.css';
import { type Country } from '../api/countries';

const CountryCard = ({ name, capital, population, flagUrl }: Country) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={flagUrl} alt={`${name} flag`} className={styles.flag} />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.info}>Capital: {capital}</p>
        <p className={styles.info}>Population: {populationString(population)}</p>
      </div>
    </div>
  );
};

export default CountryCard;
