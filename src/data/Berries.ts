type Query = string | number;

export default class Berries {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

     async berry(query: Query): Promise<any> {
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

    async firmness(query: Query): Promise<any> {
        return await this.get(`berry-firmness/${query}`);
    }

    async flavor(query: Query): Promise<any> {
        return await this.get(`berry-flavor/${query}`);
    }
}