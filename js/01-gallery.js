import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageList = document.querySelector(".gallery");

const imageListItem = galleryItems.map(({ preview, original, description }) =>

    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      
    />
  </a>
</div>`
).join('');


imageList.insertAdjacentHTML(`afterbegin`, imageListItem);
// // console.log(galleryItems);

imageList.addEventListener('click', showOrigin);

function showOrigin(event) {
  
  event.preventDefault();

  const modalWindow = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`);
  modalWindow.show();
};
