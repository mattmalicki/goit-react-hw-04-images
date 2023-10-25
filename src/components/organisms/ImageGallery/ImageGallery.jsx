import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/molecules/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.ImageGallery} onClick={openModal}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            smallSrc={image.webformatURL}
            largeSrc={image.largeImageURL}
            tags={image.tags}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  openModal: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
};
