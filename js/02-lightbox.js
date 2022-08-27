import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";



const ourGallery = document.querySelector('.gallery');
const imgMarcup = addItemMarcup(galleryItems);
ourGallery.insertAdjacentHTML('afterbegin', imgMarcup);

function addItemMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    }).join('');
};
console.log(addItemMarcup(galleryItems));
console.log(ourGallery)


// ourGallery.addEventListener('click', onImgClick);

// function onImgClick(event) {
//     if (!event.target.classList.contains("gallery__image")) {
//         return;
//     };

//     console.log(event.target);
// }

const lightBox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', animationSpeed: 250 });