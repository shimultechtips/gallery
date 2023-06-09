// array of images
const images = [
    'images/gallery0/01.png',    // index 0 --> images[0]
    'images/gallery0/02.png',    // index 1 --> images[1]
    'images/gallery0/03.png',    // index 2 --> images[2]
    'images/gallery0/04.png',    // index 3 --> images[3]
    'images/gallery0/05.png'     // index 4 --> images[4]
];
const firstImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;
// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {

    // get image tag
    const imageTag = document.getElementById('image');
    currentImage++; // 1
    if (currentImage >= lastImage) {
        currentImage = 4;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage + 1) + '/5';

});
// prev
const preBtn = document.getElementById('prev');
preBtn.addEventListener('click', () => {

    // get image tag
    const imageTag = document.getElementById('image');
    currentImage--; // 1
    if (currentImage <= firstImage) {
        currentImage = 0;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage + 1) + '/5';

});