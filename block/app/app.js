import Desc from '../desc/desc.js';

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
    let desc = new Desc(document.querySelector('.js-desc'));


    request('GET', './public/data.json')
        .then(data => console.log(data), req => console.log(req.status));


    fetch('./public/data.json', {
        credentials: 'same-origin'
    })
        .then(response => response.json())
        .then(data => console.log(data), err => console.error(err));

});

