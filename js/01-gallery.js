import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1
const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`).join("");
gallery.insertAdjacentHTML('beforeend', markup); 


function onClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    };

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
    instance.show()

    gallery.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    })
} 

gallery.addEventListener("click", onClick)

