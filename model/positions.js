let positions = {

    white: [
        [1, 'a'], [1, 'c'], [1, 'e'], [1, 'g'],
        [2, 'b'], [2, 'd'], [2, 'f'], [2, 'h'],
        [3, 'a'], [3, 'c'], [3, 'e'], [3, 'g']
    ],

    black: [
        [6, 'b'], [6, 'd'], [6, 'f'], [6, 'h'],
        [7, 'a'], [7, 'c'], [7, 'e'], [7, 'g'],
        [8, 'b'], [8, 'd'], [8, 'f'], [8, 'h']
    ]

};

export default class Positions {


    getByColor(color = 'white') {
        return positions[color];


        request('GET', './public/data.json')
            .then(data => console.log(data), req => console.log(req.status));


        fetch('./public/data.json', {
            credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(data => console.log(data), err => console.error(err));
    }

}