const hamButton = document.querySelector('#hamburgerBtn');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


var lastModified = document.querySelector('#lastModified');
var dateLastModified = new Date(document.lastModified);

lastModified.innerHTML = 'Last Modification: ' + dateLastModified;






//  Spotlight advertisements for chamber members

const url2 = 'https://efficodex.github.io/wdd230/chamber/data/members.json';

const spotlight1 = document.querySelector('#spotlight1');
const spotlight2 = document.querySelector('#spotlight2');
const spotlight3 = document.querySelector('#spotlight3');

async function getMembersDataS() {
        const response = await fetch(url2); 
        const data = await response.json();
        console.log(data.companies);
        displayMembersS(data.companies);    
    }

getMembersDataS();


function displayMembersS(companies) {
    
    var noRepeatedItem = [];

    while (noRepeatedItem.length < 3) {
        var companiesLength = companies.length;
        var randomCompany = companies[Math.floor(Math.random() * companiesLength)];

        // Verifica si el nombre de la empresa ya está en el array noRepeatedItem
        var isRepeated = noRepeatedItem.some(item => item.name === randomCompany.name);

        // Si no está repetido, agrégalo al array
        if (!isRepeated) {
            noRepeatedItem.push(randomCompany);
        }
    }


    console.log(noRepeatedItem);
    var spotlightNumber = 1;

    noRepeatedItem.forEach(company => {
       const h3 = document.createElement("h3");
       const p1 = document.createElement("p");
       const p2 = document.createElement("p");

       h3.textContent = company.name;
       p1.textContent = company.address;
       p2.textContent = company.phone;

        const spotlightId = "spotlight" + spotlightNumber;
        const spotlightElement = document.getElementById(spotlightId);

        spotlightElement.appendChild(h3);
        spotlightElement.appendChild(p1);
        spotlightElement.appendChild(p2);
        
       spotlightNumber++;

    })
    

}

//weather Api

const currentTemp = document.querySelector ('#current-temp');
const weatherIcon = document.querySelector ('#weather-icon');
const captionDesc = document.querySelector ('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.04&lon=-77.02&units=imperial&appid=6ba33a6b5a98aa92151ac10ed19afe82'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('width','50');
    weatherIcon.setAttribute('height','50');
    captionDesc.textContent = `${desc}`;
}