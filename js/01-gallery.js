import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const ourGallery = document.querySelector('.gallery');
console.log(ourGallery);

const imgMarkup = createGalleryItemsMarkup(galleryItems);
ourGallery.insertAdjacentHTML('afterbegin', imgMarkup);

console.log(createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
               alt="${description}"
          />
         </a>
        </div >
    `;
    }).join('');

};






