let currentImageIndex = 0;
const images = document.querySelectorAll('.slideshow img');

function switchImage(){
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');


}

setInterval(switchImage, 5000);