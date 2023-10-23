import styles from './ButtonSearch.module.css';

export const ButtonSearch = () => {
  return (
    <button className={styles['SearchForm-button']} type="submit">
      <span className={styles['SearchForm-button-label']}>Search</span>
    </button>
  );
};
