type Query = string | number;

export default class Encounters {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    async method(query: Query): Promise<any> {
        return await this.get(`encounter-method/${query}`);
    }

    async condition(query: Query): Promise<any> {
        return await this.get(`encounter-condition/${query}`);
    }

    async conditionValue(query: Query): Promise<any> {
        return await this.get(`encounter-condition-value/${query}`);
    }
}