import { ImageModal } from 'components/atoms/ImageModal/ImageModal';
import { useEffect } from 'react';
import styles from './Modal.module.css';

export const Modal = (modal, handleClose) => {
  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, []);
  return (
    <div
      id="modal"
      className={styles.Overlay}
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      {console.log(modal)}
      <ImageModal src={modal.src} alt={modal.alt} />
    </div>
  );
};
