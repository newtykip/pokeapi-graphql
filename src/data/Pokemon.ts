type Query = string | number;

export default class Pokemon {
    private get: (endpoint: string) => Promise<any>;
    private baseURL: string;

    constructor(get, url) {
        this.get = get;
        this.baseURL = url;
    }

    async ability(query: Query): Promise<any> {
      return await this.get(`ability/${query}`);
    }

    async characteristic(id: number): Promise<any> {
      return await this.get(`characteristic/${id}`);
    }

    async eggGroup(query: Query): Promise<any> {
      return await this.get(`egg-group/${query}`);
    }

    async gender(query: Query): Promise<any> {
      return await this.get(`gender/${query}`);
    }

    async growthRate(query: Query): Promise<any> {
      return await this.get(`growth-rate/${query}`);
    }

    async nature(query: Query): Promise<any> {
      return await this.get(`nature/${query}`);
    }

    async pokeathlonStat(query: Query): Promise<any> {
      return await this.get(`pokeathlon-stat/${query}`);
    }

    async pokemon(query: Query): Promise<any> {
      return await this.get(`pokemon/${query}`);
    }

    async locationAreas(query: Query): Promise<any> {
      return await this.get(`pokemon/${query}/encounters`);
    }

    async color(query: Query): Promise<any> {
      return await this.get(`pokemon-color/${query}`);
    }

    async form(query: Query): Promise<any> {
      return await this.get(`pokemon-form/${query}`);
    }

    async habitat(query: Query): Promise<any> {
      return await this.get(`pokemon-habitat/${query}`);
    }

    async shape(query: Query): Promise<any> {
      return await this.get(`pokemon-shape/${query}`);
    }

    async species(query: Query): Promise<any> {
      return await this.get(`pokemon-species/${query}`);
    }

    async stat(query: Query): Promise<any> {
      return await this.get(`stat/${query}`);
    }

    async type(query: Query): Promise<any> {
      return await this.get(`type/${query}`);
    }
}
