let tyraFortiName = document.getElementById('tyraFortiName');
let tyraFortiDescription = document.getElementById('tyraFortiDescription');
let iconsAffixes = document.getElementById('icons');
async function start(){
    try{
        const response = await fetch("https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=fr");
        const data = await response.json();

        // display first Affixes
        tyraFortiName.textContent = data.affix_details[0].name;
        tyraFortiDescription.textContent = data.affix_details[0].description;
        tyraFortiName.textContent = data.affix_details[0].name;

        // display second Affixes 
        console.log(data.affix_details[3].description);
    }catch(e){
        console.log(e);
    } 
}

start();