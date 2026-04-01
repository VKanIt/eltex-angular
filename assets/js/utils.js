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
    
    if (!isMore && !isAboutPage) {
         blockListBlogs.innerHTML = '';
    }

    const sliceBlogs = blogs.slice(start, end);

    const countOld = count;
    const newCount = start === 0 ? end : (count + sliceBlogs.length);

    sliceBlogs.map((item, index) => {
        const article = document.getElementById('blog').content.cloneNode(true).querySelector('.blog-layout');

        const time = article.querySelector('time');
        
        const date = new Date(item.date);
        time.setAttribute('datetime', date.getFullYear() + '-' + (Number(date.getMonth()) < 10 ? '0' : '') + date.getMonth() + '-' + date.getDate());
        time.innerText = date.toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' });

        article.querySelector('.title').innerText = item.title;
        article.querySelector('.description').innerText = item.text;
        
        article.dataset.index = index + (!isMore ? 0 : countOld);
        

        blockListBlogs.appendChild(article);
    });

    return newCount;
}

export function showLoader(loader) {
    loader.style.display = 'flex';
}

export function hideLoader(loader) {
    loader.style.display = 'none';
}

