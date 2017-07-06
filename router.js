
export default class Router {

    constructor(node) {
        this.node = node;
        this.routes = {};
        this.current = null;
    }

    register(route, callback) {
        this.routes[route] = callback;
    }

    onRoute(route) {
        let callback = this.routes[route];

        if (!callback) {
            console.error('invalid route', route);
            return;
        }

        if (this.current) {
            this.current.toggle(false);
        }

        this.current = this.routes[route];
        this.current.toggle(true);

        window.history.pushState({}, 'Новая игра', './game');
    }

    start() {
        this.node.addEventListener('click', event => {
            let target = event.target;

            if (!target instanceof HTMLAnchorElement) {
                return;
            }

            event.preventDefault();

            this.onRoute(target.getAttribute('href'))
        });

        this.onRoute(window.location.pathname);
    }
}