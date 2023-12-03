const url = 'https://efficodex.github.io/wdd230/chamber/data/members.json';

const members = document.querySelector('#members');

async function getMembersData() {
        const response = await fetch(url); 
        const data = await response.json();
        console.log(data.companies);
        displayMembers(data.companies);    
    }

getMembersData();


const displayMembers = (companies) => {
    companies.forEach(company => {
        let section = document.createElement('section');

        let logo = document.createElement('img');
        let nameCompany = document.createElement('p');  
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let web = document.createElement('a');

        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `Logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('class', "directoryImg");
        section.setAttribute("class", "directory-section");
        nameCompany.setAttribute("class", "nameCompany")

        nameCompany.textContent = `${company.name}`;

        address.textContent = `${company.address}`;

        phone.textContent = `${company.phone}`;

        web.setAttribute('src', company.website);
        web.textContent = `${company.website}`;

        
        section.appendChild(logo);
        section.appendChild(nameCompany);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(web);

        members.appendChild(section);
     
    });
}
