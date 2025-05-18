import Axios from 'axios';
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// *! ..................................................................................
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryEl = document.querySelector('.gallery');




// *! ..................................................................................





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

    getImagesByQuery(userValue).then(images => createGallery(images);
    hideLoader();

});

function getImagesByQuery(query) {
       
    return Axios.get("https://pixabay.com/api/", {
        params: {
            key: '50312672-6ff896f2a2c8f700d68e76dd9',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
        }
    }).then(res => {
        if (res.data.hits.length === 0) {
            iziToast.warning({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                backgroundColor: '#ef4040',
                titleColor: 'white',
                messageColor: 'white',
            });
            return [];
        }

        return res.data.hits.map(hit => {
            console.log('hit:', hit);
            return {
                webformatURL: hit.webformatURL,
                largeImageURL: hit.largeImageURL,
                tags: hit.tags,
                likes: hit.likes,
                views: hit.views,
                comments: hit.comments,
                downloads: hit.downloads
            }
});
        });
}

let lightbox;

function createGallery(images) {
    galleryEl.innerHTML = images.map(
        ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
        
          <img src="${webformatURL}"
          title="Likes: ${likes} | Views: ${views} | Comments: ${comments} | Downloads: ${downloads}"
          alt="${tags}"
          loading="lazy"
          />
        </a>
      </li>`
    ).join('');


    if (lightbox) lightbox.destroy();
    console.log(document.querySelector('.gallery a')?.getAttribute('data-caption'));

    lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'title',
        captionDelay: 250,
        captionPosition: 'bottom',
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












// export function getImagesByQuery(query) {
//     const BASE_URL = 'https://pixabay.com/api/';

//     const params = new URLSearchParams({
//         key: '50312672-6ff896f2a2c8f700d68e76dd9',
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',      

//     });

//     const url = `${BASE_URL}?${params}`
    
//     return fetch(url, {params}).then(res => res.json());
    
// }
// getImagesByQuery('flower');







// refs.formEl.addEventListener('submit', e => {
//     e.preventDefault();

//     const userValue = e.target.elements.query.value;
// })