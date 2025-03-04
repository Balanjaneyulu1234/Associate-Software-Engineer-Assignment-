// Array of image URLs
const images = [
    "https://assets.onecompiler.app/432m68dqc/43asp2zft/images%20(1).jpeg",
    "https://assets.onecompiler.app/432m68dqc/43asp2zft/images.jpeg",
    "https://assets.onecompiler.app/432m68dqc/43asnseje/800px-Instagram_logo_2022.svg.png",
    "https://assets.onecompiler.app/432m68dqc/43asnxhu5/free-twitter-logo-icon-2429-thumb.png"
];

let currentIndex = 0; // Current image index

// Function to update the image
function updateImage() {
    document.getElementById("sliderImage").src = images[currentIndex];
}

// Function for next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Function for previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Initialize the slider with the first image
window.onload = updateImage;
