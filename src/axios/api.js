import axios from "axios";

const remote = axios.create();

const fetchPokemon = async (nextUrl) => {
  const baseURL = nextUrl ? nextUrl : "https://pokeapi.co/api/v2/pokemon";
  const response = await remote.get(baseURL);
  return response.data;
};

const fetchPokemonDetail = async (name) => {
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
  const response = await remote.get(baseURL);
  const responseSpecies = await remote.get(speciesURL);
  console.log('Pokemon : ', response);
  console.log('Pokemon Species : ', responseSpecies);
  const data = response.data;
  const species = responseSpecies.data;

  return {
    id: data.id,
    color: species.color.name,
    name: data.name,
    nameKo: species.names.find(item => item.language.name === 'ko')?.name ?? data.name,
    height: data.height / 10,
    weight: data.weight / 10,
    types: data.types.map(item => item.type.name),
    images: {
      front_default: data.sprites.front_default,
      dream_world: data.sprites.other.dream_world.front_default,
      // official_artwork: data.other.["official-artwork"].front_default,
    },
    stats: data.stats.map(item => {
      return {
        name: item.stat.name,
        value: item.base_stat
      }
    })
  };
};

export { fetchPokemon, fetchPokemonDetail };
