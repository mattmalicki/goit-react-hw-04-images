import axios from 'axios';
import { Notify } from 'notiflix';

import { Modal } from 'components/organisms/Modal/Modal';
import { Searchbar } from 'components/organisms/Searchbar/Searchbar';
import { ImageGallery } from 'components/organisms/ImageGallery/ImageGallery';
import { Loader } from 'components/atoms/Loader/Loader';
import { ButtonLoader } from 'components/atoms/ButtonLoader/ButtonLoader';

import { useEffect, useRef, useState } from 'react';

import styles from './App.module.css';

export const App = () => {
  const API_KEY = '38855458-8cac518777b782fa6e9540f58';
  const API_URL = 'https://pixabay.com/api/';
  const API_PER_PAGE = 12;
  const API_IMAGE_TYPE = 'photo';
  const API_ORIENTATION = 'horizontal';
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  let currentPage = useRef(1);
  let currentQuery = useRef('popular');
  let totalHits = useRef(0);
  const [modal, setModal] = useState({ open: false, src: '', tags: '' });

  const handleLoadMore = () => {
    currentPage.current++;
    setIsLoading(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    currentPage.current = 1;
    form.querry.value === ''
      ? (currentQuery.current = 'popular')
      : (currentQuery.current = form.querry.value);
    setImages([]);
    setIsLoading(true);
  };

  const handleOpenModal = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }

    const image = event.target;
    setModal({ open: true, src: image.dataset.largeImage, tags: image.alt });
  };

  const handleCloseModal = event => {
    if (event.target.id === 'modal' || event.key === 'Escape') {
      setModal({ open: false, src: '', tags: '' });
    }
  };

  const getImages = async () => {
    try {
      const respond = await axios.get(API_URL, {
        params: {
          key: API_KEY,
          orientation: API_ORIENTATION,
          image_type: API_IMAGE_TYPE,
          per_page: API_PER_PAGE,
          q: currentQuery.current.split(' ').join('+'),
          page: currentPage.current,
        },
      });
      const apiImages = await respond.data;
      if (apiImages.hits.length === 0) {
        new Notify.failure('Sorry, no images found', { clickToClose: true });
        currentPage.current = 1;
        return;
      }
      const addedImages = images.concat(apiImages.hits);
      setImages(addedImages);
      totalHits.current = apiImages.totalHits;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoading && getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSubmit} />
      {error && <p>Something went wrong: {error.message}</p>}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {images.length !== 0 && images.length !== totalHits.current && (
        <ButtonLoader onClick={handleLoadMore} />
      )}
      {modal.open && (
        <Modal src={modal.src} alt={modal.alt} handleClose={handleCloseModal} />
      )}
    </div>
  );
};
