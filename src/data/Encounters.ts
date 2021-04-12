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
     * @param {string} name The name of the encounter method
     * @returns Info about the encounter method
     */
    async encounterMethod(name: string): Promise<any> {
        const { id, name: apiName, order, names } = await this.get(`encounter-method/${name}`);

        return {
            id, 
            name: apiName,
            order,
            names,
        }
    }

    /**
     * Gets information about a specified encounter condition.
     * @description Conditions which affect what pokemon might appear in the wild, e.g., day or night.
     * @param {string} name The name of the encounter condition 
     * @returns Info about the encounter condition
     */
    async encounterCondition(name: string): Promise<any> {
        const { id, name: apiName, values, names } = await this.get(`encounter-condition/${name}`);

        return {
            id,
            name: apiName,
            values,
            names,
        };
    }

    /**
     * Gets information about a specified encounter condition value.
     * @description Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
     * @param {string} name The name of the encounter condition value
     * @returns Info about the encounter condition value
     */
    async encounterConditionValue(name: string): Promise<any> {
        const { id, name: apiName, condition, names } = await this.get(`encounter-condition-value/${name}`);

        return {
            id,
            name: apiName,
            condition,
            names,
        };
    }
}