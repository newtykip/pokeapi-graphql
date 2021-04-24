type Query = string | number;

export default class Contests {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
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