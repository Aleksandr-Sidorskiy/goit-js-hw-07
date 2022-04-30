import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const addGalleryItems = document.querySelector('.gallery');//поиск класса в HTML
const galleryMarkup = createGallereyCard(galleryItems);//ссылка на createGallereyCard
addGalleryItems.insertAdjacentHTML("beforeend", galleryMarkup);//добавление елементов
// Реализация делегирования на div.gallery и получение url большого изображения.
addGalleryItems.addEventListener("click", handGalleryClick);

// создание шаблоной разметки
function createGallereyCard(galleryItems) {
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
</div>
    `;
    })
        .join(''); 
}

function handGalleryClick(event) {
    const isGalleryEl = event.target.classList.contains('.gallery__item');
    
    if (isGalleryEl) {
        return ;
    }
 
  return  event.target.dataset.original;
    
}
