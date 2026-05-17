import { InjectionToken } from "@angular/core";
import { IBlogCardRepository } from "./blog-card-repository.interface";

export const BLOG_CARD_REPOSITORY = new InjectionToken<IBlogCardRepository>('Сервис для работы с одной статьей');