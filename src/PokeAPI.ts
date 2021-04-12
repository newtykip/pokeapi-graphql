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
}