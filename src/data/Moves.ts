export default class Moves {
    private get: (endpoint: string) => Promise<any>;

    constructor(getter: Get) {
        this.get = getter;
    }

    async move(query: Query): Promise<any> {
        return await this.get(`move/${query}`);
    }

    async ailments(query: Query): Promise<any> {
        return await this.get(`move-ailment/${query}`);
    }

    async battleStyle(query: Query): Promise<any> {
        return await this.get(`move-battle-style/${query}`);
    }

    async category(query: Query): Promise<any> {
        return await this.get(`move-category/${query}`);
    }

    async damageClass(query: Query): Promise<any> {
        return await this.get(`move-damage-class/${query}`);
    }

    async learnMethod(query: Query): Promise<any> {
        return await this.get(`move-learn-method/${query}`);
    }

    async target(query: Query): Promise<any> {
        return await this.get(`move-target/${query}`);
    }
}
