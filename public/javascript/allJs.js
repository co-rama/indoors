const pathToLogo = '../images/';
const logoFormat = '.jpg';

var logo = {
    image : 'silver'
}
var companyName = 'Smartfleek'

var title = document.querySelector('title');
title.textContent = companyName;

var head = document.querySelector('head');
var imagelogo = document.createElement('link');
imagelogo.setAttribute('rel', 'icon')
imagelogo.setAttribute('type', 'image/jpg');
imagelogo.setAttribute('href', pathToLogo +logo.image + logoFormat);

head.appendChild(imagelogo);

var allTitleTags = document.getElementsByClassName('title');
for(let i =0; i < allTitleTags.length; i++){
    allTitleTags[i].textContent = companyName;
}

document.querySelector('.title-categories').textContent = companyName + ' market';


