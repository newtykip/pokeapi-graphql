export default class Berries {
    private get: Get;

    constructor(getter: Get) {
        this.get = getter;
    }

    async berry(query: Query): Promise<any> {
        const { natural_gift_type: gift_type, ...data } = await this.get(
            `berry/${query}`
        );

        return {
            ...data,
            gift_type,
        };
    }

    async firmness(query: Query): Promise<any> {
        return await this.get(`berry-firmness/${query}`);
    }

    async flavor(query: Query): Promise<any> {
        return await this.get(`berry-flavor/${query}`);
    }
}
