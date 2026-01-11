import CountryCard from './countryCard';
import styles from './countriesGrid.module.css';
import { type Country } from '../api/countries';

interface CountriesGridProps {
  countries: Country[];
}

const CountriesGrid = ({ countries }: CountriesGridProps) => {
  return (
    <div className={styles.grid}>
      {countries.map((country, index) => (
        <CountryCard
          key={`${index}`}
          name={country.name}
          capital={country.capital}
          population={country.population}
          flagUrl={country.flagUrl}
        />
      ))}
    </div>
  );
};

export default CountriesGrid;
