import { loadListBlogs, renderBlog } from "./utils.js";

class About {
    constructor() {
        this.init();
    }

    init() {
        const blogs = loadListBlogs();
        renderBlog(0, 2, blogs, 0, false, true);

        document.querySelector('.link-all-blogs').style.display = blogs.length === 0 ? 'none' : 'flex';
    }
}

new About();