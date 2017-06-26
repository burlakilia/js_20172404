(function () {

    class Desc {

        constructor(node) {
            this.node = node;
            this.render();
            this.node.addEventListener('click', event => this.onClick(event));
        }

        render() {
            this.node.innerHTML = this.getTemplate(8);
        }

        onClick(event) {
            let target = event.target;

            if (target.clientWidth == 51) {
                if (this.current) {
                    this.current.classList.toggle('desc__cell_active', false);
                }

                target.classList.toggle('desc__cell_active');
                this.current = target;
            }
        }

        getTemplate($_size) {

            let cell = ``, row = ``;


            for (let i = 0; i < $_size; i++) {
                cell += `\t<td class="desc__cell desc__cell"></td>\n`;
            }


            for (let i = 0; i < $_size; i++) {
                row += `<tr>\n${cell}</tr>\n`;
            }

            return `<table class="desc">\n${row}\n</table>\n`;
        }

    }

    window.Desc = Desc;
})();