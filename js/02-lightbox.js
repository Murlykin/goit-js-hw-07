import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML(
  "beforeend",
  galleryItems
    .map(
      (galleryItem) =>
        `<div class="gallery__item">
          <a class="gallery__item" href="${galleryItem.original}">
          <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
          </a></div>`
    )
    .join("")
);

galleryRef.addEventListener("click", activateLightbox);

function activateLightbox(e) {
  e.preventDefault();

  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 0.9,
    animationSpeed: 300,
    fadeSpeed: 300,
    scrollZoom: false,
  });
}
