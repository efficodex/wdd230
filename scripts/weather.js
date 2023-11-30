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