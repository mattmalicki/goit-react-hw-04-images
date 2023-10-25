import PropTypes from 'prop-types';
import styles from './FormSearch.module.css';

export const FormSearch = ({ onSubmit, children }) => {
  return (
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

FormSearch.propTypes = {
  onSubmit: PropTypes.func,
};
