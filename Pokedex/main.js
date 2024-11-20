const URL = "https://pokeapi.co/api/v2/pokemon/"

const searchInput = document.getElementById("search");
const pokedexContainer = document.getElementById("pokedex");


function showError(msg){
    pokedexContainer.innerHTML = `<p class"error>${msg}</p>`;
}

async function searchPokemon() {
    
    const searchPokemon = searchInput.value.toLowerCase();

    try {
        
        const response = await fetch(URL + searchPokemon)
       
        if (!response.ok) {
            showError(`No encontrado Pokemon   ${searchPokemon}`);
            return;

        }

        const data = await response.json();


        pokedexContainer.innerHTML = 
        `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}"></img>
        <p>Numero: ${data.id}</p>
        <p>Altura: ${data.height / 10}m</p>
        <p>Peso: ${data.weight / 10}kg</p></>
        <p>Experiencia Base: ${data.base_experience}xp<p>
    `;
    } catch (error) {
        console.error(error);
        showError("Error al buscar el Pokemon")
    }
}


document.getElementById("btn-search").addEventListener("click",searchPokemon);