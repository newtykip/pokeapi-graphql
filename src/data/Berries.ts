export default class Berries {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    /**
     * Gets information about a specified berry.
     * @description Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out Bulbapedia for greater detail.
     * @param {string} query What to search
     * @returns Info about the specified berry
     */
     async berry(query: string): Promise<any> {
        const { id, name, growth_time, max_harvest, natural_gift_power: gift_power, size, smoothness, soil_dryness, firmness, flavors, item, natural_gift_type: gift_type } = await this.get(`berry/${query}`);
        
        return {
            id,
            name,
            growth_time,
            max_harvest,
            gift_power,
            size,
            smoothness,
            soil_dryness,
            firmness,
            flavors,
            item,
            gift_type,
        };
    }

    /**
     * Gets information about a berry firmness type. 
     * @description Berries can be soft or hard. Check out Bulbapedia for greater detail.
     * @param {string} query What to search
     * @returns Info about the berry firmness
     */
    async firmness(query: string): Promise<any> {
        const { id, name, berries, names } = await this.get(`berry-firmness/${query}`);

        return {
            id,
            name, 
            berries, 
            names
        };
    }

    /**
     * Gets information about berry flavors
     * @description Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature. Check out Bulbapedia for greater detail.
     * @param {string} query What to search
     * @returns Info about the berry flavor
     */
    async flavor(query: string): Promise<any> {
        const { id, name, berries, contest_type, names} = await this.get(`berry-flavor/${query}`);

        return { 
            id, 
            name, 
            berries,
            contest_type, 
            names 
        };
    }
}