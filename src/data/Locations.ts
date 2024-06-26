export default class Locations {
    private get: (endpoint: string) => Promise<any>;

    constructor(getter: Get) {
        this.get = getter;
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
