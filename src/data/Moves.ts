export default class Moves {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    // todo: moves

    // todo: moves ailments

    // todo: move battle styles

    // todo: move categories

    // todo: move damage classes
    
    // todo: move learn methods

    // todo: move targets
}