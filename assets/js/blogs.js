class Blog {
    constructor () {
        this.init();
    }

    async init() {
        this.blogs = [];
        this.limit = 6;
        this.count = 0;

        this.emptyBlogs =  document.querySelector('.blogs-empty');
        this.buttonMoreBlogs = document.querySelector('.btn-more');

        this.modalContainer = await (new Modal()).init();
        
        this.loadListBlogs();
        this.addBlog();
        this.showMoreBlogs();
    }

    loadListBlogs() {
        const tmp = localStorage.getItem('blogs');

        if (tmp === null || tmp === '') {
            localStorage.setItem('blogs', JSON.stringify(this.blogs));
        } else {
            this.blogs = JSON.parse(tmp);
            this.blogs.sort((a, b) => b.date - a.date)
        }

        this.renderBlog(0, this.limit + 1);
        this.changeListBlogs();
        this.getStatistics();
    }

    changeListBlogs() {
        localStorage.setItem('blogs', JSON.stringify(this.blogs));
        this.emptyBlogs.style.display = this.blogs.length === 0 ? 'block' : 'none';
        this.buttonMoreBlogs.style.display =  this.count >= this.blogs.length ? 'none' : 'block';
    }

    showMoreBlogs() {
        document.querySelector('.btn-more').addEventListener('click', (e) => {
            this.renderBlog(this.count, this.count + this.limit, true);

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

            this.renderBlog(0, this.count + (this.count < this.blogs.length - 1 ? 0 : 1));

            this.changeListBlogs();

            this.getStatistics();
            
            e.target.reset();

            modal.style.display = 'none';
            modal.close();
        });
    }

    delBlog(btn) {
        btn.addEventListener('click', (e) => {
            let article = e.target.closest('.card-blog-min');

            if (article === null) {
                article = e.target.closest('article');
            }

            this.blogs.splice(Number(article.dataset.index), 1);
            
            this.renderBlog(0, this.count + (this.count < this.blogs.length ? 0 : 1));

            this.changeListBlogs();

            this.getStatistics();
        });
    }

    renderBlog(start, end, isMore = false) {
        const blogFirst = document.querySelector('.card-blog');
        const blockListBlogs = document.querySelector('.card-blog-list');
        const blockFirstScreen = document.querySelector('.blogs-first-screen');
        let article;
        
        if (!isMore) {
            if (blogFirst !== null) {
                blogFirst.remove();
            }

            blockListBlogs.innerHTML = '';
        }

        const sliceBlogs = this.blogs.slice(start, end);
        const countOld = this.count;
        this.count = start === 0 ? end : (this.count + sliceBlogs.length);
        
        sliceBlogs.map((item, index) => {
            if (index === 0 && !isMore) {
                article = document.getElementById('blog-first').content.cloneNode(true).querySelector('article');
            } else {
                article = document.getElementById('blog-min').content.cloneNode(true).querySelector('.card-blog-min');
            }

            const time = article.querySelector('time');
            
            const date = new Date(item.date);
            time.setAttribute('datetime', date.getFullYear() + '-' + (Number(date.getMonth()) < 10 ? '0' : '') + date.getMonth() + '-' + date.getDate());
            time.innerText = date.toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' });

            article.querySelector('.title').innerText = item.title;
            article.querySelector('.description').innerText = item.text;
            
            article.dataset.index = index + (!isMore ? 0 : countOld);
            

            if (index === 0 && !isMore) {
                blockFirstScreen.after(article);
            } else {
                blockListBlogs.appendChild(article);
            }

            this.delBlog(article.querySelector('.btn-del'));
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