import template from './desc.pug';
import View from '../view';

let cells = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let rows = [8, 7, 6, 5, 4, 3, 2, 1];


export default class Desc extends View {

    constructor(node) {
        super();
        this.node = node;
        this.render();
        this.node.addEventListener('click', event => this.onClick(event));
        this.toggle(false);
    }

    render() {
        this.node.innerHTML = template({
            title: 'Шашки',
            rows: rows,
            cells: cells
        });
    }

    onClick(event) {
        let target = event.target;
        if (target.tagName !== 'TD') {
            return;
        }
        if (this.current) {
            this.current.classList.toggle('desc__cell_active', false);
        }

        target.classList.toggle('desc__cell_active');
        this.current = target;
    }

}

