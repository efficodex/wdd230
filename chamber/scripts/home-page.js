const hamButton = document.querySelector('#hamburgerBtn');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


var lastModified = document.querySelector('#lastModified');
var dateLastModified = new Date(document.lastModified);

lastModified.innerHTML = 'Last Modification: ' + dateLastModified;