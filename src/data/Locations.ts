type Query = string | number;

export default class Locations {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    async location(query: Query): Promise<any> {
        return await this.get(`location/${query}`);
    }

    async locationArea(query: Query): Promise<any> {
        return await this.get(`location-area/${query}`);
    }

    async palParkArea(query: Query): Promise<any> {
        return await this.get(`pal-park-area/${query}`);
    }

    async region(query: Query): Promise<any> {
        return await this.get(`region/${query}`);
    }
}