export function loadListBlogs() {
    let blogs = [];
    const tmp = localStorage.getItem('blogs');

    if (tmp === null || tmp === '') {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    } else {
        blogs = JSON.parse(tmp);
        blogs.sort((a, b) => b.date - a.date)
    }

    return blogs;
}

export function renderBlog(start, end, blogs, count, isMore = false, isAboutPage = false) {
    const blockListBlogs = document.querySelector('.card-blog-list');
    const blockFirstScreen = document.querySelector('.blogs-first-screen');
    let article;
    
    if (!isMore && !isAboutPage) {
        const blogFirst = document.querySelector('.card-blog');
        if (blogFirst !== null) {
            blogFirst.remove();
        }

        blockListBlogs.innerHTML = '';
    }

    const sliceBlogs = blogs.slice(start, end);

    const countOld = count;
    const newCount = start === 0 ? end : (count + sliceBlogs.length);
    
    sliceBlogs.map((item, index) => {
        if ((index === 0 || isAboutPage) && !isMore) {
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
        

        if (index === 0 && !isAboutPage && !isMore) {
            blockFirstScreen.after(article);
        } else {
            blockListBlogs.appendChild(article);
        }
    });

    return newCount;
}

