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
            names,
        };
    }

    /**
     * Gets information about a specified contest effect.
     * @description Contest effects refer to the effects of moves when used in contests.
     * @param {number} id The ID of the contest effect
     * @returns Info about the contest effect
     */
    async contestEffect(id: number): Promise<any> {
        const { appeal, jam, effect_entries: effectEntries, flavor_text_entries: flavorTextEntries } = await this.get(`contest-effect/${id}`);
    
        return {
            id,
            appeal,
            jam,
            effectEntries,
            flavorTextEntries
        };
    }

    /**
     * Gets information about a specified super contest effect.
     * @description Super contest effects refer to the effects of moves when used in super contests.
     * @param {number} id The ID of the super contest effect
     * @returns Info about the super contest effect
     */
    async superContestEffect(id: number): Promise<any> {
        const { appeal, flavor_text_entries: flavorTextEntries, moves } = await this.get(`super-contest-effect/${id}`);

        return {
            id,
            appeal,
            flavorTextEntries,
            moves
        };
    }
}