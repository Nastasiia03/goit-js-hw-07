import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery2 = document.querySelector(".gallery");
const markup2 = galleryItems.map(({ preview, original, description }) => `<li><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`).join("");
gallery2.insertAdjacentHTML('beforeend', markup2);

console.log(SimpleLightbox)

   const lightbox = new SimpleLightbox(".gallery a", {captionsData: "alt", captionDelay: 250}); 
    lightbox.on('show.simplelightbox', () => {
        const link = document.querySelectorAll(".gallery__item");
        link.map((evt)=> `<img src="${link.getAttribute("href")}" alt="" width="800", height="600"/>`)
        
    });

