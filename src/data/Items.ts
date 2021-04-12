export default class Items {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    // todo: item

    // todo: item attributes

    // todo: item categories

    // todo: item fling effects
    
    // todo: item pockets
}