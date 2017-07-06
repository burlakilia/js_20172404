import Model from '../model';

export default class Positions extends Model {

    constructor() {
        super();
    }

    getByColor(color = 'white') {
        return this.request('get', './public/data.json')
            .then(data => data[color] || []);
    }

}