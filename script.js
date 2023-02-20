const imgContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');
let photosArray = []; 

let ready = false;
let imgsLoaded = 0;
let totalImgs = 0;

// Unsplash API
const count = 30;
const apiKey = 'VNZpDoTQEUSPnq7HfA8iPtEp-lJmrw8DsdMANlMJBQQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all imgs were loaded
function imgLoaded() {

}

// Helper Function to set attributes on DOM Elements

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for links and Photos, add to DOM
function displayPhotos() {
    // Run function for each element in photosArray
    photosArray.forEach((photo) => {
        // creating an <a> to link to unsplash
        const item = document.createElement('a');

        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // create <img> for photo
        const img = document.createElement('img');

        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Event Listener, check when each  is finished loading
        img.addEventListener('load', imgLoaded);
        // put <img> inside <a> then put both inside imgContainer Element
        item.appendChild(img);
        imgContainer.appendChild(item);
    });
}

// Get photos from the Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
       
    } catch(error) {

    }
}

// Check to see if Scrolling near bottom of page and load more photos
window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();
    }
});

// On load
getPhotos();