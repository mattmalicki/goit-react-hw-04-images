import PropTypes from 'prop-types';
import styles from './ButtonLoader.module.css';

export const ButtonLoader = ({ onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      Load more
    </button>
  );
};

ButtonLoader.propTypes = {
  onClick: PropTypes.func,
};
