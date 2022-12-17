import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery2 = document.querySelector(".gallery");
const markup2 = galleryItems.map(({ preview, original, description }) => `<li><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`).join("");
gallery2.insertAdjacentHTML('beforeend', markup2);

console.log(SimpleLightbox)
// const lightbox = $(".gallery").simpleLightbox(); 
// lightbox.on('show.simplelightbox', () => {
//     const link = document.querySelector(".gallery__item");
//     const image = document.createElement("img");
//     image.src = `${link.getAttribute("href")}`;
// });
    
gallery2.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return 
    }
});



// function onClick2(evt) {
//     evt.preventDefault();
//     if (evt.target.nodeName !== "IMG") {
//         return 
//     }
//     console.log(evt)

//     const lightbox = new SimpleLightbox(".gallery"); 
//     lightbox.on('show.simplelightbox', () => {
//         const link = document.querySelector(".gallery__item");
//         `<img src="${link.getAttribute("href")}" alt="" width="800", height="600"></a>`
//     });
// }

// gallery2.addEventListener("click", onClick2)