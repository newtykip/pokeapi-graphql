import axios from "axios";
import Berries from "./data/Berries";
import Contests from "./data/Contests";
import Encounters from "./data/Encounters";
import Evolutions from "./data/Evolutions";
import Games from "./data/Games";
import Items from "./data/Items";
import Locations from "./data/Locations";
import Machines from "./data/Machines";
import Moves from "./data/Moves";
import Pokemon from "./data/Pokemon";

export default class PokeAPI {
    baseURL = "https://pokeapi.co/api/v2";
    berries: Berries;
    contests: Contests;
    encounters: Encounters;
    evolutions: Evolutions;
    games: Games;
    items: Items;
    locations: Locations;
    machines: Machines;
    moves: Moves;
    pokemon: Pokemon;

    constructor() {
        this.berries = new Berries(this.get);
        this.contests = new Contests(this.get);
        this.encounters = new Encounters(this.get);
        this.evolutions = new Evolutions(this.get);
        this.games = new Games(this.get);
        this.items = new Items(this.get);
        this.locations = new Locations(this.get);
        this.machines = new Machines(this.get);
        this.moves = new Moves(this.get);
        this.pokemon = new Pokemon(this.get);
    }

    /**
     * Internal function to make API calls to PokeAPI.
     * @param {string} endpoint The endpoint to call
     * @returns The data from the API
     * @private
     */
    private async get(endpoint: string): Promise<any> {
        return (await axios.get(`${this.baseURL}/${endpoint}`)).data;
    }
}
