import { loadListBlogs, renderBlog, showLoader, hideLoader } from "./utils.js";

class About {
    constructor() {
        this.init();
    }

    init() {
        const loader = document.querySelector('.loader');
        const blogs = loadListBlogs();

        showLoader(loader);
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(renderBlog(0, 2, blogs, 0, false, true));
            }, 2000);
        }).finally(() => {
            hideLoader(loader);
            document.querySelector('.link-all-blogs').style.display = blogs.length === 0 ? 'none' : 'flex';
        });
    }
}

new About();