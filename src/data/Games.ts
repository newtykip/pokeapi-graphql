export default class Games {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    // todo: generations

    // todo: pokedexes

    // todo: version

    // todo: version groups
}