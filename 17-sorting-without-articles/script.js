const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const regA = new RegExp("A ",'i');
const regAn = new RegExp("An ",'i'); 
const regThe = new RegExp("The ",'i'); 


function snipit (band) {
    band = band.replace(regA,'');
    band = band.replace(regAn,'');
    band = band.replace(regThe,'');
    return band;
}

const SortedIndex = bands.sort((a,b)=> (snipit(a)>snipit(b))?(1):(-1));

document.querySelector("#bands").innerHTML = `
        ${SortedIndex.map(band =>{
            return `<li>${band}</li>`;
        }).join(' ')}`;
console.table(SortedIndex);