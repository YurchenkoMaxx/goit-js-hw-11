import { getImagesByQuery } from './pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
const formEl = document.querySelector('.form');
const userInput = document.querySelector('.input');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'title',
  captionDelay: 250,
  captionPosition: 'bottom',
});



export function handleFormSubmit(e) {
  e.preventDefault();
  const query = userInput.value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'Будь ласка, введіть запит',
      position: 'topRight',
      backgroundColor: 'rgb(255, 0, 34)',
      titleColor: 'white',
      messageColor: 'white',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      createGallery(images);
      lightbox.refresh();
    })
    .catch(error => {
      console.error('Помилка при завантаженні зображень:', error);
    })
    .finally(() => {
      hideLoader();
      userInput.value = '';
    });
}
  

function createGallery(images) {
  const markup = images.map(
    ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}" class="image-container" alt="${tags}">
          <img src="${webformatURL}"
               alt="${tags}"
               title="Likes: ${likes} | Views: ${views} | Comments: ${comments} | Downloads: ${downloads}" />
          <div class="info-overlay">
            <div class="info-item"><b>Likes</b>: ${likes}</div>
            <div class="info-item"><b>Views</b>: ${views}</div>
            <div class="info-item"><b>Comments</b>: ${comments}</div>
            <div class="info-item"><b>Downloads</b>: ${downloads}</div>
          </div>
        </a>
      </li>`
  ).join('');

  galleryEl.innerHTML = markup;
}



function clearGallery() {
    const galleryEl = document.querySelector('.gallery');
    galleryEl.innerHTML = '';
}

function showLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('is-visible');
}

function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.remove('is-visible');
}
