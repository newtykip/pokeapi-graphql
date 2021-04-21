export default class Machines {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    async machine(id: number) {
        return this.get(`machine/${id}`);
    }
}