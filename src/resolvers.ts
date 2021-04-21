import PokeAPI from './PokeAPI';
const pokeAPI = new PokeAPI();

export default {
    Query: {
        // Berries
        berry: async (_, args) => await pokeAPI.berries.berry(args.query),
        berryFirmness: async (_, args) => await pokeAPI.berries.firmness(args.query),
        berryFlavor: async (_, args) => await pokeAPI.berries.flavor(args.query),

        // Contests
        contestType: async (_, args) => await pokeAPI.contests.type(args.query),
        contestEffect: async (_, args) => await pokeAPI.contests.effect(args.id),
        superContestEffect: async (_, args) => await pokeAPI.contests.superEffect(args.id),

        // Encounters
        encounterMethod: async (_, args) => await pokeAPI.encounters.method(args.query),
        encounterCondition: async (_, args) => await pokeAPI.encounters.condition(args.query),
        encounterConditionValue: async (_, args) => await pokeAPI.encounters.conditionValue(args.query),

        // Evolutions
        evolutionChain: async (_, args) => await pokeAPI.evolutions.chain(args.id),
        evolutionTrigger: async (_, args) => await pokeAPI.evolutions.trigger(args.query),

        // todo: Games

        // todo: Items

        // todo: Locations

        // Machines
        machine: async (_, args) => await pokeAPI.machines.machine(args.id),

        // todo: Moves

        // todo: Pokemon
    },
};  