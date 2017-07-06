import Desc from '../desc/desc.js';
import Game from '../game/game.js';
import Router from '../../router';
import Login from '../login/login';

function request(method, url) {
    let req = new XMLHttpRequest();

    req.open(method, url);
    req.send();

    return new Promise((resolve, reject) => {

        req.addEventListener('readystatechange', () => {

            if (req.readyState !== 4) {
                return;
            }

            if (req.status === 200) {
                resolve(JSON.parse(req.responseText));
            } else {
                reject(req);
            }

        });

    })


}

window.addEventListener('DOMContentLoaded', () => {
    let router = new Router(document.body);
    let desc = new Desc(document.querySelector('.js-desc'));
    let login = new Login(document.querySelector('.js-login'));
    let game = new Game();

    router.register('/game', desc);
    router.register('/login', login);

    router.start();
});

