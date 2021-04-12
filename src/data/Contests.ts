export default class Contests {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    /**
     * Gets information about a specified contest type.
     * @description Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out Bulbapedia for greater detail.
     * @param {string} name The name of the contest type
     * @returns Info about the contest type
     */
    async contestType(name: string): Promise<any> {
        const { id, name: apiName, berry_flavor, names } = await this.get(`contest-type/${name}`);

        return {
            id,
            name: apiName,
            berryFlavor: berry_flavor,
            names
        };
    }

    // todo: contest effects

    // todo: super contest effects
}