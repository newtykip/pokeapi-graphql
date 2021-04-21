import PokeAPI from './PokeAPI';
const pokeAPI = new PokeAPI();

export default {
    Query: {
        berries: () => ({}),
        contests: () => ({}),
        encounters: () => ({}),
        evolutions: () => ({}),
        // todo: Games
        // todo: Items
        // todo: Locations
        machines: () => ({}),
        // todo: Moves
        // todo: Pokemon
    },
    
    Berries: {
        getBerry: async (_, args) => await pokeAPI.berries.berry(args.query),
        getFirmness: async (_, args) => await pokeAPI.berries.firmness(args.query),
        getFlavor: async (_, args) => await pokeAPI.berries.flavor(args.query),
    },

    Contests: {
        getType: async (_, args) => await pokeAPI.contests.type(args.query),
        getEffect: async (_, args) => await pokeAPI.contests.effect(args.id),
        getSuperEffect: async (_, args) => await pokeAPI.contests.superEffect(args.id),
    },

    Encounters: {
        getMethod: async (_, args) => await pokeAPI.encounters.method(args.query),
        getCondition: async (_, args) => await pokeAPI.encounters.condition(args.query),
        getConditionValue: async (_, args) => await pokeAPI.encounters.conditionValue(args.query),
    },

    Evolutions: {
        getChain: async (_, args) => await pokeAPI.evolutions.chain(args.id),
        getTrigger: async (_, args) => await pokeAPI.evolutions.trigger(args.query),
    },

    // todo: Games

    // todo: Items

    // todo: Locations

    Machines: {
        getMachine: async (_, args) => await pokeAPI.machines.machine(args.id),
    },

    // todo: Moves

    // todo: Pokemon
};  