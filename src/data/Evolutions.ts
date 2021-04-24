type Query = string | number;


export default class Evolutions {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    async chain(id: number) {
        return await this.get(`evolution-chain/${id}`);
    }

    async trigger(query: Query) {
        return await this.get(`evolution-trigger/${query}`);
    }
}