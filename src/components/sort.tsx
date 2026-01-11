import { useState } from 'react';
import styles from './sort.module.css';

export type SortBy = 'name' | 'population';
export type SortOrder = 'asc' | 'desc';

interface SortProps {
  onSort: (sortBy: SortBy, sortOrder: SortOrder) => void;
}

const Sort = ({ onSort }: SortProps) => {
  const [sortBy, setSortBy] = useState<SortBy>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = e.target.value as SortBy;
    setSortBy(newSortBy);
    onSort(newSortBy, sortOrder);
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOrder = e.target.value as SortOrder;
    setSortOrder(newSortOrder);
    onSort(sortBy, newSortOrder);
  };

  return (
    <div className={styles.sortContainer}>
      <div className={styles.sortGroup}>
        <label htmlFor="sortBy" className={styles.label}>
          Sort by:
        </label>
        <select
          id="sortBy"
          className={styles.select}
          value={sortBy}
          onChange={handleSortByChange}
        >
          <option value="name">Name</option>
          <option value="population">Population</option>
        </select>
      </div>

      <div className={styles.sortGroup}>
        <label htmlFor="sortOrder" className={styles.label}>
          Order:
        </label>
        <select
          id="sortOrder"
          className={styles.select}
          value={sortOrder}
          onChange={handleOrderChange}
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
