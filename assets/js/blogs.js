import { loadListBlogs, renderBlog } from "./utils.js";
import { Modal } from "./modal.js";

class Blog {
    constructor() {
        this.init();
    }

    async init() {
        this.limit = 6;

        this.emptyBlogs =  document.querySelector('.blogs-empty');
        this.buttonMoreBlogs = document.querySelector('.btn-more');

        this.modalContainer = await (new Modal()).init();
        
        this.blogs = loadListBlogs();
        this.count = renderBlog(0, this.limit + 1, this.blogs, 0);

        this.addListenerDelButton();

        this.changeListBlogs();
        this.getStatistics();
        this.addBlog();
        this.showMoreBlogs();
    }

    changeListBlogs() {
        localStorage.setItem('blogs', JSON.stringify(this.blogs));
        this.emptyBlogs.style.display = this.blogs.length === 0 ? 'block' : 'none';
        this.buttonMoreBlogs.style.display =  this.count >= this.blogs.length ? 'none' : 'block';
    }

    showMoreBlogs() {
        document.querySelector('.btn-more').addEventListener('click', (e) => {
            this.count = renderBlog(this.count, this.count + this.limit, this.blogs, this.count, true);
            this.addListenerDelButton();

            if (this.count >= this.blogs.length) {
                this.buttonMoreBlogs.style.display = 'none';
            }
        });
    }

    addBlog() {
        const form = this.modalContainer.querySelector('.form-add-blog');
        if (form === null) {
            return;
        }


        const modal = form.closest('dialog');
        this.checkValid(form, true);

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!this.checkValid(form)) {
                return;
            }
            
            const newBlog = {
                date: (new Date()).getTime(),
                title: e.target['title'].value,
                text: e.target['text'].value
            };

            this.blogs.unshift(newBlog);

            this.count = renderBlog(0, this.count + (this.count < this.blogs.length - 1 ? 0 : 1), this.blogs, this.count);

            this.addListenerDelButton();

            this.changeListBlogs();

            this.getStatistics();
            
            e.target.reset();

            modal.style.display = 'none';
            modal.close();
        });
    }

    addListenerDelButton() {
        const buttonsDel = document.querySelectorAll('.btn-del');
        buttonsDel.forEach((node) => {
            node.addEventListener('click', (e) => {
                let article = e.target.closest('.card-blog-min');

                if (article === null) {
                    article = e.target.closest('article');
                }

                this.blogs.splice(Number(article.dataset.index), 1);

                this.count = renderBlog(0, this.count + (this.count < this.blogs.length ? 0 : 1), this.blogs, this.count);
                this.addListenerDelButton();

                this.changeListBlogs();

                this.getStatistics();
            });
        });
    }

    checkValid(form, isInitEvents = false) {
        let isValid = true;

        Object.keys(form).map((key) => {
            if (form[key].type === 'submit') {
                return;
            }

            if (isInitEvents) {
                form[key].addEventListener('input', (e) => {
                    this.validation(e.target);
                });

                return;
            }

            if (!this.validation(form[key])) {
                isValid = false;
            }
        });

        return isValid;
    }

    validation(elem) {
        const label = elem.closest('label');

        if (!elem.validity.valid) {
            elem.classList.add('invalid');
            label.querySelector('.invalid-message').style.display = 'block';
        } else {
            elem.classList.remove('invalid');
            label.querySelector('.invalid-message').style.display = 'none';
        }

        return elem.validity.valid;
    }

    getStatistics() {
        const modal = this.modalContainer.querySelector('#showStatistic');

        if (modal === null) {
            return;
        }

        modal.querySelector('.block-statistic__item-number').innerText = this.blogs.length;
    }
}

new Blog();