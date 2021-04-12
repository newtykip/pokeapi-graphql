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
     * @param {string} name The name of the berry
     * @returns Info about the specified berry
     */
     async getBerry(name: string): Promise<any> {
        const berry = await this.get(`berry/${name}`);
        
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
            flavors: berry.flavors,
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

    /**
     * Gets information about a berry firmness type. 
     * @description Berries can be soft or hard. Check out Bulbapedia for greater detail.
     * @param {string} name The berry firmness type
     * @returns Info about the berry firmness
     */
    async getFirmness(name: string): Promise<any> {
        const firmness = await this.get(`berry-firmness/${name}`);

        return {
            id: firmness.id,
            name: firmness.name,
            berries: firmness.berries,
            names: firmness.names,
        };
    }

    /**
     * Gets information about berry flavors
     * @description Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature. Check out Bulbapedia for greater detail.
     * @param {string} name The berry flavor
     * @returns Info about the berry flavor
     */
    async getFlavor(name: string): Promise<any> {
        const flavor = await this.get(`berry-flavor/${name}`);

        return {
            id: flavor.id,
            name: flavor.name,
            berries: flavor.berries,
            contestType: flavor.contest_type,
            names: flavor.names
        };
    }
}