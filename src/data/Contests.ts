import fs from 'fs';

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
     * @param {string} query What to search
     * @returns Info about the contest type
     */
    async type(query: string): Promise<any> {
        const { id, name, berry_flavor, names } = await this.get(`contest-type/${query}`);

        return {
            id,
            name,
            berry_flavor,
            names,
        };
    }

    /**
     * Gets information about a specified contest effect.
     * @description Contest effects refer to the effects of moves when used in contests.
     * @param {number} id The ID of the contest effect
     * @returns Info about the contest effect
     */
    async effect(id: number): Promise<any> {
        const { appeal, jam, effect_entries, flavor_text_entries } = await this.get(`contest-effect/${id}`);

        return {
            id,
            appeal,
            jam,
            effect_entries,
            flavorTextEntries: flavor_text_entries,
        };
    }

    /**
     * Gets information about a specified super contest effect.
     * @description Super contest effects refer to the effects of moves when used in super contests.
     * @param {number} id The ID of the super contest effect
     * @returns Info about the super contest effect
     */
    async superEffect(id: number): Promise<any> {
        const { appeal, flavor_text_entries, moves } = await this.get(`super-contest-effect/${id}`);

        return {
            id,
            appeal,
            flavorTextEntries: flavor_text_entries,
            moves
        };
    }
}