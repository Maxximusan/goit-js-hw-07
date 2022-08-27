import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const ourGallery = document.querySelector('.gallery');
console.log(ourGallery);

const imgMarkup = createGalleryItemsMarkup(galleryItems);
console.log(createGalleryItemsMarkup(galleryItems));

ourGallery.insertAdjacentHTML('afterbegin', imgMarkup);

ourGallery.addEventListener('click', onImgClick)


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


function onImgClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;
    };

    console.log(event.target);


    const bigImg = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img class="modal "src="${bigImg}" width="800" height="600">`);

    instance.show();


    console.log(event);

    window.addEventListener('keydown', onEscape);
    function onEscape(event) {
        if (event.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscape);
        }
    }

};



