export default class Berries {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    /**
     * Gets information about a specified berry.
     * @param {string} name The name of the berry
     * @returns Data about the specified berry
     * @todo Request firmness, item, and giftType automatically from url when requested 
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
}