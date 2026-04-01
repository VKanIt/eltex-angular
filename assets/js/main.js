class Main {
    constructor () {
        this.init();
    }

    init() {
        const navButtons = document.querySelectorAll('.header__nav a');
            
        navButtons.forEach((item) => {
            if (window.location.pathname === item.pathname) {
                item.classList.add('active');
            }
        });
    }
}

new Main();