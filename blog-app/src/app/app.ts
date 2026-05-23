import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { Header } from "./ui/components/header/header";
import { Footer } from "./ui/components/footer/footer";
import { MatProgressBar } from '@angular/material/progress-bar';
import { BLOGS_STORE } from './services/blogs-store/blogs-store.token';
import { BlogsStore } from './services/blogs-store/blogs-store';
import { BLOGS_REPOSITORY } from './services/blogs-repository/blogs-repository.token';
import { BlogsRepository } from './services/blogs-repository/blogs-repository';
import { STORAGE_SERVICE } from './services/storage-service/storage-service.token';
import { StorageService } from './services/storage-service/storage-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from '../environments/environment';
import { BlogsRepositoryLc } from './services/blogs-repository/blog-repository-lc';
import { BLOG_MAPPER } from './services/blog-mapper/blog-mapper.token';
import { BlogMapper } from './services/blog-mapper/blog-mapper';
import { CATEGORIES_REPOSITORY } from './services/categories-repository/categories-repository.token';
import { CategoriesRepository } from './services/categories-repository/categories-repository';
import { CategoriesRepositoryLc } from './services/categories-repository/categories-repository-lc';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MatProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [
    { provide: BLOGS_STORE, useClass: BlogsStore },
    { provide: BLOGS_REPOSITORY, useClass: environment.useServiceLc ? BlogsRepositoryLc : BlogsRepository },
    { provide: STORAGE_SERVICE, useClass: StorageService },
    { provide: BLOG_MAPPER, useClass: BlogMapper },
    { provide: CATEGORIES_REPOSITORY, useClass: environment.useServiceLc ? CategoriesRepositoryLc : CategoriesRepository }
  ]
})
export class App {
  //-----INJECTS-----\\
  private readonly router = inject(Router);
  private destroyRef = inject(DestroyRef);

  //-----SIGNALS-----\\
  protected isNavigating = signal(false);
  protected value = signal(0);

  //-----METHODS-----\\
  constructor() {
    this.router.events
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          this.value.set(0);
          this.isNavigating.set(true);
        }

        for (let i = 0; i <= 100; i++) {
          this.value.set(i);
        }

        if (event instanceof NavigationEnd ||
          event instanceof NavigationCancel || 
          event instanceof NavigationError
        ) {
          this.value.set(100);
          this.isNavigating.set(false);
        }
      });
  }
}