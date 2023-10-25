import PropTypes from 'prop-types';
import { ImageModal } from 'components/atoms/ImageModal/ImageModal';
import { useEffect } from 'react';
import styles from './Modal.module.css';

export const Modal = ({ src, alt, handleClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [handleClose]);
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

Modal.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  handleClose: PropTypes.func,
};
