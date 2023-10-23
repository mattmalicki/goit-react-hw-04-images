import styles from './InputSearch.module.css';

export const InputSearch = () => {
  return (
    <input
      className={styles['SearchForm-input']}
      name="querry"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  );
};
