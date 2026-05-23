import { Category } from "../../types/Category";
import { ICategoriesRepository } from "./categories-repository.interface";
import { Injectable } from "@angular/core";
import { CategoryResponseGetDto } from "../../dto/category/category.response.get.dto";
import { Observable } from "rxjs";

@Injectable()
export class CategoriesRepositoryLc implements ICategoriesRepository {
    getCategories(): Observable<Category[]> {
        return new Observable((subscriber) => {
            subscriber.next([]);
        });
    }

    addCategory(name: string): Observable<Category> {
        return new Observable((subscriber) => {
            subscriber.next({
                id: 'id',
                name: 'Категория'
            });
        });
    }

    mapCategory(data: CategoryResponseGetDto): Category {
        return {
            id: data.id,
            name: data.name,
        }
    } 
}