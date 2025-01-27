// функції для HTTP-запитів
 
export const fetchPhotosByQuery = searchedQuery => {

    const searchParams = new URLSearchParams({
        key: '48454112-2bb14e2eb4c862c9f6d932a5d',
        q: `${searchedQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: '9'
    });

    return fetch(
        `https://pixabay.com/api/?${searchParams}`).then(response => {
        if (!response.ok) {
             throw new Error(responce.status);
        } 
        return response.json();
    })
};



