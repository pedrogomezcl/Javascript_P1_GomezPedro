const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon__image');

const form=document.querySelector('.form');
const input=document.querySelector('.input_search');
const buttonPrev = document.querySelector('-btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) =>{
    const respuestaAPI = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(respuestaAPI.status ==200){
        const data = await respuestaAPI.json();
        return data;
    }
}

const renderPokemon = async (pokemon) =>{
    pokemonName.innerHTML='Loading ...';
    pokemonName.innerHTML='';

    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImage.style.display='block';
        pokemonName.innerHTML=data['name'];
        pokemonNumber.innerHTML=data['id'];
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        console.log(data);
    }
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})