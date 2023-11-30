const baseURL = "https://efficodex.github.io/wdd230/";

const linksURL = "https://efficodex.github.io/wdd230/data/links.json";


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data.weeks);
    displayLinks(data.weeks);
  }
  
  getLinks();

  function displayLinks(weeks) {
    const ulElement = document.querySelector('#ulWeek');

    weeks.forEach((weekObj, index) => {
        const liElement = document.createElement('li');
        const aElement = document.createElement('a');
        const weekNumber = index + 1; // Adding 1 because week numbers usually start from 1

        aElement.textContent = weekObj.week;
        aElement.href = '#' + weekNumber; // You can customize the href as needed

        liElement.id = 'numberWeek';
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
        aElement.classList = 'modeGlow';

        // Create and append sub-list for links
        if (weekObj.links && weekObj.links.length > 0) {
            const subList = document.createElement('ul');
            weekObj.links.forEach(linkObj => {
                const subListItem = document.createElement('li');
                const subListLink = document.createElement('a');
                subListLink.href = baseURL + linkObj.url;
                subListLink.textContent = linkObj.title;

                subListItem.appendChild(subListLink);
                subList.appendChild(subListItem);
            });

            // Append sub-list to the main list item
            liElement.appendChild(subList);
        }
    });
}
