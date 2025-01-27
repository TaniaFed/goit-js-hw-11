// вся логікa роботи додаткa

import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js'

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
    event.preventDefault();

    const searchedQuery = event.currentTarget.elements.text_q.value.trim();
    
    if (searchedQuery === '') {
        iziToast.warning({
            title: 'Caution',
            message: 'Please, enter valid search requirements!',
        });

        return;
    }
    
    fetchPhotosByQuery(searchedQuery)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                galleryEl.innerHTML = '';

                searchFormEl.reset();

                return;
            }

            const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');
            
            galleryEl.innerHTML = galleryTemplate;
        })
        .catch(err => {
        console.log(err);
    });
};

// loader.style.display = 'block';
// gallery.innerHTML = '';

searchFormEl.addEventListener('submit', onSearchFormSubmit);

const lightbox = new SimpleLightbox('.gallery .js-gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(lightbox);







