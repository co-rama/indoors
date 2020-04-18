// Slideshow
var imageDB = {
    image : ['man', 'leathershoe', 'couple', 'simple', 'watch', 'silver'],
    slideIndex : 0
};
const path = '../images/';
const jpg = '.jpg';


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
