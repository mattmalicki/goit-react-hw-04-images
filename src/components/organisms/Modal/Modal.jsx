import { ImageModal } from 'components/atoms/ImageModal/ImageModal';
import { useEffect } from 'react';
import styles from './Modal.module.css';

export const Modal = (src, alt, handleClose) => {
  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', close);
    };
  }, []);
  return (
    <div
      id="modal"
      className={styles.Overlay}
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <ImageModal src={src} alt={alt} />
    </div>
  );
};
