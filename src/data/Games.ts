type Query = string | number;

export default class Games {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    async generation(query: Query): Promise<any> {
        return await this.get(`generation/${query}`);
    }

    // todo: pokedexes

    // todo: version

    // todo: version groups
}