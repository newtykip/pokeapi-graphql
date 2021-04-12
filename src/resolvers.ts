import PokeAPI from './PokeAPI';
const pokeAPI = new PokeAPI();

export default {
    Query: {
        berry: async (_, args) => await pokeAPI.berries.getBerry(args.name),
    },
};  