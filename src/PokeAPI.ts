import axios from 'axios';
import Berries from './data/Berries';
import Contests from './data/Contests'; // todo
import Encounters from './data/Encounters'; // todo
import Evolutions from './data/Evolutions'; // todo
import Games from './data/Games'; // todo
import Items from './data/Items'; // todo
import Locations from './data/Locations'; // todo
import Machines from './data/Machines'; // todo
import Moves from './data/Moves'; // todo
import Pokemon from './data/Pokemon'; // todo

export default class PokeAPI {
    baseURL = 'https://pokeapi.co/api/v2';
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
        this.berries = new Berries(this.get, this.baseURL);
        this.contests = new Contests(this.get, this.baseURL);
        this.encounters = new Encounters(this.get, this.baseURL);
        this.evolutions = new Evolutions(this.get, this.baseURL);
        this.games = new Games(this.get, this.baseURL);
        this.items = new Items(this.get, this.baseURL);
        this.locations = new Locations(this.get, this.baseURL);
        this.machines = new Machines(this.get, this.baseURL);
        this.moves = new Moves(this.get, this.baseURL);
        this.pokemon = new Pokemon(this.get, this.baseURL);        
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