import { getImagesByQuery } from './pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
const formEl = document.querySelector('.form');
const userInput = document.querySelector('.input');


formEl.addEventListener('submit', e => {
    e.preventDefault();
  
    const userValue = userInput.value.trim();
  
    if (userValue.length === 0) {
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
  
    getImagesByQuery(userValue).then(images => {
      createGallery(images);
      hideLoader();
  
    })
    .catch (error => {
      console.error('Помилка при завантаженні зображень:', error);
      hideLoader();
    });
  });
  

function createGallery(images) {
    galleryEl.innerHTML = images.map(
        ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">

          <img src="${webformatURL}"
          alt="${tags}"
          title="Likes: ${likes} | Views: ${views} | Comments: ${comments} | Downloads: ${downloads}"
          />
        </a>
      </li>`
    ).join('');




let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'title',
    captionDelay: 250,
    captionPosition: 'bottom',
    captionClass: ''
});

    lightbox.refresh();
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
