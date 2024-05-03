export default class Encounters {
    private get: (endpoint: string) => Promise<any>;

    constructor(getter: Get) {
        this.get = getter;
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
