import PropTypes from 'prop-types';
import styles from './ImageModal.module.css';

export const ImageModal = ({ src, alt }) => {
  return (
    <div className={styles.Modal}>
      <img src={src} alt={alt} width="100%" />
    </div>
  );
};

ImageModal.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
