const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];


fetch(endpoint)
.then(data=> data.json())
.then(data => cities.push(...data));

function findMatches(wordToMatch, cities)
{
    return cities.filter(place =>{
        // we need to match with what is searched
        const regex = new RegExp(wordToMatch,'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches(){
    const datas = findMatches(this.value,cities);
    const data = datas.map(place =>{
        const regex = new RegExp(this.value,'gi');
        const cityName = place.city.replace(regex,`<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex,`<span class="hl">${this.value}</span>`);
        return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
        </li>
        `;
    }).join(" ");
    // console.log(data);
    suggestions.innerHTML = data;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");


//  we will not use change event bcz it will work only when we gonna click outside.
// so we will use keyup as well
searchInput.addEventListener("change",displayMatches);
searchInput.addEventListener("keyup",displayMatches);
// console.log(searchInput);
// console.log(suggestions);

// console.log(...findMatches('bos',cities));
// console.log(cities);