'use strict';
(function () {

    let template = '<table class="desc"><tr>';

    for (let i=0; i<8; i++){

        for (let j = 0; j<8; j++){

            template += '<td class="desc__cell"></td>';
        }

        template += '</tr><tr>';
    }

    template += '</tr></table>';

    class Desc {

        constructor(node) {
            this.node = node;
            this.render();
            this.node.addEventListener('click', event => this.onClick(event));
        }

        render() {
            this.node.innerHTML = template;
        }

        onClick(event) {
            let target = event.target;

            if(target.tagName != 'TD') return;

            if (this.current) {
                this.current.classList.toggle('desc__cell_active', false);
            }

            target.classList.toggle('desc__cell_active');
            this.current = target;
        }

    }

    window.Desc = Desc;
})();