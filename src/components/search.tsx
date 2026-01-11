import { useState, useEffect } from 'react';
import styles from './search.module.css';
import SearchIcon from '../assets/search';

interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceDelay?: number;
}

const Search = ({ 
  onSearch, 
  placeholder = 'Search a country', 
  debounceDelay = 500 
}:SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, debounceDelay);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, onSearch, debounceDelay]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
