import PokeAPI from "./PokeAPI";
const pokeAPI = new PokeAPI();
import { GraphQLScalarType, Kind } from "graphql";

type Args = {
    query: Query;
    [key: string]: any;
};

export default {
    Query: {
        berries: () => ({}),
        contests: () => ({}),
        encounters: () => ({}),
        evolutions: () => ({}),
        games: () => ({}),
        items: () => ({}),
        locations: () => ({}),
        machines: () => ({}),
        moves: () => ({}),
        pokemon: () => ({}),
    },

    Berries: {
        getBerry: async (_: any, args: Args) =>
            await pokeAPI.berries.berry(args.query),
        getFirmness: async (_: any, args: Args) =>
            await pokeAPI.berries.firmness(args.query),
        getFlavor: async (_: any, args: Args) =>
            await pokeAPI.berries.flavor(args.query),
    },

    Contests: {
        getType: async (_: any, args: Args) =>
            await pokeAPI.contests.type(args.query),
        getEffect: async (_: any, args: Args) =>
            await pokeAPI.contests.effect(args.id),
        getSuperEffect: async (_: any, args: Args) =>
            await pokeAPI.contests.superEffect(args.id),
    },

    Encounters: {
        getMethod: async (_: any, args: Args) =>
            await pokeAPI.encounters.method(args.query),
        getCondition: async (_: any, args: Args) =>
            await pokeAPI.encounters.condition(args.query),
        getConditionValue: async (_: any, args: Args) =>
            await pokeAPI.encounters.conditionValue(args.query),
    },

    Evolutions: {
        getChain: async (_: any, args: Args) =>
            await pokeAPI.evolutions.chain(args.id),
        getTrigger: async (_: any, args: Args) =>
            await pokeAPI.evolutions.trigger(args.query),
    },

    Games: {
        getGeneration: async (_: any, args: Args) =>
            await pokeAPI.games.generation(args.query),
        getPokedex: async (_: any, args: Args) =>
            await pokeAPI.games.pokedex(args.query),
        getVersion: async (_: any, args: Args) =>
            await pokeAPI.games.version(args.query),
        getVersionGroup: async (_: any, args: Args) =>
            await pokeAPI.games.versionGroup(args.query),
    },

    Items: {
        getItem: async (_: any, args: Args) =>
            await pokeAPI.items.item(args.query),
        getAttribute: async (_: any, args: Args) =>
            await pokeAPI.items.attribute(args.query),
        getCategory: async (_: any, args: Args) =>
            await pokeAPI.items.category(args.query),
        getFlingEffect: async (_: any, args: Args) =>
            await pokeAPI.items.flingEffect(args.query),
        getPocket: async (_: any, args: Args) =>
            await pokeAPI.items.pocket(args.query),
    },

    Locations: {
        getLocation: async (_: any, args: Args) =>
            await pokeAPI.locations.location(args.query),
        getLocationArea: async (_: any, args: Args) =>
            await pokeAPI.locations.locationArea(args.query),
        getPalParkArea: async (_: any, args: Args) =>
            await pokeAPI.locations.palParkArea(args.query),
        getRegion: async (_: any, args: Args) =>
            await pokeAPI.locations.region(args.query),
    },

    Machines: {
        getMachine: async (_: any, args: Args) =>
            await pokeAPI.machines.machine(args.id),
    },

    Moves: {
        getMove: async (_: any, args: Args) =>
            await pokeAPI.moves.move(args.query),
        getAilment: async (_: any, args: Args) =>
            await pokeAPI.moves.ailments(args.query),
        getBattleStyle: async (_: any, args: Args) =>
            await pokeAPI.moves.battleStyle(args.query),
        getCategory: async (_: any, args: Args) =>
            await pokeAPI.moves.category(args.query),
        getDamageClass: async (_: any, args: Args) =>
            await pokeAPI.moves.damageClass(args.query),
        getLearnMethod: async (_: any, args: Args) =>
            await pokeAPI.moves.learnMethod(args.query),
        getTarget: async (_: any, args: Args) =>
            await pokeAPI.moves.target(args.query),
    },

    Pokemon: {
        getAbility: async (_: any, args: Args) =>
            await pokeAPI.pokemon.ability(args.query),
        getCharacteristic: async (_: any, args: Args) =>
            await pokeAPI.pokemon.characteristic(args.id),
        getEggGroup: async (_: any, args: Args) =>
            await pokeAPI.pokemon.eggGroup(args.query),
        getGender: async (_: any, args: Args) =>
            await pokeAPI.pokemon.gender(args.query),
        getGrowthRate: async (_: any, args: Args) =>
            await pokeAPI.pokemon.growthRate(args.query),
        getNature: async (_: any, args: Args) =>
            await pokeAPI.pokemon.nature(args.query),
        getPokeathlonStat: async (_: any, args: Args) =>
            await pokeAPI.pokemon.pokeathlonStat(args.query),
        getPokemon: async (_: any, args: Args) =>
            await pokeAPI.pokemon.pokemon(args.query),
        getPokemonLocationAreas: async (_: any, args: Args) =>
            await pokeAPI.pokemon.locationAreas(args.query),
        getPokemonColor: async (_: any, args: Args) =>
            await pokeAPI.pokemon.color(args.query),
        getPokemonForm: async (_: any, args: Args) =>
            await pokeAPI.pokemon.form(args.query),
        getPokemonHabitat: async (_: any, args: Args) =>
            await pokeAPI.pokemon.habitat(args.query),
        getPokemonShape: async (_: any, args: Args) =>
            await pokeAPI.pokemon.shape(args.query),
        getPokemonSpecies: async (_: any, args: Args) =>
            await pokeAPI.pokemon.species(args.query),
        getStat: async (_: any, args: Args) =>
            await pokeAPI.pokemon.stat(args.query),
        getType: async (_: any, args: Args) =>
            await pokeAPI.pokemon.type(args.query),
    },

    // Custom Scalar Types
    QueryType: new GraphQLScalarType({
        name: "QueryType",
        description: "A String or an Int union type",

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
                case Kind.INT:
                    return parseInt(ast.value, 10);
                case Kind.STRING:
                    return ast.value;
                default:
                    throw new Error("Value must be either a String or an Int");
            }
        },
    }),
};
