export default class Contests {
    private get: Get;

    constructor(getter: Get) {
        this.get = getter;
    }

    async type(query: Query): Promise<any> {
        return await this.get(`contest-type/${query}`);
    }

    async effect(id: number): Promise<any> {
        return await this.get(`contest-effect/${id}`);
    }

    async superEffect(id: number): Promise<any> {
        return await this.get(`super-contest-effect/${id}`);
    }
}
