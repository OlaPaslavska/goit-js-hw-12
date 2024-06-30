import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import {imagesTemplate, showLoader, hideLoader, showLoadMore, hideLoadMore, skipOldElement} from './js/render-functions';

  export const refs = {
    form: document.querySelector('.form'),
    input: document.querySelector('.input'),
    button: document.querySelector('button'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
      loadMoreBtn: document.querySelector('.load-more-btn'),
};

let inputValue = '';
let currentPage = 1;
let perPage = 15;
let maxPage = 1;


const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});


refs.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
     inputValue = refs.input.value.trim();
  currentPage = 1;

  hideLoadMore();
// Очищення галереї перед новими результатами
  if (inputValue === '') {
    refs.gallery.innerHTML = ' ';
    iziToast.warning({
      title: 'Warning',
      message: 'Please, enter the query.',
      backgroundColor: '#ef4040',
      layout: 2,
      position: 'topRight',
      displayMode: 'once',
    });
    refs.form.reset();
    return;
  }

  showLoader();

  refs.gallery.innerHTML = ' ';

  try {
    const data = await getImages(inputValue, currentPage, perPage);
    maxPage = Math.ceil(data.totalHits / perPage);
    if (maxPage === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        layout: 2,
        displayMode: 'once',
        backgroundColor: '#ef4040',
        progressBarColor: '#B51B1B',
        position: 'topRight',
      });
      refs.form.reset();
      hideLoader();
      return;
    }

    hideLoader();
    refs.form.reset();

    imagesTemplate(data.hits);
    lightbox.refresh();
    showLoadMore();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `${error}`,
      layout: 2,
      displayMode: 'once',
      backgroundColor: '#ef4040',
      progressBarColor: '#B51B1B',
      position: 'topRight',
    });
  }
});

refs.loadMoreBtn.addEventListener('click', async () => {
  hideLoadMore();
  showLoader();

  try {
    currentPage++;

      const data = await getImages(inputValue, currentPage, perPage);
      

      if (data.hits.length == 0 || currentPage >= maxPage) {
          
        iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topCenter',
        timeout: 5000
      });
      hideLoader();
      hideLoadMore();
      return;
    }
      imagesTemplate(data.hits);
      lightbox.refresh();
      hideLoader();
      showLoadMore();
      
    checkEndPages(currentPage, maxPage);
    skipOldElement();
  } catch (error) {
    refs.gallery.innerHTML = ' ';

    iziToast.error({
      title: 'Error',
      message: `${error}`,
      layout: 2,
      displayMode: 'once',
      backgroundColor: '#ef4040',
      progressBarColor: '#B51B1B',
      position: 'topRight',
    });
  }
});