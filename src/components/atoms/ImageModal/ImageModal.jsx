import styles from './ImageModal.module.css';

export const ImageModal = ({ src, alt }) => {
  return (
    <div className={styles.Modal}>
      <img src={src} alt={alt} />
    </div>
  );
};
