import Figure from '../desc/figure/figure.js';

let whiteStarting = [
    [1, 'a'], [1, 'c'], [1, 'e'], [1, 'g'],
    [2, 'b'], [2, 'd'], [2, 'f'], [2, 'h'],
    [3, 'a'], [3, 'c'], [3, 'e'], [3, 'g'],
];

let blackStarting = [
    [6, 'b'], [6, 'd'], [6, 'f'], [6, 'h'],
    [7, 'a'], [7, 'c'], [7, 'e'], [7, 'g'],
    [8, 'b'], [8, 'd'], [8, 'f'], [8, 'h'],
];


export default class Game {

    constructor() {
        this.turns = 0;
        let figures = document.querySelectorAll('img.figure');
        figures.forEach(figure => {
            figure.remove()
        });

        this.spawnFigures();
    }

    //#TODO make move for AI
    makeMove() {

    }

    //#TODO check if its posible to move here
    static isValidMove() {
        return true
    }


    spawnFigures() {

        let figure = new Figure();
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

