import { InjectionToken } from "@angular/core";
import { ICategoriesRepository } from "./categories-repository.interface";

export const CATEGORIES_REPOSITORY = new InjectionToken<ICategoriesRepository>('Сервис для работы с категориями статей');