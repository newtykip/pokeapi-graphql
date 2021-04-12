import axios from 'axios';

export default class PokeAPI {
    baseURL = 'https://pokeapi.co/api/v2';

    /**
     * Internal function to make API calls to PokeAPI.
     * @param {string} endpoint The endpoint to call
     * @returns The data from the API
     * @private
     */
    private async get(endpoint: string): Promise<any> {
        return (await axios.get(`${this.baseURL}/${endpoint}`)).data;
    }

    // Berries

    /**
     * Gets information about a specified berry.
     * @param {number} id The ID of the berry
     * @returns Data about the specified berry
     * @todo Request firmness, item, and giftType automatically from url when requested 
     */
    async getBerry(id: number): Promise<any> {
        const berry = await this.get(`berry/${id}`);
        
        return {
            id: berry.id,
            name: berry.name,
            growthTime: berry.growth_time,
            maxHarvest: berry.max_harvest,
            giftPower: berry.natural_gift_power,
            size: berry.size,
            smoothness: berry.smoothness,
            soilDryness: berry.soil_dryness,
            firmness: {
                name: berry.firmness.name,
                url: berry.firmness.url
            },
            flavours: berry.flavors,
            item: {
                name: berry.item.name,
                url: berry.item.url,
            },
            giftType: {
                name: berry.natural_gift_type.name,
                url: berry.natural_gift_type.url,
            },
        };
    }

    // todo: berry firmness

    // todo: berry flavours

    // Contests

    // todo: contest types

    // todo: contest effects

    // todo: super contest effects

    // Encounters

    // todo: encounter methods

    // todo: encounter conditions

    // todo: encounter condition values

    // Evolutions

    // todo: evolution chains

    // todo: evolution triggers

    // Games

    // todo: generations

    // todo: pokedexes

    // todo: version

    // todo: version groups

    // Items

    // todo: item

    // todo: item attributes

    // todo: item categories

    // todo: item fling effects
    
    // todo: item pockets

    // Locations

    // todo: locations

    // todo: location areas

    // todo: pal park areas

    // todo: regions

    // Machines

    // todo: machines

    // Moves

    // todo: moves

    // todo: moves ailments

    // todo: move battle styles

    // todo: move categories

    // todo: move damage classes
    
    // todo: move learn methods

    // todo: move targets

    // Pokemon

    // todo: abilities

    // todo: characteristics

    // todo: egg groups

    // todo: genders

    // todo: growth rates

    // todo: natures

    // todo: pokeathlon stats

    // todo: pokemon

    // todo: pokemon location areas

    // todo: pokemon colours

    // todo: pokemon forms

    // todo: pokemon habitats

    // todo: pokemon shapes

    // todo: pokemon species

    // todo: stats

    // todo: types
    
}