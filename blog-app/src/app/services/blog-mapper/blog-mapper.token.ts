import { InjectionToken } from "@angular/core";
import { IBlogMapper } from "./blog-mapper.interface";

export const BLOG_MAPPER = new InjectionToken<IBlogMapper>('Сервис для преобразования данных блога с сервера');