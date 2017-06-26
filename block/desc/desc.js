(function () {

    let table = document.createElement('table');
    table.className = 'desc';

    for(let i=0; i<8; i++){
        let tr = document.createElement('tr');
        for(let r=0; r<8; r++){
            let td = document.createElement('td');
            td.className = 'desc__cell';
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

    class Desc {

        constructor(node) {
            this.node = node;
            this.render();
            this.node.addEventListener('click', event => this.onClick(event));
        }

        render() {
            this.node.appendChild(table);
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

    window.Desc = Desc;
})();