import { useState, useMemo, useEffect } from 'react';
import { fetchAllCountries, type Country } from '../api/countries';
import { type SortBy, type SortOrder } from '../components/sort';

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    const loadCountries = async () => {
      try {
        setLoading(true);
        const data = await fetchAllCountries();
        setCountries(data);
        setError(null);
      } catch (err) {
        setError('Failed to load countries');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSort = (newSortBy: SortBy, newSortOrder: SortOrder) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  };

  const filteredCountries = useMemo(() => {
    return countries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [countries, searchQuery]);

  const filteredAndSortedCountries = useMemo(() => {
    return [...filteredCountries].sort((a, b) => {
      if (sortBy === 'name') {
        const comparison = a.name.localeCompare(b.name);
        return sortOrder === 'asc' ? comparison : -comparison;
      } else {
        const comparison = a.population - b.population;
        return sortOrder === 'asc' ? comparison : -comparison;
      }
    });
  }, [filteredCountries, sortBy, sortOrder]);

  return {
    countries: filteredAndSortedCountries,
    loading,
    error,
    handleSearch,
    handleSort,
  };
};
