import { InjectionToken } from "@angular/core";
import { IBlogRepository } from "./blog-repository.interface";

export const BLOG_REPOSITORY = new InjectionToken<IBlogRepository>('Сервис для работы с одной статьей');