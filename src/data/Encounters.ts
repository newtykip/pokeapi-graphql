export default class Encounters {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    // todo: encounter methods

    // todo: encounter conditions

    // todo: encounter condition values
}