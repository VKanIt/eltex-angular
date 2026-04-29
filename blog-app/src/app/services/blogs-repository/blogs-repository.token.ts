import { InjectionToken } from "@angular/core";
import { IBlogsRepository } from "./blogs-repository.interface";

export const BLOGS_REPOSITORY = new InjectionToken<IBlogsRepository>('Сервис для работы со статьями');