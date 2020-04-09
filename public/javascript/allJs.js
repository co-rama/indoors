var companyName = 'Smartfleek'

document.querySelector('title').textContent = companyName;
var allTitleTags = document.getElementsByClassName('title');
for(let i =0; i < allTitleTags.length; i++){
    allTitleTags[i].textContent = companyName;
}

document.querySelector('.title-categories').textContent = companyName + ' market';
