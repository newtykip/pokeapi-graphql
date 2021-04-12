import PokeAPI from './PokeAPI';
const pokeAPI = new PokeAPI();

export default {
    Query: {
        berry: async (_, args) => await pokeAPI.berries.getBerry(args.name),
        berryFirmness: async (_, args) => await pokeAPI.berries.getFirmness(args.name),
        berryFlavor: async (_, args) => await pokeAPI.berries.getFlavor(args.name),
    },
};  