type Query = string | number;

export default class Items {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    async item(query: Query): Promise<any> {
        return await this.get(`item/${query}`);
    }

    async attribute(query: Query): Promise<any> {
        return await this.get(`item-attribute/${query}`);
    }

    async category(query: Query): Promise<any> {
        return await this.get(`item-category/${query}`);
    }

    async flingEffect(query: Query): Promise<any> {
        return await this.get(`item-fling-effect/${query}`);
    }

    async pocket(query: Query): Promise<any> {
        return await this.get(`item-pocket/${query}`);
    }
}