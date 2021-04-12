import PokeAPI from './PokeAPI';
const pokeAPI = new PokeAPI();

export default {
    Query: {
        // Berries
        berry: async (_, args) => await pokeAPI.berries.getBerry(args.name),
        berryFirmness: async (_, args) => await pokeAPI.berries.getFirmness(args.name),
        berryFlavor: async (_, args) => await pokeAPI.berries.getFlavor(args.name),

        // Contests
        contestType: async (_, args) => await pokeAPI.contests.contestType(args.name),
        contestEffect: async (_, args) => await pokeAPI.contests.contestEffect(args.id),
        superContestEffect: async (_, args) => await pokeAPI.contests.superContestEffect(args.id),
    },
};  