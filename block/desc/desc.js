import template from './desc.pug';

export default class Desc {

    constructor(node) {
        this.node = node;
        this.render();
        this.node.addEventListener('click', event => this.onClick(event));
    }

    render() {
        this.node.innerHTML = template({
            title: 'Привет',
            rows: [8, 7, 6, 5, 4, 3, 2, 1],
            cells: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
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

