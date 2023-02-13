// Unsplash API
const count = 10;
const apiKey = 'VNZpDoTQEUSPnq7HfA8iPtEp-lJmrw8DsdMANlMJBQQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from the Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data  = await response.json();
        console.log(data);
    } catch(error) {

    }
}

// On load
getPhotos();