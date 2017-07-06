import Figure from '../desc/figure/figure.js';
import Model from '../../model/positions';


export default class Game {

    constructor() {
        this.turns = 0;
        this.model = new Model();

        let figures = document.querySelectorAll('img.figure');
        figures.forEach(figure => {
            figure.remove()
        });

        this.spawnFigures()
            .then(function () {
                console.log('fasdafdsasdfafsd');
            });
    }

    //#TODO make move for AI
    makeMove() {

    }

    //#TODO check if its posible to move here
    static isValidMove() {
        return true
    }

    async spawnFigures() {
        let figure = new Figure();

        let whiteStarting = await this.model.getByColor('white');
        let blackStarting = await this.model.getByColor('black');

        //spawn white
        for (let w of whiteStarting) {
            figure.render(w[0], w[1], false);
        }
        //spawn black
        for (let b of blackStarting) {
            figure.render(b[0], b[1], true);
        }


    }
}

