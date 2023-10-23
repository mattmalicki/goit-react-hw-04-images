import styles from './ButtonLoader.module.css';

export const ButtonLoader = ({ onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      Load more
    </button>
  );
};
