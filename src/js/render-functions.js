import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'title',
  captionDelay: 250,
  captionPosition: 'bottom',
});

export function createGallery(images) {
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
      </li>`).join('');

  galleryEl.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}