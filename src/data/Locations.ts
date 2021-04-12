export default class Locations {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    // todo: locations

    // todo: location areas

    // todo: pal park areas

    // todo: regions
}