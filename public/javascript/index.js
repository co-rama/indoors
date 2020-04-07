// Slideshow 
var imageDB = {
    image : ['1', '2', '3', '4'],
    slideIndex : 0
};

document.querySelector('#prev').addEventListener('click', slidePrev);
document.querySelector('#next').addEventListener('click', slideNext);

function slidePrev(){
    const prev = -1;
    showSlides(prev);

}

function slideNext(){
    const next = 1;
    console.log('Hello');
    showSlides(next);

}

function showSlides(slideNumber){
    let slideImage = document.querySelector("#slideshow-image");
    imageDB.slideIndex += slideNumber;
    let path = '../images/'
    console.log(imageDB.slideIndex);
    console.log(path);
    console.log(slideImage);

    if(imageDB.slideIndex >= imageDB.image.length){
        imageDB.slideIndex = 0;
        slideImage.src = path + `${imageDB.image[imageDB.slideIndex]}.png`;
    }else{
        slideImage.src = path + imageDB.image[imageDB.slideIndex] + '.png';
        console.log(slideImage.src);
    }
}
function log(){
    console.log('I work');
}