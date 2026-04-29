import { InjectionToken } from "@angular/core";
import { IBlogsStore } from "./blogs-store.interface";

export const BLOGS_STORE = new InjectionToken<IBlogsStore>('Сервис хранилище статей');