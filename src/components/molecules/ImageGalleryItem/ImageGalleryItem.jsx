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
