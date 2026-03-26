class Main {
    constructor () {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', (e) => {
            const navButtons = e.target.querySelectorAll('.header__nav a');
            
            navButtons.forEach((item) => {
                if (window.location.pathname === item.pathname) {
                    item.classList.add('active');
                }
            });
        });
    }
}

new Main();