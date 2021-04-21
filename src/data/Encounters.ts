export default class Encounters {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    /**
     * Gets information about a specified encounter method.
     * @description Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
     * @param {string} query What to search
     * @returns Info about the encounter method
     */
    async method(query: string): Promise<any> {
        const { id, name, order, names } = await this.get(`encounter-method/${query}`);

        return {
            id, 
            name,
            order,
            names,
        }
    }

    /**
     * Gets information about a specified encounter condition.
     * @description Conditions which affect what pokemon might appear in the wild, e.g., day or night.
     * @param {string} query What to search 
     * @returns Info about the encounter condition
     */
    async condition(query: string): Promise<any> {
        const { id, name, values, names } = await this.get(`encounter-condition/${query}`);

        return {
            id,
            name,
            values,
            names,
        };
    }

    /**
     * Gets information about a specified encounter condition value.
     * @description Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
     * @param {string} query What to search
     * @returns Info about the encounter condition value
     */
    async conditionValue(query: string): Promise<any> {
        const { id, name, condition, names } = await this.get(`encounter-condition-value/${query}`);

        return {
            id,
            name,
            condition,
            names,
        };
    }
}