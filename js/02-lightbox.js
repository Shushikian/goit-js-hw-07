import { galleryItems } from './gallery-items.js';
// Change code below this line


const imageList = document.querySelector('.gallery')

const imageListItem = galleryItems.map(({ preview, original, description }) =>
  `<div class="gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`
).join('');

imageList.insertAdjacentHTML('beforeend', imageListItem);

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt',
captionDelay: 250 });
