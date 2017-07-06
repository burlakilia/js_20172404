export default class Model {


    request(method = 'GET', url) {
        let req = new XMLHttpRequest();

        req.open(method.toUpperCase(), url);
        req.send();

        console.log('12132123');

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

}