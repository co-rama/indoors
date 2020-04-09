// Slideshow
var imageDB = {
    image : ['man', 'leathershoe', 'couple', 'simple', 'watch', 'silver'],
    slideIndex : 0
};
const path = '../images/';
const jpg = '.jpg';

document.querySelector("#prev").addEventListener('click', slidePrev);
document.querySelector('#next').addEventListener('click', slideNext);



function slidePrev(){
    const prev = -1;
    showSlides(prev);

}

function slideNext(){
    const next = 1;
    showSlides(next);

}

function showSlides(slideNumber){
    var slideImage = document.querySelector("#slideshow-image");
    imageDB.slideIndex += slideNumber;
    if(imageDB.slideIndex >= imageDB.image.length){
        imageDB.slideIndex = 0;
        slideImage.src = path + `${imageDB.image[imageDB.slideIndex]}.jpg`;
    }else if(imageDB.slideIndex < 0){
        imageDB.slideIndex = (imageDB.image.length - 1);
        slideImage.src = path + `${imageDB.image[imageDB.slideIndex]}.jpg`;   
    }
    else{
        slideImage.src = path + imageDB.image[imageDB.slideIndex] + '.jpg';
    }
}

// setInterval(()=>{
//     slideNext();
// }, 5000)

/*
**FLEEK IMAGES
*/
function fleekImage(){
    var fleekSectionDiv = document.getElementById('fleek-section');
    for(let i = 0; i < imageDB.image.length; i++){
        var fleek = document.createElement('div');
        var image = document.createElement('img');  
        fleek.setAttribute('class', 'fleeks');
        image.setAttribute('src', path + imageDB.image[i] + jpg);
        fleek.appendChild(image);
        fleekSectionDiv.appendChild(fleek);
    }
}

fleekImage();