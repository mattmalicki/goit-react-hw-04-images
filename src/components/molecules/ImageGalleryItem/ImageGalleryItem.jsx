import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ smallSrc, largeSrc, tags }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={smallSrc}
        data-large-image={largeSrc}
        alt={tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallSrc: PropTypes.string,
  largeSrc: PropTypes.string,
  tags: PropTypes.string,
};
