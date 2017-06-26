(function () {

    class Desc {

        constructor(node) {
            this.node = node;
            this.render();
            this.node.addEventListener('click', event => this.onClick(event));
        }

        render() {
            this.node.innerHTML = this.setTemplate(8);
        }

        onClick(event) {
            let target = event.target;

            if ( target.classList.contains('desc__cell') ) {
                if (this.current) {
                    this.current.classList.toggle('desc__cell_active', false);
                }

                target.classList.toggle('desc__cell_active');
                this.current = target;
            }
        }

        setTemplate(_size) {

            let row = ``;

            for (let i = 0; i < _size; i++) {
                let cell = ``;
                for (let j = 0; j < _size; j++) {
                    cell += `\t<td class="desc__cell desc__cell"></td>\n`;
                }
                row += `<tr>\n${cell}</tr>\n`;
            }

            return `<table class="desc">\n${row}\n</table>\n`;
        }

    }

    window.Desc = Desc;
})();