type Query = string | number;

export default class Games {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    async generation(query: Query): Promise<any> {
        return await this.get(`generation/${query}`);
    }

    async pokedex(query: Query): Promise<any> {
        return await this.get(`pokedex/${query}`);
    }

    async version(query: Query): Promise<any> {
        return await this.get(`version/${query}`);
    }

    async versionGroup(query: Query): Promise<any> {
        return await this.get(`version-group/${query}`);
    }
}