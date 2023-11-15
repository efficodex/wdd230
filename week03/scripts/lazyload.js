var lastModified = document.querySelector('#lastModified');
var dateLastModified = new Date(document.lastModified);

lastModified.innerHTML = 'Last Modification: ' + dateLastModified;