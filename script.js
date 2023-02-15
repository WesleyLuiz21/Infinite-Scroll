const imgContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');
let photosArray = [];


// Unsplash API
const count = 10;
const apiKey = 'VNZpDoTQEUSPnq7HfA8iPtEp-lJmrw8DsdMANlMJBQQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

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
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
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

// On load
getPhotos();