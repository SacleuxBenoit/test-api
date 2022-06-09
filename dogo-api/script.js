async function start(){
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
        // console.log(data.message);
    createBreedList(data.message)
}

start()

function createBreedList(breedList){
    document.getElementById('breed').innerHTML = `
    <select onchange="loadByBreed(this.value)">
        <option>Choose a breed</option>
        ${Object.keys(breedList).map(function (breed){
            return `<option>${breed}</option>`
        }).join('')}
    </select>
    `
}

async function loadByBreed(breed){
    link_images = `https://dog.ceo/api/breed/${breed}/images/random/3`
    const response = await fetch(link_images);
    const data = await response.json();
    // console.log(data.message);
    document.getElementById('slide').innerHTML = 
        `
            <img src="${data.message[0]}">
            <img src="${data.message[1]}">
            <img src="${data.message[2]}">
        `
}