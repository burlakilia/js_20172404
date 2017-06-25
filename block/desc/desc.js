(function () {

    let template = `
           <table class="desc">
                <tr>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                </tr>
                <tr>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                </tr>
                <tr>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                </tr>
                                <tr>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                </tr>
                <tr>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                </tr>
                <tr>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                </tr>
                <tr>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                </tr>
                <tr>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                    <td class="desc__cell"></td>
                </tr>
            </table> 
    `;

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