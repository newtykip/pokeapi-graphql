export default class Machines {
    private get: (endpoint: string) => Promise<any>;

    constructor(getter: Get) {
        this.get = getter;
    }

    async machine(id: number) {
        return this.get(`machine/${id}`);
    }
}
