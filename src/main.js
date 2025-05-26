import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const query = inputEl.value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'Будь ласка, введіть запит',
      position: 'topRight',
      backgroundColor: '#ef4040',
      titleColor: 'white',
      messageColor: 'white',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      if (images.length > 0) {
        createGallery(images);
      }
    })
    .catch(error => {
      console.error('Помилка при завантаженні зображень:', error);
      iziToast.error({
        message: 'Виникла помилка при завантаженні. Спробуйте ще раз.',
        position: 'topRight',
        backgroundColor: '#ef4040',
        titleColor: 'white',
        messageColor: 'white',
      });
    })
    .finally(() => {
      hideLoader();
      inputEl.value = '';
    });
}