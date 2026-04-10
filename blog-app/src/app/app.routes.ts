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
        title: 'Блог'
    },
];
