import PokeAPI from './PokeAPI';
const pokeAPI = new PokeAPI();
import { GraphQLScalarType, Kind } from 'graphql';

export default {
    Query: {
        berries: () => ({}),
        contests: () => ({}),
        encounters: () => ({}),
        evolutions: () => ({}),
        games: () => ({}),
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

    Games: {
        getGeneration: async (_, args) => await pokeAPI.games.generation(args.query),
    },

    // todo: Items

    // todo: Locations

    Machines: {
        getMachine: async (_, args) => await pokeAPI.machines.machine(args.id),
    },

    // todo: Moves

    // todo: Pokemon

    // Custom Scalar Types
    QueryType: new GraphQLScalarType({
        name: 'QueryType',
        description: 'A String or an Int union type',

        serialize(value) {
            if (typeof value !== "string" && typeof value !== "number") {
                throw new Error("Value must be either a String or an Int");
            }

            if (typeof value === "number" && !Number.isInteger(value)) {
                throw new Error("Number value must be an Int");
            }

            return value;
        },
        
        parseValue(value) {
            if (typeof value !== "string" && typeof value !== "number") {
                throw new Error("Value must be either a String or an Int");
            }
            
            if (typeof value === "number" && !Number.isInteger(value)) {
                throw new Error("Number value must be an Int");
            }

            return value;
        },

        parseLiteral(ast) {
            switch (ast.kind) {
                case Kind.INT: return parseInt(ast.value, 10);
                case Kind.STRING: return ast.value;
                default:
                    throw new Error("Value must be either a String or an Int");
                }
        }
    }),
};  