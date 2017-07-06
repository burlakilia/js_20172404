import Game from '../../game/game.js';
// Drag and drop impomentation

function dragStart(ev) {
    this.style.opacity = '0.4';
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    return true;
}

function dragOver(ev) {
    event.preventDefault();
    return false;
}


function dragDrop(ev) {
    let data = ev.dataTransfer.getData("Text");
    let old_figure = document.getElementById(data);
    let new_figure = ev.target

    // If no figure on target field
    if (this.childElementCount !== 1) {
        Game.isValidMove();
        new_figure.appendChild(old_figure);
    } else {
        // if Figure already exists on target field, we are killing it
        if (new_figure.tagName === 'IMG') {
            new_figure.parentElement.appendChild(document.getElementById(data));
            new_figure.remove();
        }
    }
    ev.stopPropagation();
    return false;
}

function imgDrop(ev) {
    this.style.opacity = '1';
}


export default class Figure {

    constructor(node) {
        this.node = node;
    }


    render(x, y, isBlack) {

        let img = document.createElement('img');
        img.className = 'figure';

        if (isBlack) {
            img.src = 'public/images/black-checker.png';
        } else {
            img.src = 'public/images/white-checker.png';
        }

        let spawnTo = document.querySelector(`tr[data-row="${x}"] > td[data-cell="${y}"]`);
        img.id = x + y;

        spawnTo.appendChild(img);

        // Add DnD events
        let td = document.querySelectorAll('td');
        td.forEach(t => {
            t.addEventListener('drop', dragDrop, false);
            t.addEventListener('dragover', dragOver, false);
        });
        img.addEventListener('dragstart', dragStart, false);
        img.addEventListener('dragend', imgDrop, false);


    }


}

