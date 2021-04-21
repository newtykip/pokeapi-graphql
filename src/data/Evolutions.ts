export default class Evolutions {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    async chain(id: number) {
        const { baby_trigger_item, chain } = await this.get(`evolution-chain/${id}`);

        return {
            id,
            baby_trigger_item,
            chain,
        };
    }

    async trigger(query: string) {
        const { id, name, names, pokemon_species } = await this.get(`evolution-trigger/${query}`);

        return {
            id,
            name,
            names,
            pokemon_species,
        };
    }
}