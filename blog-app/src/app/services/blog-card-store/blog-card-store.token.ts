import { InjectionToken } from "@angular/core";
import { IBlogCardStore } from "./blog-card-store.interface";

export const BLOG_CARD_STORE = new InjectionToken<IBlogCardStore>('Сервис хранилище данных статьи');