import { InjectionToken } from "@angular/core";
import { IBlogStore } from "./blog-store.interface";

export const BLOG_STORE = new InjectionToken<IBlogStore>('Сервис хранилище данных статьи');