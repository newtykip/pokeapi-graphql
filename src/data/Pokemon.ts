export default class Pokemon {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    // todo: abilities

    // todo: characteristics

    // todo: egg groups

    // todo: genders

    // todo: growth rates

    // todo: natures

    // todo: pokeathlon stats

    // todo: pokemon

    // todo: pokemon location areas

    // todo: pokemon colours

    // todo: pokemon forms

    // todo: pokemon habitats

    // todo: pokemon shapes

    // todo: pokemon species

    // todo: stats

    // todo: types
}