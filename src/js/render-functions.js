// функції для відображення елементів інтерфейсу

export const createGalleryCardTemplate = imgInfo => {
    return`
        <li class='gallery-card'>
            <a class='gallery-link' href='${imgInfo.largeImageURL}'>
                <img class='gallery-img' src='${imgInfo.webformatURL}' alt='${imgInfo.id}' />
            </a>
        </li> `;
};




