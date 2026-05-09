import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./ui/pages/index/index').then(c => c.Index),
        title: 'Главная'
    },
    {
        path: 'blogs',
        loadComponent: () => import('./ui/pages/blogs/blogs').then(c => c.Blogs),
        children: [
            {
                path: '',
                title: 'Блог',
                loadComponent: () => import('./ui/pages/blogs-list/blogs-list').then(c => c.BlogsList),
            },
            {
                path: ':id',
                loadComponent: () => import('./ui/pages/blog/blog').then(c => c.Blog),
            }
        ]
    },
    { 
        path: '**',
        loadComponent: () => import('./ui/pages/page-not-found/page-not-found').then(c => c.PageNotFound),
    }
];
