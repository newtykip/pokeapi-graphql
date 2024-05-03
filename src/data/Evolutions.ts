export default class Evolutions {
    private get: (endpoint: string) => Promise<any>;

    constructor(getter: Get) {
        this.get = getter;
    }

    async chain(id: number) {
        return await this.get(`evolution-chain/${id}`);
    }

    async trigger(query: Query) {
        return await this.get(`evolution-trigger/${query}`);
    }
}
