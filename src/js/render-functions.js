import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css"


export let markup = '';
export const refs = {
    form: document.querySelector('.form'),
    input: document.querySelector('.input'),
    button: document.querySelector('button'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
      loadMoreBtn: document.querySelector('.load-more-btn'),
};

export async function imagesTemplate(imagesObj) { 
    let markup = imagesObj.map(image => {
        return `<li class="gallery-item">
        <a class="gallery-link"
        href="${image.largeImageURL}">
        <image 
        width="360";
        height="200";
         class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"/>
        </a>
        <div class="gallery-card-container">
       <ul class="text-list">
     <li class="text-item">
       <p class="text-item-name"><strong>Likes:</strong></p>
       <p class="text-item-quantity">${image.likes}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Views</strong></p>
       <p class="text-item-quantity">${image.views}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Comments</strong></p>
       <p class="text-item-quantity">${image.comments}</p>
     </li>
     <li class="text-item">
       <p class="text-item-name"><strong>Downloads</strong></p>
       <p class="text-item-quantity">${image.downloads}</p>
     </li>
   </ul>
</div>
</li>`;
    })
        .join('');
    refs.gallery.insertAdjacentHTML('beforeend', markup);
}
// Ця функція показує завантажувач, видаляючи клас 'hidden' з елементу завантажувача (refs.loader)

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

// Ця функція приховує завантажувач, додаючи клас 'hidden' до елементу завантажувача (refs.loader).

export function hideLoader() {
  refs.loader.classList.add('hidden');
}

// Ця функція показує кнопку "Load More", видаляючи клас 'hidden' з елементу кнопки завантаження (refs.loadMoreBtn).
export function showLoadMore() {
  refs.loadMoreBtn.classList.remove('hidden');
}

// Ця функція приховує кнопку "Load More", додаючи клас 'hidden' до елементу кнопки завантаження (refs.loadMoreBtn).
export function hideLoadMore() {
  refs.loadMoreBtn.classList.add('hidden');
}

// Ця функція перевіряє, чи поточна сторінка (currentPage) перевищує або дорівнює максимальній сторінці (maxPage)
// export function checkEndPages(currentPage, maxPage, perPage) {
//   if (currentPage >= maxPage || data.hits.length < perPage) {
//     hideLoadMore();

//     if (maxPage) {
//       iziToast.info({
//         title: 'The end!',
//         message: "We're sorry, but you've reached the end of search results.",
//       });
//     }
//   } else {
//     showLoadMore();
//   }
// }
export function skipOldElement(x = 0, y = 0) {
  const liEl = refs.gallery.children[0];
  const height = liEl.getBoundingClientRect().height;

  window.scrollBy({
    top: height * 2,
    left: y,
    behavior: 'smooth',
  });
}